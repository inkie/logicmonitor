define("index/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST["index/IndexWorkspace"]=e.template(function(e,i,n,t,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),r=r||{};var a,s="",o="function",p=this.escapeExpression;return s+='<h3>Welcome <a href="profile.html">',(a=n.userName)?a=a.call(i,{hash:{},data:r}):(a=i.userName,a=typeof a===o?a.apply(i):a),s+=p(a)+'!</a></h3>\n<p>This a empty index page, you can add any content here</p>\n<p>\nFor common controls demo, please visit\n<a href="demo.html">Demo html</a>\n</p>'}),this.JST["index/partials/placeholder"]=e.template(function(e,i,n,t,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),r=r||{};var a="";return a}),this.JST["index/placeholder"]=e.template(function(e,i,n,t,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),r=r||{};var a="";return a}),this.JST}),define("index/partials_compiled",["handlebars"],function(e){return this.JST=this.JST||{},e.registerPartial("index/placeholder",e.template(function(e,i,n,t,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),r=r||{};var a="";return a})),this.JST}),define("index/templates/main",["handlebars","commons/logicmonitor/templates","index/templates_compiled","index/partials_compiled"],function(e,i,n){return n}),define("index/views/IndexWorkspaceView",["core","index/templates"],function(e,i){return e.View.extend({className:"workspace index-workspace",template:i["index/IndexWorkspace"],events:{},appEvents:{},initialize:function(e){this.module=e.module},render:function(){var i=(this.module,e.getLoginUser());this.$el.html(this.template({userName:i.username}))}})}),define("index/router",["jquery","backbone","./views/IndexWorkspaceView"],function(e,i,n){return i.Router.extend({routes:{"(*module)":"showWorkspace"},initialize:function(){},showWorkspace:function(i){i=i||"",this.appView&&this.appView.remove(),this.appView=new n({module:i}),e(".workspace-con").append(this.appView.el),this.appView.render()}})}),define("index/index",["backbone","./router"],function(e,i){new i,e.history.start()});
//# sourceMappingURL=index.js.map