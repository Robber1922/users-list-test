module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `
					@import "@/styles/_mixins.scss";
					@import "@/styles/_common.scss";
				`,
			},
		},
	},
	publicPath: process.env.NODE_ENV === 'production'
    ? '/users-list-test/'
    : '/'

};