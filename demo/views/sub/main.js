/**
 * sub package
 */
define([
    './AutoCompleteView',
	'./ButtonsView',
	'./BlockUIView',
	'./CriteriaTableView',
	'./DropDownView',
	'./DropDownMenuView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView, DropDownView, DropDownMenuView) {

    return {
        'auto-complete': AutoCompleteView,
        'buttons': ButtonsView,
        'block-ui': BlockUIView,
        'criteria-table': CriteriaTableView,
        'dropdown': DropDownView,
        'dropdown-menu': DropDownMenuView
    };
});
