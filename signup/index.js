define("signup/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST["signup/SignupWorkspace"]=e.template(function(e,a,t,r,i){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),r=this.merge(r,e.partials),i=i||{};var n,o="",s=this;return o+='<div class="signin-content validationEngineContainer">\n    <div class="signin-logo" style="margin-bottom: 0;"></div>\n    <div class="section-box">\n        <div class="section-content">\n            <div class="section-row">\n                <label>Username</label>\n                <input type="text" name="username" placeholder="Pick a username" class="validate[required]">\n            </div>\n            <div class="section-row">\n                <label>Email</label>\n                <input type="text" name="email" placeholder="Your email" class="validate[required, custom[email]]">\n            </div>\n            <div class="section-row">\n                <label>Password</label>\n                <input type="password" name="password" placeholder="Create a password" class="validate[required]">\n            </div>\n            <div class="section-row clearfix" style="height: 35px; line-height: 35px;">\n                <span>Already a member?</span> <a href="login.html" style="font-size: 16px;">Log in</a>\n                <a href="#" class="btn-signup lm-button purple right">Sign up</a>\n            </div>\n        </div>\n    </div>\n</div>\n',n=s.invokePartial(r["commons/logicmonitor/foot"],"commons/logicmonitor/foot",a,t,r,i),(n||0===n)&&(o+=n),o+="\n"}),this.JST["signup/partials/placeholder"]=e.template(function(e,a,t,r,i){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),i=i||{};var n="";return n}),this.JST["signup/placeholder"]=e.template(function(e,a,t,r,i){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),i=i||{};var n="";return n}),this.JST}),define("signup/partials_compiled",["handlebars"],function(e){return this.JST=this.JST||{},e.registerPartial("signup/placeholder",e.template(function(e,a,t,r,i){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),i=i||{};var n="";return n})),this.JST}),define("signup/templates/main",["handlebars","commons/logicmonitor/templates","signup/templates_compiled","signup/partials_compiled"],function(e,a,t){return t}),function(e){var a={init:function(t){var r=this;return r.data("jqv")&&null!=r.data("jqv")||(t=a._saveOptions(r,t),e(document).on("click",".formError",function(){e(this).fadeOut(150,function(){e(this).parent(".formErrorOuter").remove(),e(this).remove()})})),this},attach:function(t){var r,i=this;return r=t?a._saveOptions(i,t):i.data("jqv"),r.validateAttribute=i.find("[data-validation-engine*=validate]").length?"data-validation-engine":"class",r.binded&&(i.on(r.validationEventTrigger,"["+r.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)",a._onFieldEvent),i.on("click","["+r.validateAttribute+"*=validate][type=checkbox],["+r.validateAttribute+"*=validate][type=radio]",a._onFieldEvent),i.on(r.validationEventTrigger,"["+r.validateAttribute+"*=validate][class*=datepicker]",{delay:300},a._onFieldEvent)),r.autoPositionUpdate&&e(window).bind("resize",{noAnimation:!0,formElem:i},a.updatePromptsPosition),i.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']",a._submitButtonClick),i.removeData("jqv_submitButton"),i.on("submit",a._onSubmitEvent),this},detach:function(){var t=this,r=t.data("jqv");return t.find("["+r.validateAttribute+"*=validate]").not("[type=checkbox]").off(r.validationEventTrigger,a._onFieldEvent),t.find("["+r.validateAttribute+"*=validate][type=checkbox],[class*=validate][type=radio]").off("click",a._onFieldEvent),t.off("submit",a._onSubmitEvent),t.removeData("jqv"),t.off("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']",a._submitButtonClick),t.removeData("jqv_submitButton"),r.autoPositionUpdate&&e(window).off("resize",a.updatePromptsPosition),this},validate:function(){var t=e(this),r=null;if(t.is("form")||t.hasClass("validationEngineContainer")){if(t.hasClass("validating"))return!1;t.addClass("validating");var i=t.data("jqv"),r=a._validateFields(this);setTimeout(function(){t.removeClass("validating")},100),r&&i.onSuccess?i.onSuccess():!r&&i.onFailure&&i.onFailure()}else if(t.is("form")||t.hasClass("validationEngineContainer"))t.removeClass("validating");else{var n=t.closest("form, .validationEngineContainer"),i=n.data("jqv")?n.data("jqv"):e.validationEngine.defaults,r=a._validateField(t,i);r&&i.onFieldSuccess?i.onFieldSuccess():i.onFieldFailure&&i.InvalidFields.length>0&&i.onFieldFailure()}return i.onValidationComplete?!!i.onValidationComplete(n,r):r},updatePromptsPosition:function(t){if(t&&this==window)var r=t.data.formElem,i=t.data.noAnimation;else var r=e(this.closest("form, .validationEngineContainer"));var n=r.data("jqv");return r.find("["+n.validateAttribute+"*=validate]").not(":disabled").each(function(){var t=e(this);n.prettySelect&&t.is(":hidden")&&(t=r.find("#"+n.usePrefix+t.attr("id")+n.useSuffix));var o=a._getPrompt(t),s=e(o).find(".formErrorContent").html();o&&a._updatePrompt(t,e(o),s,void 0,!1,n,i)}),this},showPrompt:function(e,t,r,i){var n=this.closest("form, .validationEngineContainer"),o=n.data("jqv");return o||(o=a._saveOptions(this,o)),r&&(o.promptPosition=r),o.showArrow=1==i,a._showPrompt(this,e,t,!1,o),this},hide:function(){var t,r=e(this).closest("form, .validationEngineContainer"),i=r.data("jqv"),n=i&&i.fadeDuration?i.fadeDuration:.3;return t=e(this).is("form")||e(this).hasClass("validationEngineContainer")?"parentForm"+a._getClassName(e(this).attr("id")):a._getClassName(e(this).attr("id"))+"formError",e("."+t).fadeTo(n,.3,function(){e(this).parent(".formErrorOuter").remove(),e(this).remove()}),this},hideAll:function(){var a=this,t=a.data("jqv"),r=t?t.fadeDuration:300;return e(".formError").fadeTo(r,300,function(){e(this).parent(".formErrorOuter").remove(),e(this).remove()}),this},_onFieldEvent:function(t){var r=e(this),i=r.closest("form, .validationEngineContainer"),n=i.data("jqv");n.eventTrigger="field",window.setTimeout(function(){a._validateField(r,n),0==n.InvalidFields.length&&n.onFieldSuccess?n.onFieldSuccess():n.InvalidFields.length>0&&n.onFieldFailure&&n.onFieldFailure()},t.data?t.data.delay:0)},_onSubmitEvent:function(){var t=e(this),r=t.data("jqv");if(t.data("jqv_submitButton")){var i=e("#"+t.data("jqv_submitButton"));if(i&&i.length>0&&(i.hasClass("validate-skip")||"true"==i.attr("data-validation-engine-skip")))return!0}r.eventTrigger="submit";var n=a._validateFields(t);return n&&r.ajaxFormValidation?(a._validateFormWithAjax(t,r),!1):r.onValidationComplete?!!r.onValidationComplete(t,n):n},_checkAjaxStatus:function(a){var t=!0;return e.each(a.ajaxValidCache,function(e,a){return a?void 0:(t=!1,!1)}),t},_checkAjaxFieldStatus:function(e,a){return 1==a.ajaxValidCache[e]},_validateFields:function(t){var r=t.data("jqv"),i=!1;t.trigger("jqv.form.validating");var n=null;if(t.find("["+r.validateAttribute+"*=validate]").not(":disabled").each(function(){var o=e(this),s=[];if(e.inArray(o.attr("name"),s)<0){if(i|=a._validateField(o,r),i&&null==n&&(o.is(":hidden")&&r.prettySelect?n=o=t.find("#"+r.usePrefix+a._jqSelector(o.attr("id"))+r.useSuffix):(o.data("jqv-prompt-at")instanceof jQuery?o=o.data("jqv-prompt-at"):o.data("jqv-prompt-at")&&(o=e(o.data("jqv-prompt-at"))),n=o)),r.doNotShowAllErrosOnSubmit)return!1;if(s.push(o.attr("name")),1==r.showOneMessage&&i)return!1}}),t.trigger("jqv.form.result",[i]),i){if(r.scroll){var o=n.offset().top,s=n.offset().left,l=r.promptPosition;if("string"==typeof l&&-1!=l.indexOf(":")&&(l=l.substring(0,l.indexOf(":"))),"bottomRight"!=l&&"bottomLeft"!=l){var d=a._getPrompt(n);d&&(o=d.offset().top)}if(r.scrollOffset&&(o-=r.scrollOffset),r.isOverflown){var u=e(r.overflownDIV);if(!u.length)return!1;var c=u.scrollTop(),f=-parseInt(u.offset().top);o+=c+f-5;var p=e(r.overflownDIV).filter(":not(:animated)");p.animate({scrollTop:o},1100,function(){r.focusFirstField&&n.focus()})}else e("html, body").animate({scrollTop:o},1100,function(){r.focusFirstField&&n.focus()}),e("html, body").animate({scrollLeft:s},1100)}else r.focusFirstField&&n.focus();return!1}return!0},_validateFormWithAjax:function(t,r){var i=t.serialize(),n=r.ajaxFormValidationMethod?r.ajaxFormValidationMethod:"GET",o=r.ajaxFormValidationURL?r.ajaxFormValidationURL:t.attr("action"),s=r.dataType?r.dataType:"json";e.ajax({type:n,url:o,cache:!1,dataType:s,data:i,form:t,methods:a,options:r,beforeSend:function(){return r.onBeforeAjaxFormValidation(t,r)},error:function(e,t){r.onFailure?r.onFailure(e,t):a._ajaxError(e,t)},success:function(i){if("json"==s&&i!==!0){for(var n=!1,o=0;o<i.length;o++){var l=i[o],d=l[0],u=e(e("#"+d)[0]);if(1==u.length){var c=l[2];if(1==l[1])if(""!=c&&c){if(r.allrules[c]){var f=r.allrules[c].alertTextOk;f&&(c=f)}r.showPrompts&&a._showPrompt(u,c,"pass",!1,r,!0)}else a._closePrompt(u);else{if(n|=!0,r.allrules[c]){var f=r.allrules[c].alertText;f&&(c=f)}r.showPrompts&&a._showPrompt(u,c,"",!1,r,!0)}}}r.onAjaxFormComplete(!n,t,i,r)}else r.onAjaxFormComplete(!0,t,i,r)}})},_validateField:function(t,r,i){if(t.attr("id")||(t.attr("id","form-validation-field-"+e.validationEngine.fieldIdCounter),++e.validationEngine.fieldIdCounter),!r.validateNonVisibleFields&&(t.is(":hidden")&&!r.prettySelect||t.parent().is(":hidden")))return!1;var n=t.attr(r.validateAttribute),o=/validate\[(.*)\]/.exec(n);if(!o)return!1;var s=o[1],l=s.split(/\[|,|\]/),d=!1,u=t.attr("name"),c="",f="",p=!1,v=!1;r.isError=!1,r.showArrow=!0,r.maxErrorsPerField>0&&(v=!0);for(var m=e(t.closest("form, .validationEngineContainer")),g=0;g<l.length;g++)l[g]=l[g].replace(" ",""),""===l[g]&&delete l[g];for(var g=0,h=0;g<l.length;g++){if(v&&h>=r.maxErrorsPerField){if(!p){var x=e.inArray("required",l);p=-1!=x&&x>=g}break}var F=void 0;switch(l[g]){case"required":p=!0,F=a._getErrorMessage(m,t,l[g],l,g,r,a._required);break;case"custom":F=a._getErrorMessage(m,t,l[g],l,g,r,a._custom);break;case"groupRequired":var _="["+r.validateAttribute+"*="+l[g+1]+"]",T=m.find(_).eq(0);T[0]!=t[0]&&(a._validateField(T,r,i),r.showArrow=!0),F=a._getErrorMessage(m,t,l[g],l,g,r,a._groupRequired),F&&(p=!0),r.showArrow=!1;break;case"ajax":F=a._ajax(t,l,g,r),F&&(f="load");break;case"minSize":F=a._getErrorMessage(m,t,l[g],l,g,r,a._minSize);break;case"maxSize":F=a._getErrorMessage(m,t,l[g],l,g,r,a._maxSize);break;case"min":F=a._getErrorMessage(m,t,l[g],l,g,r,a._min);break;case"max":F=a._getErrorMessage(m,t,l[g],l,g,r,a._max);break;case"past":F=a._getErrorMessage(m,t,l[g],l,g,r,a._past);break;case"future":F=a._getErrorMessage(m,t,l[g],l,g,r,a._future);break;case"dateRange":var _="["+r.validateAttribute+"*="+l[g+1]+"]";r.firstOfGroup=m.find(_).eq(0),r.secondOfGroup=m.find(_).eq(1),(r.firstOfGroup[0].value||r.secondOfGroup[0].value)&&(F=a._getErrorMessage(m,t,l[g],l,g,r,a._dateRange)),F&&(p=!0),r.showArrow=!1;break;case"dateTimeRange":var _="["+r.validateAttribute+"*="+l[g+1]+"]";r.firstOfGroup=m.find(_).eq(0),r.secondOfGroup=m.find(_).eq(1),(r.firstOfGroup[0].value||r.secondOfGroup[0].value)&&(F=a._getErrorMessage(m,t,l[g],l,g,r,a._dateTimeRange)),F&&(p=!0),r.showArrow=!1;break;case"maxCheckbox":t=e(m.find("input[name='"+u+"']")),F=a._getErrorMessage(m,t,l[g],l,g,r,a._maxCheckbox);break;case"minCheckbox":t=e(m.find("input[name='"+u+"']")),F=a._getErrorMessage(m,t,l[g],l,g,r,a._minCheckbox);break;case"equals":F=a._getErrorMessage(m,t,l[g],l,g,r,a._equals);break;case"funcCall":F=a._getErrorMessage(m,t,l[g],l,g,r,a._funcCall);break;case"creditCard":F=a._getErrorMessage(m,t,l[g],l,g,r,a._creditCard);break;case"condRequired":F=a._getErrorMessage(m,t,l[g],l,g,r,a._condRequired),void 0!==F&&(p=!0)}var C=!1;if("object"==typeof F)switch(F.status){case"_break":C=!0;break;case"_error":F=F.message;break;case"_error_no_prompt":return!0}if(C)break;"string"==typeof F&&(c+=F+"<br/>",r.isError=!0,h++)}!p&&!t.val()&&t.val().length<1&&l.indexOf("equals")<0&&(r.isError=!1);var b=t.prop("type"),E=t.data("promptPosition")||r.promptPosition;("radio"==b||"checkbox"==b)&&m.find("input[name='"+u+"']").size()>1&&(t=e("inline"===E?m.find("input[name='"+u+"'][type!=hidden]:last"):m.find("input[name='"+u+"'][type!=hidden]:first")),r.showArrow=!1),t.is(":hidden")&&r.prettySelect&&(t=m.find("#"+r.usePrefix+a._jqSelector(t.attr("id"))+r.useSuffix)),r.isError&&r.showPrompts?a._showPrompt(t,c,f,!1,r):d||a._closePrompt(t),d||t.trigger("jqv.field.result",[t,r.isError,c]);var w=e.inArray(t[0],r.InvalidFields);return-1==w?r.isError&&r.InvalidFields.push(t[0]):r.isError||r.InvalidFields.splice(w,1),a._handleStatusCssClasses(t,r),r.isError&&r.onFieldFailure&&r.onFieldFailure(t),!r.isError&&r.onFieldSuccess&&r.onFieldSuccess(t),r.isError},_handleStatusCssClasses:function(e,a){a.addSuccessCssClassToField&&e.removeClass(a.addSuccessCssClassToField),a.addFailureCssClassToField&&e.removeClass(a.addFailureCssClassToField),a.addSuccessCssClassToField&&!a.isError&&e.addClass(a.addSuccessCssClassToField),a.addFailureCssClassToField&&a.isError&&e.addClass(a.addFailureCssClassToField)},_getErrorMessage:function(t,r,i,n,o,s,l){var d=jQuery.inArray(i,n);if("custom"===i||"funcCall"===i){var u=n[d+1];i=i+"["+u+"]",delete n[d]}var c,f=i,p=r.attr(r.attr("data-validation-engine")?"data-validation-engine":"class"),v=p.split(" ");if(c="future"==i||"past"==i||"maxCheckbox"==i||"minCheckbox"==i?l(t,r,n,o,s):l(r,n,o,s),void 0!=c){var m=a._getCustomErrorMessage(e(r),v,f,s);m&&(c=m)}return c},_getCustomErrorMessage:function(e,t,r,i){var n=!1,o=/^custom\[.*\]$/.test(r)?a._validityProp.custom:a._validityProp[r];if(void 0!=o&&(n=e.attr("data-errormessage-"+o),void 0!=n))return n;if(n=e.attr("data-errormessage"),void 0!=n)return n;var s="#"+e.attr("id");if("undefined"!=typeof i.custom_error_messages[s]&&"undefined"!=typeof i.custom_error_messages[s][r])n=i.custom_error_messages[s][r].message;else if(t.length>0)for(var l=0;l<t.length&&t.length>0;l++){var d="."+t[l];if("undefined"!=typeof i.custom_error_messages[d]&&"undefined"!=typeof i.custom_error_messages[d][r]){n=i.custom_error_messages[d][r].message;break}}return n||"undefined"==typeof i.custom_error_messages[r]||"undefined"==typeof i.custom_error_messages[r].message||(n=i.custom_error_messages[r].message),n},_validityProp:{required:"value-missing",custom:"custom-error",groupRequired:"value-missing",ajax:"custom-error",minSize:"range-underflow",maxSize:"range-overflow",min:"range-underflow",max:"range-overflow",past:"type-mismatch",future:"type-mismatch",dateRange:"type-mismatch",dateTimeRange:"type-mismatch",maxCheckbox:"range-overflow",minCheckbox:"range-underflow",equals:"pattern-mismatch",funcCall:"custom-error",creditCard:"pattern-mismatch",condRequired:"value-missing"},_required:function(a,t,r,i,n){switch(a.prop("type")){case"text":case"password":case"textarea":case"file":case"select-one":case"select-multiple":default:var o=e.trim(a.val()),s=e.trim(a.attr("data-validation-placeholder")),l=e.trim(a.attr("placeholder"));if(!o||s&&o==s||l&&o==l)return i.allrules[t[r]].alertText;break;case"radio":case"checkbox":if(n){if(!a.attr("checked"))return i.allrules[t[r]].alertTextCheckboxMultiple;break}var d=a.closest("form, .validationEngineContainer"),u=a.attr("name");if(0==d.find("input[name='"+u+"']:checked").size())return 1==d.find("input[name='"+u+"']:visible").size()?i.allrules[t[r]].alertTextCheckboxe:i.allrules[t[r]].alertTextCheckboxMultiple}},_groupRequired:function(t,r,i,n){var o="["+n.validateAttribute+"*="+r[i+1]+"]",s=!1;return t.closest("form, .validationEngineContainer").find(o).each(function(){return a._required(e(this),r,i,n)?void 0:(s=!0,!1)}),s?void 0:n.allrules[r[i]].alertText},_custom:function(e,a,t,r){var i,n=a[t+1],o=r.allrules[n];if(!o)return void alert("jqv:custom rule not found - "+n);if(o.regex){var s=o.regex;if(!s)return void alert("jqv:custom regex not found - "+n);var l=new RegExp(s);if(!l.test(e.val()))return r.allrules[n].alertText}else{if(!o.func)return void alert("jqv:custom type not allowed "+n);if(i=o.func,"function"!=typeof i)return void alert("jqv:custom parameter 'function' is no function - "+n);if(!i(e,a,t,r))return r.allrules[n].alertText}},_funcCall:function(e,a,t,r){var i,n=a[t+1];if(n.indexOf(".")>-1){for(var o=n.split("."),s=window;o.length;)s=s[o.shift()];i=s}else i=window[n]||r.customFunctions[n];return"function"==typeof i?i(e,a,t,r):void 0},_equals:function(a,t,r,i){var n=t[r+1];return a.val()!=e("#"+n).val()?i.allrules.equals.alertText:void 0},_maxSize:function(e,a,t,r){var i=a[t+1],n=e.val().length;if(n>i){var o=r.allrules.maxSize;return o.alertText+i+o.alertText2}},_minSize:function(e,a,t,r){var i=a[t+1],n=e.val().length;if(i>n){var o=r.allrules.minSize;return o.alertText+i+o.alertText2}},_min:function(e,a,t,r){var i=parseFloat(a[t+1]),n=parseFloat(e.val());if(i>n){var o=r.allrules.min;return o.alertText2?o.alertText+i+o.alertText2:o.alertText+i}},_max:function(e,a,t,r){var i=parseFloat(a[t+1]),n=parseFloat(e.val());if(n>i){var o=r.allrules.max;return o.alertText2?o.alertText+i+o.alertText2:o.alertText+i}},_past:function(t,r,i,n,o){var s,l=i[n+1],d=e(t.find("*[name='"+l.replace(/^#+/,"")+"']"));if("now"==l.toLowerCase())s=new Date;else if(void 0!=d.val()){if(d.is(":disabled"))return;s=a._parseDate(d.val())}else s=a._parseDate(l);var u=a._parseDate(r.val());if(u>s){var c=o.allrules.past;return c.alertText2?c.alertText+a._dateToString(s)+c.alertText2:c.alertText+a._dateToString(s)}},_future:function(t,r,i,n,o){var s,l=i[n+1],d=e(t.find("*[name='"+l.replace(/^#+/,"")+"']"));if("now"==l.toLowerCase())s=new Date;else if(void 0!=d.val()){if(d.is(":disabled"))return;s=a._parseDate(d.val())}else s=a._parseDate(l);var u=a._parseDate(r.val());if(s>u){var c=o.allrules.future;return c.alertText2?c.alertText+a._dateToString(s)+c.alertText2:c.alertText+a._dateToString(s)}},_isDate:function(e){var a=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);return a.test(e)},_isDateTime:function(e){var a=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);return a.test(e)},_dateCompare:function(e,a){return new Date(e.toString())<new Date(a.toString())},_dateRange:function(e,t,r,i){return!i.firstOfGroup[0].value&&i.secondOfGroup[0].value||i.firstOfGroup[0].value&&!i.secondOfGroup[0].value?i.allrules[t[r]].alertText+i.allrules[t[r]].alertText2:a._isDate(i.firstOfGroup[0].value)&&a._isDate(i.secondOfGroup[0].value)?a._dateCompare(i.firstOfGroup[0].value,i.secondOfGroup[0].value)?void 0:i.allrules[t[r]].alertText+i.allrules[t[r]].alertText2:i.allrules[t[r]].alertText+i.allrules[t[r]].alertText2},_dateTimeRange:function(e,t,r,i){return!i.firstOfGroup[0].value&&i.secondOfGroup[0].value||i.firstOfGroup[0].value&&!i.secondOfGroup[0].value?i.allrules[t[r]].alertText+i.allrules[t[r]].alertText2:a._isDateTime(i.firstOfGroup[0].value)&&a._isDateTime(i.secondOfGroup[0].value)?a._dateCompare(i.firstOfGroup[0].value,i.secondOfGroup[0].value)?void 0:i.allrules[t[r]].alertText+i.allrules[t[r]].alertText2:i.allrules[t[r]].alertText+i.allrules[t[r]].alertText2},_maxCheckbox:function(e,a,t,r,i){var n=t[r+1],o=a.attr("name"),s=e.find("input[name='"+o+"']:checked").size();return s>n?(i.showArrow=!1,i.allrules.maxCheckbox.alertText2?i.allrules.maxCheckbox.alertText+" "+n+" "+i.allrules.maxCheckbox.alertText2:i.allrules.maxCheckbox.alertText):void 0},_minCheckbox:function(e,a,t,r,i){var n=t[r+1],o=a.attr("name"),s=e.find("input[name='"+o+"']:checked").size();return n>s?(i.showArrow=!1,i.allrules.minCheckbox.alertText+" "+n+" "+i.allrules.minCheckbox.alertText2):void 0},_creditCard:function(e,a,t,r){var i=!1,n=e.val().replace(/ +/g,"").replace(/-+/g,""),o=n.length;if(o>=14&&16>=o&&parseInt(n)>0){var s,l=0,t=o-1,d=1,u=new String;do s=parseInt(n.charAt(t)),u+=d++%2==0?2*s:s;while(--t>=0);for(t=0;t<u.length;t++)l+=parseInt(u.charAt(t));i=l%10==0}return i?void 0:r.allrules.creditCard.alertText},_ajax:function(t,r,i,n){var o=r[i+1],s=n.allrules[o],l=s.extraData,d=s.extraDataDynamic,u={fieldId:t.attr("id"),fieldValue:t.val()};if("object"==typeof l)e.extend(u,l);else if("string"==typeof l)for(var c=l.split("&"),i=0;i<c.length;i++){var f=c[i].split("=");f[0]&&f[0]&&(u[f[0]]=f[1])}if(d)for(var p=String(d).split(","),i=0;i<p.length;i++){var v=p[i];if(e(v).length){{var m=t.closest("form, .validationEngineContainer").find(v).val();v.replace("#","")+"="+escape(m)}u[v.replace("#","")]=m}}return"field"==n.eventTrigger&&delete n.ajaxValidCache[t.attr("id")],n.isError||a._checkAjaxFieldStatus(t.attr("id"),n)?void 0:(e.ajax({type:n.ajaxFormValidationMethod,url:s.url,cache:!1,dataType:"json",data:u,field:t,rule:s,methods:a,options:n,beforeSend:function(){},error:function(e,t){n.onFailure?n.onFailure(e,t):a._ajaxError(e,t)},success:function(r){var i=r[0],o=e("#"+i).eq(0);if(1==o.length){var l=r[1],d=r[2];if(l){if(n.ajaxValidCache[i]=!0,d){if(n.allrules[d]){var u=n.allrules[d].alertTextOk;u&&(d=u)}}else d=s.alertTextOk;n.showPrompts&&(d?a._showPrompt(o,d,"pass",!0,n):a._closePrompt(o)),"submit"==n.eventTrigger&&t.closest("form").submit()}else{if(n.ajaxValidCache[i]=!1,n.isError=!0,d){if(n.allrules[d]){var u=n.allrules[d].alertText;u&&(d=u)}}else d=s.alertText;n.showPrompts&&a._showPrompt(o,d,"",!0,n)}}o.trigger("jqv.field.result",[o,n.isError,d])}}),s.alertTextLoad)},_ajaxError:function(e,a){0==e.status&&null==a?alert("The page is not served from a server! ajax call failed"):"undefined"!=typeof console&&console.log("Ajax error: "+e.status+" "+a)},_dateToString:function(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},_parseDate:function(e){var a=e.split("-");return a==e&&(a=e.split("/")),a==e?(a=e.split("."),new Date(a[2],a[1]-1,a[0])):new Date(a[0],a[1]-1,a[2])},_showPrompt:function(t,r,i,n,o,s){t.data("jqv-prompt-at")instanceof jQuery?t=t.data("jqv-prompt-at"):t.data("jqv-prompt-at")&&(t=e(t.data("jqv-prompt-at")));var l=a._getPrompt(t);s&&(l=!1),e.trim(r)&&(l?a._updatePrompt(t,l,r,i,n,o):a._buildPrompt(t,r,i,n,o))},_buildPrompt:function(t,r,i,n,o){var s=e("<div>");switch(s.addClass(a._getClassName(t.attr("id"))+"formError"),s.addClass("parentForm"+a._getClassName(t.closest("form, .validationEngineContainer").attr("id"))),s.addClass("formError"),i){case"pass":s.addClass("greenPopup");break;case"load":s.addClass("blackPopup")}n&&s.addClass("ajaxed");var l=(e("<div>").addClass("formErrorContent").html(r).appendTo(s),t.data("promptPosition")||o.promptPosition);if(o.showArrow){var d=e("<div>").addClass("formErrorArrow");if("string"==typeof l){var u=l.indexOf(":");-1!=u&&(l=l.substring(0,u))}switch(l){case"bottomLeft":case"bottomRight":s.find(".formErrorContent").before(d),d.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');break;case"topLeft":case"topRight":d.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>'),s.append(d)}}o.addPromptClass&&s.addClass(o.addPromptClass);var c=t.attr("data-required-class");if(void 0!==c)s.addClass(c);else if(o.prettySelect&&e("#"+t.attr("id")).next().is("select")){var f=e("#"+t.attr("id").substr(o.usePrefix.length).substring(o.useSuffix.length)).attr("data-required-class");void 0!==f&&s.addClass(f)}s.css({opacity:0}),"inline"===l?(s.addClass("inline"),"undefined"!=typeof t.attr("data-prompt-target")&&e("#"+t.attr("data-prompt-target")).length>0?s.appendTo(e("#"+t.attr("data-prompt-target"))):t.after(s)):t.before(s);var u=a._calculatePosition(t,s,o);return s.css({position:"inline"===l?"relative":"absolute",top:u.callerTopPosition,left:u.callerleftPosition,marginTop:u.marginTopSize,opacity:0}).data("callerField",t),o.autoHidePrompt&&setTimeout(function(){s.animate({opacity:0},function(){s.closest(".formErrorOuter").remove(),s.remove()})},o.autoHideDelay),s.animate({opacity:.87})},_updatePrompt:function(e,t,r,i,n,o,s){if(t){"undefined"!=typeof i&&("pass"==i?t.addClass("greenPopup"):t.removeClass("greenPopup"),"load"==i?t.addClass("blackPopup"):t.removeClass("blackPopup")),n?t.addClass("ajaxed"):t.removeClass("ajaxed"),t.find(".formErrorContent").html(r);var l=a._calculatePosition(e,t,o),d={top:l.callerTopPosition,left:l.callerleftPosition,marginTop:l.marginTopSize};s?t.css(d):t.animate(d)}},_closePrompt:function(e){var t=a._getPrompt(e);t&&t.fadeTo("fast",0,function(){t.parent(".formErrorOuter").remove(),t.remove()})},closePrompt:function(e){return a._closePrompt(e)},_getPrompt:function(t){var r=e(t).closest("form, .validationEngineContainer").attr("id"),i=a._getClassName(t.attr("id"))+"formError",n=e("."+a._escapeExpression(i)+".parentForm"+a._getClassName(r))[0];return n?e(n):void 0},_escapeExpression:function(e){return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},isRTL:function(a){var t=e(document),r=e("body"),i=a&&a.hasClass("rtl")||a&&"rtl"===(a.attr("dir")||"").toLowerCase()||t.hasClass("rtl")||"rtl"===(t.attr("dir")||"").toLowerCase()||r.hasClass("rtl")||"rtl"===(r.attr("dir")||"").toLowerCase();return Boolean(i)},_calculatePosition:function(e,a,t){var r,i,n,o=e.width(),s=e.position().left,l=e.position().top,d=(e.height(),a.height());r=i=0,n=-d;var u=e.data("promptPosition")||t.promptPosition,c="",f="",p=0,v=0;switch("string"==typeof u&&-1!=u.indexOf(":")&&(c=u.substring(u.indexOf(":")+1),u=u.substring(0,u.indexOf(":")),-1!=c.indexOf(",")&&(f=c.substring(c.indexOf(",")+1),c=c.substring(0,c.indexOf(",")),v=parseInt(f),isNaN(v)&&(v=0)),p=parseInt(c),isNaN(c)&&(c=0)),u){default:case"topRight":i+=s+o-30,r+=l;break;case"topLeft":r+=l,i+=s;break;case"centerRight":r=l+4,n=0,i=s+e.outerWidth(!0)+5;break;case"centerLeft":i=s-(a.width()+2),r=l+4,n=0;break;case"bottomLeft":r=l+e.height()+5,n=0,i=s;break;case"bottomRight":i=s+o-30,r=l+e.height()+5,n=0;break;case"inline":i=0,r=0,n=0}return i+=p,r+=v,{callerTopPosition:r+"px",callerleftPosition:i+"px",marginTopSize:n+"px"}},_saveOptions:function(a,t){if(e.validationEngineLanguage)var r=e.validationEngineLanguage.allRules;else e.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");e.validationEngine.defaults.allrules=r;var i=e.extend(!0,{},e.validationEngine.defaults,t);return a.data("jqv",i),i},_getClassName:function(e){return e?e.replace(/:/g,"_").replace(/\./g,"_"):void 0},_jqSelector:function(e){return e.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1")},_condRequired:function(e,t,r,i){var n,o;for(n=r+1;n<t.length;n++)if(o=jQuery("#"+t[n]).first(),o.length&&void 0==a._required(o,["required"],0,i,!0))return a._required(e,["required"],0,i)},_submitButtonClick:function(){var a=e(this),t=a.closest("form, .validationEngineContainer");t.data("jqv_submitButton",a.attr("id"))}};e.fn.validationEngine=function(t){var r=e(this);return r[0]?"string"==typeof t&&"_"!=t.charAt(0)&&a[t]?("showPrompt"!=t&&"hide"!=t&&"hideAll"!=t&&a.init.apply(r),a[t].apply(r,Array.prototype.slice.call(arguments,1))):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist in jQuery.validationEngine"):(a.init.apply(r,arguments),a.attach.apply(r)):r},e.validationEngine={fieldIdCounter:0,defaults:{validationEventTrigger:"blur",scroll:!0,focusFirstField:!0,showPrompts:!0,validateNonVisibleFields:!1,promptPosition:"topRight",bindMethod:"bind",inlineAjax:!1,ajaxFormValidation:!1,ajaxFormValidationURL:!1,ajaxFormValidationMethod:"get",onAjaxFormComplete:e.noop,onBeforeAjaxFormValidation:e.noop,onValidationComplete:!1,doNotShowAllErrosOnSubmit:!1,custom_error_messages:{},binded:!0,showArrow:!0,isError:!1,maxErrorsPerField:!1,ajaxValidCache:{},autoPositionUpdate:!1,InvalidFields:[],onFieldSuccess:!1,onFieldFailure:!1,onSuccess:!1,onFailure:!1,validateAttribute:"class",addSuccessCssClassToField:"",addFailureCssClassToField:"",autoHidePrompt:!1,autoHideDelay:1e4,fadeDuration:.3,prettySelect:!1,addPromptClass:"",usePrefix:"",useSuffix:"",showOneMessage:!1}},e(function(){e.validationEngine.defaults.promptPosition=a.isRTL()?"topLeft":"topRight"})}(jQuery),define("jq-validationEngine",function(){}),function(e){e.fn.validationEngineLanguage=function(){},e.validationEngineLanguage={newLang:function(){e.validationEngineLanguage.allRules={required:{regex:"none",alertText:"* This field is required",alertTextCheckboxMultiple:"* Please select an option",alertTextCheckboxe:"* This checkbox is required",alertTextDateRange:"* Both date range fields are required"},requiredInFunction:{func:function(e){return"test"==e.val()?!0:!1},alertText:"* Field must equal test"},dateRange:{regex:"none",alertText:"* Invalid ",alertText2:"Date Range"},dateTimeRange:{regex:"none",alertText:"* Invalid ",alertText2:"Date Time Range"},minSize:{regex:"none",alertText:"* Minimum ",alertText2:" characters required"},maxSize:{regex:"none",alertText:"* Maximum ",alertText2:" characters allowed"},groupRequired:{regex:"none",alertText:"* You must fill one of the following fields"},min:{regex:"none",alertText:"* Minimum value is "},max:{regex:"none",alertText:"* Maximum value is "},past:{regex:"none",alertText:"* Date prior to "},future:{regex:"none",alertText:"* Date past "},maxCheckbox:{regex:"none",alertText:"* Maximum ",alertText2:" options allowed"},minCheckbox:{regex:"none",alertText:"* Please select ",alertText2:" options"},equals:{regex:"none",alertText:"* Fields do not match"},creditCard:{regex:"none",alertText:"* Invalid credit card number"},phone:{regex:/^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,alertText:"* Invalid phone number"},email:{regex:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,alertText:"* Invalid email address"},integer:{regex:/^[\-\+]?\d+$/,alertText:"* Not a valid integer"},number:{regex:/^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,alertText:"* Invalid floating decimal number"},date:{func:function(e){var a=new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/),t=a.exec(e.val());if(null==t)return!1;var r=t[1],i=1*t[2],n=1*t[3],o=new Date(r,i-1,n);return o.getFullYear()==r&&o.getMonth()==i-1&&o.getDate()==n},alertText:"* Invalid date, must be in YYYY-MM-DD format"},ipv4:{regex:/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,alertText:"* Invalid IP address"},url:{regex:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,alertText:"* Invalid URL"},onlyNumberSp:{regex:/^[0-9\ ]+$/,alertText:"* Numbers only"},onlyLetterSp:{regex:/^[a-zA-Z\ \']+$/,alertText:"* Letters only"},onlyLetterNumber:{regex:/^[0-9a-zA-Z]+$/,alertText:"* No special characters allowed"},ajaxUserCall:{url:"ajaxValidateFieldUser",extraData:"name=eric",alertText:"* This user is already taken",alertTextLoad:"* Validating, please wait"},ajaxUserCallPhp:{url:"phpajax/ajaxValidateFieldUser.php",extraData:"name=eric",alertTextOk:"* This username is available",alertText:"* This user is already taken",alertTextLoad:"* Validating, please wait"},ajaxNameCall:{url:"ajaxValidateFieldName",alertText:"* This name is already taken",alertTextOk:"* This name is available",alertTextLoad:"* Validating, please wait"},ajaxNameCallPhp:{url:"phpajax/ajaxValidateFieldName.php",alertText:"* This name is already taken",alertTextLoad:"* Validating, please wait"},validate2fields:{alertText:"* Please input HELLO"},dateFormat:{regex:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,alertText:"* Invalid Date"},dateTimeFormat:{regex:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,alertText:"* Invalid Date or Date Format",alertText2:"Expected Format: ",alertText3:"mm/dd/yyyy hh:mm:ss AM|PM or ",alertText4:"yyyy-mm-dd hh:mm:ss AM|PM"}}
}},e.validationEngineLanguage.newLang()}(jQuery),define("jq-validationEngine-en",function(){}),define("signup/views/SignupWorkspaceView",["core","signup/templates","jq-validationEngine-en"],function(e,a){return e.View.extend({className:"workspace",template:a["signup/SignupWorkspace"],events:{"click .btn-signup":"_onClickSignup"},appEvents:{},initialize:function(e){this.module=e.module},render:function(){this.module;this.$el.html(this.template()),this.$(".validationEngineContainer").validationEngine({})},_onClickSignup:function(){if(this.$(".validationEngineContainer").validationEngine("validate")){this.serializeForm()}}})}),define("signup/router",["jquery","backbone","./views/SignupWorkspaceView"],function(e,a,t){return a.Router.extend({routes:{"(*module)":"showWorkspace"},initialize:function(){},showWorkspace:function(a){a=a||"",this.appView&&this.appView.remove(),this.appView=new t({module:a}),e(".workspace-con").append(this.appView.el),this.appView.render()}})}),define("signup/index",["backbone","./router"],function(e,a){new a,e.history.start()});
//# sourceMappingURL=index.js.map