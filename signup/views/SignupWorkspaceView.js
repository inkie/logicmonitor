define([
	'core',
	'signup/templates',
	'jq-validationEngine-en'
], function (LM, templates) {

	return LM.View.extend({
		className: 'workspace',

		template: templates['signup/SignupWorkspace'],

		events: {
			'click .btn-signup': '_onClickSignup'
		},

		appEvents: {
		},

		initialize: function (options) {
			this.module = options.module;
		},

		render: function () {
			var module = this.module;

			this.$el.html(this.template());

			this.$('.validationEngineContainer').validationEngine({
			});
		},

		_onClickSignup: function () {

			if (this.$('.validationEngineContainer').validationEngine('validate')) {
				var data = this.serializeForm();
			}
		}
	});
});
