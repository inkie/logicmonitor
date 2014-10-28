/**
 * sub package
 */
define([
    './AutoCompleteView',
	'./ButtonsView',
	'./BlockUIView',
	'./CriteriaTableView',
	'./DropDownView',
	'./DropDownMenuView',
	'./DialogView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView, DropDownView, DropDownMenuView, DialogView) {
    return {
        'auto-complete': AutoCompleteView,
	    'buttons': ButtonsView,
	    'block-ui': BlockUIView,
	    'criteria-table': CriteriaTableView,
        'dropdown': DropDownView,
        'dropdown-menu': DropDownMenuView,
	    'dialog': DialogView
    };
});
