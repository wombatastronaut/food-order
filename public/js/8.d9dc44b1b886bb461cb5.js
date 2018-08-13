webpackJsonp([8],{OMNW:function(t,e,r){"use strict";var n=r("Xxa5"),o=r.n(n),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var a={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=(t=o.a.mark(function t(){var e,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u("",this.$t("login")),t.next=3,this.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:r=t.sent,e.location.href=r;case 5:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,s){try{var i=e[o](s),a=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}};function u(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":i(t))&&(r=t,t=""),r=s({url:t,title:e,width:600,height:720},r);var n=void 0!==window.screenLeft?window.screenLeft:window.screen.left,o=void 0!==window.screenTop?window.screenTop:window.screen.top,a=window.innerWidth||document.documentElement.clientWidth||window.screen.width,u=window.innerHeight||document.documentElement.clientHeight||window.screen.height;r.left=a/2-r.width/2+n,r.top=u/2-r.height/2+o;var c=Object.keys(r).reduce(function(t,e){return t.push(e+"="+r[e]),t},[]).join(","),l=window.open(t,e,c);return window.focus&&l.focus(),l}var c={render:function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()},staticRenderFns:[]},l=r("VU/8")(a,c,!1,null,null,null);e.a=l.exports},yNuM:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),o=r.n(n),s=r("2gGM"),i=r.n(s),a=r("OMNW"),u=r("NYxO");var c={middleware:"guest",components:{LoginWithGithub:a.a},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new i.a({email:"",password:""}),remember:!1}},computed:Object(u.mapGetters)({user:"auth/user"}),methods:{login:function(){var t,e=(t=o.a.mark(function t(){var e,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/login");case 2:return e=t.sent,r=e.data,this.$store.dispatch("auth/saveToken",{token:r.token,remember:this.remember}),t.next=7,this.$store.dispatch("auth/fetchUser");case 7:if(0!==this.user.role){t.next=9;break}return t.abrupt("return",this.$router.push({name:"admin.dashboard"}));case 9:return t.abrupt("return",this.$router.push({name:"welcome"}));case 10:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,s){try{var i=e[o](s),a=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}()}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 m-auto"},[r("card",{attrs:{title:t.$t("login")}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)},keydown:function(e){t.form.onKeydown(e)}}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-3"}),t._v(" "),r("div",{staticClass:"col-md-7 d-flex"},[r("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n              "+t._s(t.$t("remember_me"))+"\n            ")]),t._v(" "),r("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[r("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),r("login-with-github")],1)])])])],1)])},staticRenderFns:[]},m=r("VU/8")(c,l,!1,null,null,null);e.default=m.exports}});
//# sourceMappingURL=8.d9dc44b1b886bb461cb5.js.map