/**
 * sub package
 */
define([
    './AutoCompleteView',
	'./ButtonsView',
	'./BlockUIView',
	'./CriteriaTableView',
	'./DropDownMenuView',
	'./DialogView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView, DropDownMenuView, DialogView) {

    return {
        'auto-complete': AutoCompleteView,
	    'buttons': ButtonsView,
	    'block-ui': BlockUIView,
	    'criteria-table': CriteriaTableView,
	    'dropdown-menu': DropDownMenuView,
	    'dialog': DialogView
    };
});
