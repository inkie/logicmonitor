define([
	'lodash',
	'b2',
	'jquery',
	'handlebars',
	'core',
	'utils',

	'commons/logicmonitor/views/TopNavBarView',
	'lmblockui',
	'firebase',

	'lmsidebar',
	'lmexpandtable',
	'lmdialog',
	'lmformdialog',
	'lmmsgbox',
	'lmdropdown',
	'lmdropdownmenu',
	'lmtable',
	'lmpager',
	'lmcriteriatable',
	'lmsearchbox',
	'lmtooltip',
	'lmautocomplete',
	'lminfotable',
	'lmfilterbar',
	'lmcheckboxdropdown',
	'lmradiodropdown',
	'lmautocompletedropdown'
], function (_, B2, $, Handlebars, LM, utils, TopNavBarView, BlockUI, Firebase) {
	//require business js code begin
	var page = /\/(.*?)\.html/.exec(window.location.pathname);

	if (!page || !page[1]) {
		alert('The page you are visiting can not be accessible, please check your URL!');
		return;
	}

	page = page[1];

	var blockUI = new BlockUI();

	blockUI.block();

	// if the firebase is enabled, we use firebase for authentification
	if (LM.enableFirebase) {
		var firebase = new Firebase(LM.firebase.root);
		var authData = firebase.getAuth();

		if (authData) {
			// user authenticated with Firebase
			if (page == 'signup' || page == 'login') {
				if (history.pushState) {
					history.pushState({}, null, 'index.html');
					page = 'index';
				} else {
					location.href = 'index.html';
					return;
				}
			}
		} else if (page != 'login' && page != 'password' && page != 'signup') {
			if (history.pushState) {
				history.pushState({}, null, 'signup.html');
				page = 'signup';
			} else {
				location.href = 'signup.html';
				return;
			}
		}
	} else {
		// the firebase is disabled, we use ourselves' backend for user management
		if (LM.localStorage.securityToken) {
			// we find the securityToken
			// redirect the user to the main page if currently in the signup page or login page
			if (page == 'signup' || page == 'login') {
				if (history.pushState) {
					history.pushState({}, null, 'index.html');
					page = 'index';
				} else {
					location.href = 'index.html';
					return;
				}
			}
		} else if (page != 'login' && page != 'password' && page != 'signup') {
			if (history.pushState) {
				history.pushState({}, null, 'signup.html');
				page = 'signup';
			} else {
				location.href = 'signup.html';
				return;
			}
		}
	}

	// initialize the header view
	$('.header-con').append(new TopNavBarView().el);

	// we must use 'switchToPath/index' here for requirejs build optimization
	require([page + '/index'], function () {
		blockUI.unBlock();

	});
	//require business js code end
});
