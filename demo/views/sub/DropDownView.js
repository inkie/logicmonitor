define([
	'core',
	'demo/templates',
	'./MyDropDown'
], function (LM, templates,  MyDropDown) {
	return LM.View.extend({
		template: templates['demo/DropDown'],

		render: function () {
			this.$el.html(this.template());
			this.registerComponent('dropdown', new MyDropDown({
		        triggerEl: '#triggerDropDown',
				position: 'middle'
			}));
		}
	});
});