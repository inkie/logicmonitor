define(["handlebars","text!demo/templates/AutoComplete.html","text!demo/templates/BlockUI.html","text!demo/templates/Buttons.html","text!demo/templates/DemoTree.html","text!demo/templates/DemoWorkspace.html","text!demo/templates/partials/placeholder.html","text!demo/templates/placeholder.html"], function (Handlebars,arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
	return {
		"demo/AutoComplete": Handlebars.compile(arg0),
		"demo/BlockUI": Handlebars.compile(arg1),
		"demo/Buttons": Handlebars.compile(arg2),
		"demo/DemoTree": Handlebars.compile(arg3),
		"demo/DemoWorkspace": Handlebars.compile(arg4),
		"demo/partials/placeholder": Handlebars.compile(arg5),
		"demo/placeholder": Handlebars.compile(arg6)
	};
});