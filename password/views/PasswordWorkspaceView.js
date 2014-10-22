define([
	'core',
	'password/templates',
	'modelurls',
	'lmblockui',
	'lmmsgbox'
], function (LM, templates, modelUrls, BlockUI, MessageBox) {

	return LM.View.extend({
		className: 'workspace password-workspace',

		template: templates['password/PasswordWorkspace'],

		events: {
			'click .btn-send': '_onSend'
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
		},

		_onSend: function (cb) {
			var that = this;
			var data = this.serializeForm();

			this.blockUI.block({
				message: 'Sending...'
			});

			this._sendLink(data, function (err) {
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
					MessageBox.alert( err.status + ':' + err.errmsg, 'Sign up error');
				}
			});
		},

		_sendLink: function (data, cb) {
			LM.rajax({
				type: 'post',
				url: modelUrls.forgotpass,
				data: JSON.stringify({
					username: data.username
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
