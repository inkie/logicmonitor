define(["handlebars","text!password/templates/PasswordWorkspace.html","text!password/templates/partials/placeholder.html","text!password/templates/placeholder.html"], function (Handlebars,arg0,arg1,arg2) {
	return {
		"password/PasswordWorkspace": Handlebars.compile(arg0),
		"password/partials/placeholder": Handlebars.compile(arg1),
		"password/placeholder": Handlebars.compile(arg2)
	};
});