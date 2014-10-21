define(["handlebars","text!commons/logicmonitor/templates/TopNavBar.html","text!commons/logicmonitor/templates/partials/foot.html","text!commons/logicmonitor/templates/partials/placeholder.html"], function (Handlebars,arg0,arg1,arg2) {
	return {
		"commons/logicmonitor/TopNavBar": Handlebars.compile(arg0),
		"commons/logicmonitor/partials/foot": Handlebars.compile(arg1),
		"commons/logicmonitor/partials/placeholder": Handlebars.compile(arg2)
	};
});