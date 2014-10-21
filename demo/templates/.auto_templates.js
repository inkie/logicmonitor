define(["handlebars","text!demo/templates/AutoComplete.html","text!demo/templates/BlockUI.html","text!demo/templates/Buttons.html","text!demo/templates/CriteriaTable.html","text!demo/templates/DemoTree.html","text!demo/templates/DemoWorkspace.html","text!demo/templates/MyCriteriaTable.html","text!demo/templates/partials/MyCriteriaTableRow.html","text!demo/templates/partials/placeholder.html","text!demo/templates/placeholder.html"], function (Handlebars,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) {
	return {
		"demo/AutoComplete": Handlebars.compile(arg0),
		"demo/BlockUI": Handlebars.compile(arg1),
		"demo/Buttons": Handlebars.compile(arg2),
		"demo/CriteriaTable": Handlebars.compile(arg3),
		"demo/DemoTree": Handlebars.compile(arg4),
		"demo/DemoWorkspace": Handlebars.compile(arg5),
		"demo/MyCriteriaTable": Handlebars.compile(arg6),
		"demo/partials/MyCriteriaTableRow": Handlebars.compile(arg7),
		"demo/partials/placeholder": Handlebars.compile(arg8),
		"demo/placeholder": Handlebars.compile(arg9)
	};
});