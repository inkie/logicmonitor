/**
 * logicmonitor basic info table
 */
define([
	'lodash',
	'core',
	'commons/logicmonitor/controls/templates',
	'lmpager'
], function (_, LM, templates, Pager) {
	return LM.View.extend({
		className: 'lm-info-table',
		tagName: 'table',
		initialize: function (options) {
			options = options || {};
            _.defaults(options, {
                showEmptyMessage: true
            });
			this.coupleRows = options.coupleRows || false;
            this.showEmptyMessage = options.showEmptyMessage;
            this.emptyTableTemplate = options.emptyTableTemplate || templates['commons/logicmonitor2/controls/EmptyTable'];
            this.emptyMessage = options.emptyMessage || 'There is no data for this table';
			this.data = options.data || {};
			this.template = options.template || this.template;
		},

		render: function () {
            this.$el.html(this.template(this.data));
            if (this.coupleRows) {
                this._buildDoubleColumns();
            }
            if(this.showEmptyMessage && !this.$('tbody').html().trim()) {
                this.$el.html(this.emptyTableTemplate(this.emptyMessage));
            }
		},

		/**
		 * change
		 * <tr>
		 *     <td>name1</td> <td>value1</td>
		 * </tr>
		 * <tr>
		 *     <td>name2</td> <td>value2</td>
	     * <tr>
	     * to
		 * <tr>
		 *     <td>name1</td> <td>value1</td>
		 *     <td>name2</td> <td>value2</td>
		 * </tr>
		 * @private
		 */
		_buildDoubleColumns: function () {
			var $evenTrs = this.$('tr:even');
			var $oddTrs = this.$('tr:odd');

			$evenTrs.each(function (index, tr) {
				var $oddTr = $oddTrs.eq(index);

				if($oddTr.length > 0){
					var $children = $oddTr.children();
					$(tr).append($children);
					$oddTr.remove();
					$children.eq(0).addClass('secondary-column');
				} else{
					$(tr).append('<td class="info-name secondary-column"></td><td></td>');
				}
			});
		}
	});
});