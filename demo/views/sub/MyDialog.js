define([
	'core',
	'jquery',
	'demo/templates',
	'lmdialog'
], function (LM, $, templates, Dialog) {
	return Dialog.extend({
		bodyTemplate: templates['demo/MyDialog'],
		footTemplate: templates['demo/MyDialogFoot'],

		events: {
			'click .btn-close': '_onClose'
		}
	});
});
