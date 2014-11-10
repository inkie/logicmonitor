define("login/templates_compiled",["handlebars"],function(e){return this.LMTPL=this.LMTPL||{},this.LMTPL["login/LoginWorkspace"]=e.template({1:function(){return'<div style="margin:auto;width: 350px; text-align:center;background: #81ae49;border-radius: 5px;padding: 10px 0;font-size:14px;font-weight: bold;color:white;">\n    Your account is activated, you can log in now!\n</div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,i,t){var o,a="";return o=n["if"].call(e,null!=e?e.activateSuccess:e,{name:"if",hash:{},fn:this.program(1,t),inverse:this.noop,data:t}),null!=o&&(a+=o),a+='<div class="signin-content">\n    <div class="signin-logo" style="margin-bottom: 0;"></div>\n    <div class="section-box">\n        <div class="section-content">\n            <div class="section-row">\n                <label>Username or Email</label>\n                <input type="text" name="username" tabindex="1">\n            </div>\n            <div class="section-row">\n                <label>Password <a href="password.html">I forgot my password!</a>\n                </label>\n                <input type="password" name="password" tabindex="2">\n            </div>\n            <div class="section-row clearfix" style="height: 35px; line-height: 35px;">\n                <div class="styled-checkbox">\n                    <input type="checkbox" id="rem" name="rem">\n                    <label for="rem"></label>\n                </div>\n                <div class="checkbox-label" for="rem">Remember me</div>\n\n                <a href="#" class="btn-login lm-button purple right" tabindex="3">Log in</a>\n            </div>\n            <div class="section-row">\n                <span>Not a member?</span> <a href="signup.html" style="font-size: 16px;">Sign up</a>\n            </div>\n        </div>\n    </div>\n</div>\n',o=this.invokePartial(i["commons/logicmonitor/foot"],"","commons/logicmonitor/foot",e,void 0,n,i,t),null!=o&&(a+=o),a+"\n"},usePartial:!0,useData:!0}),this.LMTPL["login/partials/placeholder"]=e.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return""},useData:!0}),this.LMTPL["login/placeholder"]=e.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return""},useData:!0}),this.LMTPL}),define("login/partials_compiled",["handlebars"],function(e){return this.LMPAR=this.LMPAR||{},e.registerPartial("login/placeholder",this.LMPAR["login/placeholder"]=e.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return""},useData:!0})),this.LMPAR}),define("login/templates/main",["handlebars","commons/logicmonitor/templates","login/templates_compiled","login/partials_compiled"],function(e,n,i){return i}),define("login/views/LoginWorkspaceView",["core","login/templates","modelurls","lmmsgbox","lmblockui"],function(e,n,i,t,o){return e.View.extend({className:"workspace login-workspace",template:n["login/LoginWorkspace"],events:{"click .btn-login":"_onLogin"},appEvents:{},initialize:function(e){this.module=e.module,this.blockUI=new o},render:function(){this.module;this.$el.html(this.template({activateSuccess:(location.search||"").indexOf("activate_success")>-1}))},_onLogin:function(n){n.preventDefault();var i=this,o=this.serializeForm();this.blockUI.block({message:"Log in..."}),this._login(o,function(n,a){i.blockUI.unBlock(),n?t.alert(n.status+":"+n.errmsg,"Log in error"):(e.setLoginUser(a,o.rem),location.href="index.html")})},_login:function(n,t){e.rajax({type:"post",url:i.login,data:JSON.stringify({username:n.username,password:n.password}),success:function(e){t(null,e.data)},error:function(e){t(e)}})}})}),define("login/router",["jquery","backbone","./views/LoginWorkspaceView"],function(e,n,i){return n.Router.extend({routes:{"(*module)":"showWorkspace"},initialize:function(){},showWorkspace:function(n){n=n||"",this.appView&&this.appView.remove(),this.appView=new i({module:n}),e(".workspace-con").append(this.appView.el),this.appView.render()}})}),define("login/index",["backbone","./router"],function(e,n){new n,e.history.start()});
//# sourceMappingURL=index.js.map