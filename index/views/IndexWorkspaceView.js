define([
	'core',
	'index/templates'
], function (LM, templates) {

	return LM.View.extend({
		className: 'workspace index-workspace',

		template: templates['index/IndexWorkspace'],

		events: {
		},

		appEvents: {
		},

		initialize: function (options) {
			this.module = options.module;
		},

		render: function () {
			var module = this.module;
			var loginUser = LM.getLoginUser();

			this.$el.html(this.template({
				userName: loginUser.username
			}));
		}
	});
});
