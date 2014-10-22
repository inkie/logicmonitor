define([
    'lodash',
    'jquery',
    'core',
    'commons/logicmonitor/templates',
    'lmdropdownmenu',
	'modelurls'
], function (_, $, LM, templates, DropDownMenu, modelUrls) {

    return LM.View.extend({

	    template: templates['commons/logicmonitor/TopNavBar'],

        events: {
	        'click .btn-logoff': '_onLogoff'
        },

        appEvents: {
        },

        initialize: function (options) {
	        this.user = options.user;
	        this.render();
        },

        render: function () {
	        this.$el.html(this.template({
		        user: this.user
	        }));
        },

	    _onLogoff: function () {
		    this._logoff();
	    },

	    _logoff: function () {
		    var loginUser = LM.getLoginUser();
		    if (!loginUser) {
			    location.href = 'login.html';
			    return;
		    }

			LM.rajax({
				type: 'post',
				url: modelUrls.logoff(loginUser.id),
				success: function (response) {
					location.href = 'login.html';
				},
				error: function (response) {
					location.href = 'login.html';
				}
			});
		}
    });
});
