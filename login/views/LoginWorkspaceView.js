define([
	'core',
	'login/templates',
	'modelurls',
	'lmmsgbox'
], function (LM, templates, modelUrls, MessageBox) {

	return LM.View.extend({
		className: 'workspace',

		template: templates['login/LoginWorkspace'],

		events: {
			'click .btn-login': '_onLogin'
		},

		appEvents: {
		},

		initialize: function (options) {
			this.module = options.module;
		},

		render: function () {
			var module = this.module;

			this.$el.html(this.template({}));
		},

		_onLogin: function () {
			var data = this.serializeForm();

			this._login(data, function (err, userData) {
				if (!err) {
					// Storage the user data in localstorage
					var timestamp = new Date().getTime();
					LM.localStorage.securityUser = JSON.stringify({
						username: userData.username,
						id: userData.id,
						securityToken: userData.securityToken,
						timestamp:  timestamp,
						activeTimestamp: timestamp,
						remember: data.rem
					});

					location.href = 'index.html';
				} else {
					MessageBox.alert( err.status + ':' + err.errmsg, 'Log in error');
				}

			});
		},

		_login: function (data, cb) {
			LM.rajax({
				type: 'post',
				url: modelUrls.login,
				data: JSON.stringify({
					username: data.username,
					password: data.password
				}),
				success: function (response) {
					cb(null, response.data);
				},
				error: function (response) {
					cb(response);
				}
			});
		}
	});
});
