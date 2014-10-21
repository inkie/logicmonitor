define([
	'core',
	'login/templates'
], function (LM, templates) {

	return LM.View.extend({
		className: 'workspace',

		template: templates['login/LoginWorkspace'],

		events: {
		},

		appEvents: {
		},

		initialize: function (options) {
			this.module = options.module;
		},

		render: function () {
			var module = this.module;

			this.$el.html(this.template());
		}
	});
});
