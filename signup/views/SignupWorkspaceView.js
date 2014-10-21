define([
	'core',
	'signup/templates'
], function (LM, templates) {

	return LM.View.extend({
		className: 'workspace',

		template: templates['signup/SignupWorkspace'],

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
