define("signup/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST["signup/SignupWorkspace"]=e.template(function(e,i,n,t,s){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),t=this.merge(t,e.partials),s=s||{};var o,a="",l=this;return a+='<div class="signin-content validationEngineContainer">\n    <div class="signin-logo" style="margin-bottom: 0;"></div>\n    <div class="section-box">\n        <div class="section-content">\n            <div class="section-row">\n                <label>Username</label>\n                <input type="text" name="username" placeholder="Pick a username" class="validate[required]">\n            </div>\n            <div class="section-row">\n                <label>Email</label>\n                <input type="text" name="email" placeholder="Your email" class="validate[required, custom[email]]">\n            </div>\n            <div class="section-row">\n                <label>Password</label>\n                <input type="password" name="password" placeholder="Create a password" class="validate[required]">\n            </div>\n            <div class="section-row clearfix" style="height: 35px; line-height: 35px;">\n                <span>Already a member?</span> <a href="login.html" style="font-size: 16px;">Log in</a>\n                <a href="#" class="btn-signup lm-button purple right">Sign up</a>\n            </div>\n        </div>\n    </div>\n</div>\n',o=l.invokePartial(t["commons/logicmonitor/foot"],"commons/logicmonitor/foot",i,n,t,s),(o||0===o)&&(a+=o),a+="\n"}),this.JST["signup/partials/placeholder"]=e.template(function(e,i,n,t,s){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),s=s||{};var o="";return o}),this.JST["signup/placeholder"]=e.template(function(e,i,n,t,s){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),s=s||{};var o="";return o}),this.JST}),define("signup/partials_compiled",["handlebars"],function(e){return this.JST=this.JST||{},e.registerPartial("signup/placeholder",e.template(function(e,i,n,t,s){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),s=s||{};var o="";return o})),this.JST}),define("signup/templates/main",["handlebars","commons/logicmonitor/templates","signup/templates_compiled","signup/partials_compiled"],function(e,i,n){return n}),define("signup/views/SignupWorkspaceView",["core","signup/templates","utils","lmmsgbox","commons/logicmonitor/models/UserModel","lmblockui","jq-validationEngine-en"],function(e,i,n,t,s,o){return e.View.extend({className:"workspace signup-workspace",template:i["signup/SignupWorkspace"],events:{"click .btn-signup":"_onClickSignup"},appEvents:{},initialize:function(e){this.module=e.module,this.blockUI=new o},render:function(){this.module;this.$el.html(this.template()),this.$(".validationEngineContainer").validationEngine({})},_onClickSignup:function(e){e.preventDefault();var i=this;if(this.$(".validationEngineContainer").validationEngine("validate")){var n=this.serializeForm();this.blockUI.block({message:"Signing up..."}),this._signup(n,function(e){i.blockUI.unBlock(),e?t.alert(e.status+":"+e.errmsg,"Sign up error"):new t({type:"alert",title:"Sign up successfully",width:600,bodyData:{msg:'<p style="line-height: 1.5">Thanks for registering! An account activation message has been sent to the email address <strong style="font-size: 16px;color:red;">'+n.email+'</strong> The activation link will only be active for 24 hours from the time of registration.<a href="login.html" style="font-size: 16px;">Go to log in!</a></p>',allowHTML:!0}}).on("dialog:closing",function(){setTimeout(function(){location.href="login.html"},0)})})}},_signup:function(e,i){var n=new s({username:e.username,email:e.email,password:e.password});n.save(e,{success:function(e){i(null,e.toJSON())},error:function(e,n){i(n)}})}})}),define("signup/router",["jquery","backbone","./views/SignupWorkspaceView"],function(e,i,n){return i.Router.extend({routes:{"(*module)":"showWorkspace"},initialize:function(){},showWorkspace:function(i){i=i||"",this.appView&&this.appView.remove(),this.appView=new n({module:i}),e(".workspace-con").append(this.appView.el),this.appView.render()}})}),define("signup/index",["backbone","./router"],function(e,i){new i,e.history.start()});
//# sourceMappingURL=index.js.map