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
	'./DialogView',
	'./FilterBarView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView, DropDownView, DropDownMenuView, DialogView, FilterBarView) {
    return {
        'auto-complete': AutoCompleteView,
	    'buttons': ButtonsView,
	    'block-ui': BlockUIView,
	    'criteria-table': CriteriaTableView,
        'dropdown': DropDownView,
        'dropdown-menu': DropDownMenuView,
	    'dialog': DialogView,
	    'filter-bar': FilterBarView
    };
});
