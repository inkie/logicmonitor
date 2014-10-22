/**
 * Create a global namespace 'LM', all global variables should put into this namespace
 */
define([
	'jquery',
	'b2',
    'lodash',
    'utils',
	'backbone',
    'es5-shim'
], function($, B2, _, utils, Backbone) {

    /**
     * localStorage namespace define:
     * localStorage.lm           global
     * localStorage.demo         demo page
     */
	var localStorage = {};

	try {
		localStorage = window.localStorage;
	} catch(e) {
	}

	var projectName = 'tpl1024';

    var LM = window.LM || {
        localStorage: localStorage,
	    enableFirebase: true,
	    projectName: projectName,
	    apiRoot: projectName + '/rest',
	    firebase: {
		    root: 'https://amber-fire-3474.firebaseio.com'
	    }
     };

	LM.toLoginPage = function () {
		try {
			window.top.location.href = 'login.html';
		} catch (e) {
			alert('Unauthorized, please relogin.');
		}
	};

	LM.utils = utils;

    /**
     * We are JSP shop so the default underscore interpolate separator "<%=" and
     * evaluate separator "<%" don't work. This code below set them to "{{=" and
     * "{{", respectively.
     */
    _.templateSettings = {
        interpolate: /\{\{\=(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g
    };

    /**
     * Enter keycode
     */
    LM.ENTER_KEY = 13;
    LM.TAB_KEY   = 9;


	/**
	 * Define LM.rajax and rewrite Backbone.ajax
	 * LM.rajax contains the authorization logics with the Rest API, so, if you use Rest API, please make sure to
	 * call LM.rajax
	 * @type {rajax}
	 */
	Backbone.ajax = LM.rajax = function (options) {
		var timeStamp = new Date().getTime() - (window.timeStampDelta || 0);

		options.url = utils.buildUrl(options.url, {
			timestamp: timeStamp
		});

		options.dataType = options.dataType || 'json';

		if(options.contentType === false){
			options.contentType = false;
		} else {
			options.contentType = options.contentType || 'application/json';
		}

		options.cache = options.cache === true ? true : false;
		options.beforeSend = options.beforeSend || function(xhr) {
			xhr.setRequestHeader('Authorization',
				utils.getAuthToken(timeStamp, localStorage.securityUsername, localStorage.securityToken, true));

			if(options.customHeaders){
				_.each(options.customHeaders, function(value, key){
					xhr.setRequestHeader(key, value);
				});
			}
		};

		var success = options.success,
			error = options.error;

		options.success = function(data, textStatus, jqXHR) {
			if (jqXHR.status == 204) {
				if ($.isFunction(success)) {
					success(data || {});
				}
			} else if (!data || data.status !== 200) {
				if (data && data.status === 401) {
					LM.toLoginPage();
				} else if ($.isFunction(error)) {
					error(data || {});
				} else {
					// the default error function if caller not define it
					require(['lmmsgbox'], function (MessageBox) {
						var response = data || {};

						MessageBox.alert((!response.errmsg || response.errmsg == 'error') ?
							('Error - status(' + response.status + ' : ' + jqXHR.statusText + ') errmsg:' + response.errmsg) : response.errmsg);
					});
				}
			} else {
				if ($.isFunction(success)) {
					success(data || {});
				}
			}
		};

		options.error = function(jqXHR, textStatus, errorThrown) {
			if (jqXHR.status === 401) {
				LM.toLoginPage();
			} else if ($.isFunction(error)) {
				error({
					status: jqXHR.status || 0,
					errmsg: textStatus
				});
			} else {
				// the default error function if caller not define it
				require(['lmmsgbox'], function (MessageBox) {
					var response = {
						status: jqXHR.status || 0,
						errmsg: textStatus
					};

					MessageBox.alert( 'Error - status(' + response.status + ' : ' + jqXHR.statusText + ') errmsg:' + response.errmsg);
				});
			}
		};

		return $.ajax(options);
	};

	/**
	 * Define LM.Model as the base model for all models
	 */
    LM.Model = B2.Model.extend({
	    parse: function (response) {
		    if (response.status != void 0 && response.data) {
			    return response.data;
		    } else {
			    return response;
		    }
	    },

	    save: function (key, val, options) {
		    var opts = options || {};

		    // Handle both `"key", value` and `{key: value}` -style arguments.
		    if (key == null || typeof key === 'object') {
			    opts = val || {};
		    }

		    if (!opts.error) {
			    opts.error = function (model, response, options) {
				    require(['lmmsgbox'], function (MessageBox) {
					    MessageBox.alert( 'Error - status(' + response.status  + ')<br> errmsg:' + response.errmsg);
				    });
			    };
		    }

		    this._super(key, val || opts, opts);
	    },

	    destroy: function (options) {
		    options = options ? _.clone(options) : {};

		    if (!options.error) {
			    options.error = function (model, response, options) {
				    require(['lmmsgbox'], function (MessageBox) {
					    MessageBox.alert( 'Error - status(' + response.status  + ')<br> errmsg:' + response.errmsg);
				    });
			    };
		    }

		    this._super(options);
	    }
    });

	/**
	 * Define LM.Collection as the base collection for all collections
	 */
    LM.Collection = B2.Collection.extend({
        parse: function (response) {
            if (response.status != void 0) {
                if (response.data && response.data.items)  {
                    return response.data.items || [];
                } else {
                    return response.data || [];
                }
            } else {
                return response;
            }
        }
    });

	/**
     * LM.View extends B2.View. All views & widgets have to
     * extends LM.View rather than Backbone.View.
     *
	 * LM.View has the app features, it can be used to manage sub views automatically
	 * to register a sub view, use "registerComponent"
	 * to listen the events of the sub view, use "appEvents"
	 * to get a registered component, use "getComponent"
     */
	LM.View = B2.View.extend({
	});


    //avoid console function throw error in IE
	(function () {
        var con = window.console;
        if (con !== undefined && con.log !== undefined) {
            return;
        }
        var noop = function () {
        };
        var methods = ['assert', 'clear', 'count', 'debug', 'dir',
            'dirxml', 'error', 'exception', 'group', 'groupCollapsed',
            'groupEnd', 'info', 'log', 'markTimeline', 'profile',
            'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    })();

	$.fn.hasScrollBar = function () {
		//scrollHeight = topPadding + bottomPadding + contentHeight
		//innerHeight = topPadding + bottomPadding + contentHeight
		return this.prop('scrollHeight') > this.innerHeight();
	};

	window.LM = LM;

    return LM;
});
