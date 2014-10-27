/**
 * sub package
 */
define([
    './AutoCompleteView',
	'./ButtonsView',
	'./BlockUIView',
	'./CriteriaTableView',
	'./DialogView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView, DialogView) {

    return {
        'auto-complete': AutoCompleteView,
	    'buttons': ButtonsView,
	    'block-ui': BlockUIView,
	    'criteria-table': CriteriaTableView,
	    'dialog': DialogView
    };
});
