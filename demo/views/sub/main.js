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
  './FilterBarView',
	'./FormControlsView'
], function (AutoCompleteView, ButtonsView, BlockUIView, CriteriaTableView, DropDownView, DropDownMenuView, 
  DialogView, FilterBarView, FormControlsView) {
    return {
        'auto-complete': AutoCompleteView,
	    'buttons': ButtonsView,
	    'block-ui': BlockUIView,
	    'criteria-table': CriteriaTableView,
        'dropdown': DropDownView,
        'dropdown-menu': DropDownMenuView,
	    'dialog': DialogView,
	    'filter-bar': FilterBarView,
      'form-controls': FormControlsView
    };
});
