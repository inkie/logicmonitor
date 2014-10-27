define([
	'core',
	'jquery',
	'demo/templates',
	'./MyDialog'
], function (LM, $, templates, MyDialog) {
	return LM.View.extend({
		events: {
			'click #openDialog': '_openDialog'
		},

		template: templates['demo/Dialog'],

		initialize: function () {
		},

		render: function () {
			this.$el.html(this.template());
		},

		_openDialog: function (e) {
			this.registerComponent('dialog', new MyDialog({
				width: 600,
				height: 400,
				title: 'Dialog Demo'
			}));
		}
	});
});
