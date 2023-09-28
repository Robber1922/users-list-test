<template>
	<div id="app">
		<AppContent/>
		<AppModal/>
	</div>
</template>

<script>
import AppContent from "../src/components/AppContent";
import AppModal from "@/components/AppModal";

export default {
	name: 'App',
	components: {
		AppContent,
		AppModal
	}
}
</script>

<style lang="scss">
body {
	margin: 0;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	color: #000000;

	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
}
</style>
