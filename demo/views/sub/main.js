/**
 * sub package
 */
define([
    './AutoCompleteView',
	'./ButtonsView',
	'./BlockUIView',
	'./CriteriaTableView',
	'./DropDownMenuView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView, DropDownMenuView) {

    return {
        'auto-complete': AutoCompleteView,
	    'buttons': ButtonsView,
	    'block-ui': BlockUIView,
	    'criteria-table': CriteriaTableView,
	    'dropdown-menu': DropDownMenuView
    };
});
