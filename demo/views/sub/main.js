/**
 * sub package
 */
define([
    './AutoCompleteView',
	'./ButtonsView',
	'./BlockUIView',
	'./CriteriaTableView',
	'./DropDownView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView, DropDownView) {

    return {
        'auto-complete': AutoCompleteView,
	    'buttons': ButtonsView,
	    'block-ui': BlockUIView,
	    'criteria-table': CriteriaTableView,
	    'dropdown': DropDownView
    };
});
