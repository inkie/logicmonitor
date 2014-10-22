define([
	'core',
	'signup/templates',
	'utils',
	'lmmsgbox',
	'commons/logicmonitor/models/UserModel',
	'lmblockui',
	'jq-validationEngine-en'
], function (LM, templates, utils, MessageBox, UserModel, BlockUI) {

	return LM.View.extend({
		className: 'workspace',

		template: templates['signup/SignupWorkspace'],

		events: {
			'click .btn-signup': '_onClickSignup'
		},

		appEvents: {
		},

		initialize: function (options) {
			this.module = options.module;
			this.blockUI = new BlockUI();
		},

		render: function () {
			var module = this.module;

			this.$el.html(this.template());

			this.$('.validationEngineContainer').validationEngine({
			});
		},

		_onClickSignup: function () {
			var that = this;

			if (this.$('.validationEngineContainer').validationEngine('validate')) {
				var data = this.serializeForm();

				this.blockUI.block({
					message: 'Signing up...'
				});

				this._signup(data, function (err, authData) {
					that.blockUI.unBlock();
					if (!err) {
						new MessageBox({
							type: 'alert',
							title: 'Sign up successfully',
							width: 600,
							bodyData: {
								msg: '<p style="line-height: 1.5">Thanks for registering! An account activation message has been sent to the email address <strong style="font-size: 16px;color:red;">' +
									data.email +
									'</strong> The activation link will only be active for 24 hours from the time of registration.' +
									'<a href="login.html" style="font-size: 16px;">Go to log in!</a></p>',
								allowHTML: true
							}
						}).on('dialog:closing', function () {
							setTimeout(function () {
								location.href = 'login.html';
							}, 0);
						});
					} else {
						if (typeof err.status != 'undefined') {
							MessageBox.alert( err.status + ':' + err.errmsg, 'Sign up error');
						} else {
							MessageBox.alert(err.message, 'Sign up error');
						}
					}
				});
			}
		},

		_signup: function (data, cb) {
			if (window.Firebase && LM.enableFirebase) {
				var firebase = new Firebase(LM.firebase.root);

				firebase.child('users').child(data.username).once('value', function (snap) {
					var user = snap.val();

					if (user) {
						cb({
							message: 'The usename has been registed, please select another one!'
						});
						return;
					}

					firebase.createUser({
						email    : data.email,
						password : data.password
					}, function (err) {
						if (!err) {
							// save the user's profile into Firebase so we can
							// list users, use them in security rules, and show profiles
							var newUser = firebase.child('users').child(data.username);
							newUser.set(data);
						}

						cb(err);
					});

				});
			} else {
				var user = new UserModel({
					username: data.username,
					email: data.email,
					password: data.password
				});

				user.save(data, {
					success: function (model, response) {
						cb(null, model.toJSON());
					},
					error: function (model, response) {
						cb(response);
					}
				});
			}
		}
	});
});
