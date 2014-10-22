define([
	'lodash',
	'b2',
	'jquery',
	'handlebars',
	'core',
	'utils',

	'commons/logicmonitor/views/TopNavBarView',
	'lmblockui',

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
], function (_, B2, $, Handlebars, LM, utils, TopNavBarView, BlockUI) {
	//require business js code begin
	var page = /\/(.*?)\.html/.exec(window.location.pathname);

	if (!page || !page[1]) {
		alert('The page you are visiting can not be accessible, please check your URL!');
		return;
	}

	page = page[1];

	var blockUI = new BlockUI();

	blockUI.block();

	var loginUser = LM.getLoginUser();

	if (loginUser) {
		if (page == 'signup' || page == 'login') {
			if (history.pushState) {
				history.pushState({}, null, 'index.html');
				utils.removeCssFile('commons/css/' + page + '.css');
				page = 'index';
				utils.loadCssFile('common/css/index.css');
			} else {
				location.href = 'index.html';
				return;
			}
		}
	} else if (page != 'login' && page != 'password' && page != 'signup') {
		if (history.pushState) {
			history.pushState({}, null, 'signup.html');
			utils.removeCssFile('commons/css/' + page + '.css');
			page = 'signup';
			utils.loadCssFile('commons/css/signup.css');
		} else {
			location.href = 'signup.html';
			return;
		}
	}

	// initialize the header view
	$('.header-con').append(new TopNavBarView({
		user: loginUser
	}).el);

	// we must use 'switchToPath/index' here for requirejs build optimization
	require([page + '/index'], function () {
		blockUI.unBlock();

	});
	//require business js code end
});
