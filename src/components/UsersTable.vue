<template>
    <table class="content__table table">
		<thead>
			<tr class="table__row --head">
				<th colspan="1">
					<div
						class="table__cell"
						@click="changeSort('name')"
					>
						<span class="table__span">Имя</span>
					</div>

				</th>
				<th colspan="1">
					<div
						class="table__cell"
						@click="changeSort('phone')"
					>
						<span class="table__span">Телефон</span>
					</div>
				</th>
			</tr>
		</thead>
		<tbody v-if="usersList.length > 0">
			<tr
				class="table__row"
				v-for="user in usersList"
				:key="user.id"
			>
				<td>
					<div
						class="table__cell"
						:style="getUserMargin(user)"
					>
						{{ user.name }}
					</div>
				</td>
				<td>
					<div class="table__cell">{{ user.phone }}</div>
				</td>
			</tr>
		</tbody>
		<tbody v-else>
			<tr class="table__row">
				<td colspan="2">
					<div class="table__cell">
						Нет пользователей
					</div>
				</td>
			</tr>
		</tbody>
    </table>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Sort } from "@/scripts/SortClass";

export default {
    name: "UsersTable",
	data() {
		return {
			sort: new Sort(),
		}
	},
	created() {
		if (localStorage.roistatStorage) {
			this.initUsers();
		}
	},
	methods: {
		...mapMutations(['initUsers', 'sortUsers']),
		getUserMargin(user) {
			return user.subordinationLevel === 0 ? {} : {
				marginLeft: 15 * user.subordinationLevel + 'px'
			}
		},
		changeSort(parameter) {
			if (this.usersList.length === 0) {
				return
			}
			this.sort.setValues(parameter);
			this.sortUsers(this.sort.getValues())
		}
	},
	computed: {
		...mapGetters(['usersList']),
	},
}
</script>

<style lang="scss">
.table {
	table-layout: fixed;
	width: 100%;
	border-collapse: collapse;
}
.table__row.--head .table__cell {
	@include dark;
	@include transition-bgc;
	cursor: pointer;
	background-color: #6782bd;

	&:hover {
		background-color: #4663a2;
	}
}
.table__cell {
	padding: 5px 10px;
	box-sizing: border-box;
	border: 2px solid #c7c6c6;
	margin: -2px;
	display: flex;
	text-align: left;
	align-items: center;
}
.table__span {
	flex-grow: 1;
}
</style>
