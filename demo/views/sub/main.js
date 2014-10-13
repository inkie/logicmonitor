/**
 * sub package
 */
define([
    './AutoCompleteView',
	'./ButtonsView',
	'./BlockUIView',
	'./CriteriaTableView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView) {

    return {
        'auto-complete': AutoCompleteView,
	    'buttons': ButtonsView,
	    'block-ui': BlockUIView,
	    'criteria-table': CriteriaTableView
    };
});
