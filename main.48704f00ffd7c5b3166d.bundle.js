webpackJsonp([1,4],{"/ZLn":function(n,l,t){"use strict";var e=t("WCJc");t.d(l,"a",function(){return u});var u=function(){function n(n){this._firebaseService=n}return n.prototype.ngOnInit=function(){var n=this;this._firebaseService.getProfiles().subscribe(function(l){n.profiles=l})},n.ctorParameters=function(){return[{type:e.a}]},n}()},"/fcW":function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="/fcW"},0:function(n,l,t){n.exports=t("x35b")},"1A80":function(n,l,t){"use strict";function e(n){return i._24(0,[(n()(),i._25(0,null,null,1,"app-navbar",[],null,null,null,_.a,_.b)),i._26(114688,null,0,o.a,[a.a],null,null),(n()(),i._27(null,["\n"])),(n()(),i._25(0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(n()(),i._27(null,["\n\t"])),(n()(),i._25(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i._26(147456,null,0,s.y,[s.l,i.T,i.U,[8,null]],null,null),(n()(),i._27(null,["\n"]))],function(n,l){n(l,1,0)},null)}function u(n){return i._24(0,[(n()(),i._25(0,null,null,1,"app-root",[],null,null,null,e,p)),i._26(49152,null,0,c.a,[],null,null)],null,null)}var r=t("Ni5f"),i=t("3j3K"),_=t("fgrr"),o=t("AG92"),a=t("WCJc"),s=t("5oXY"),c=t("YWx4");t.d(l,"a",function(){return f});var h=[r.a],p=i._23({encapsulation:0,styles:h,data:{}}),f=i._28("app-root",c.a,u,{},{},[])},"601y":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},AG92:function(n,l,t){"use strict";var e=t("WCJc");t.d(l,"a",function(){return u});var u=function(){function n(n){this._firebaseService=n}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:e.a}]},n}()},BPmW:function(n,l,t){"use strict";function e(n){return i._24(0,[(n()(),i._25(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),i._27(null,["\n  profiles works!\n"])),(n()(),i._27(null,["\n"]))],null,null)}function u(n){return i._24(0,[(n()(),i._25(0,null,null,1,"app-profiles",[],null,null,null,e,s)),i._26(114688,null,0,_.a,[o.a],null,null)],function(n,l){n(l,1,0)},null)}var r=t("wACO"),i=t("3j3K"),_=t("/ZLn"),o=t("WCJc");t.d(l,"a",function(){return c});var a=[r.a],s=i._23({encapsulation:0,styles:a,data:{}}),c=i._28("app-profiles",_.a,u,{},{},[])},GKT3:function(n,l,t){"use strict";function e(n){return s._24(0,[(n()(),s._25(0,null,null,1,"button",[["class","loginBtn loginBtn--google"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u._firebaseService.login()&&e}return e},null,null)),(n()(),s._27(null,["\n\t  Login with Google\n\t"]))],null,null)}function u(n){return s._24(0,[(n()(),s._25(0,null,null,7,"div",[["class","text-center"]],null,null,null,null,null)),(n()(),s._27(null,["\n\t"])),(n()(),s._25(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s._27(null,["Please login with your Google account to access the chat."])),(n()(),s._27(null,["\n\t"])),(n()(),s._30(16777216,null,null,1,null,e)),s._26(16384,null,0,c.l,[s.T,s._6],{ngIf:[0,"ngIf"]},null),(n()(),s._27(null,["\n"]))],function(n,l){n(l,6,0,!l.component._firebaseService.isLoggedIn())},null)}function r(n){return s._24(0,[(n()(),s._25(0,null,null,6,"div",[["class","msg"]],null,null,null,null,null)),(n()(),s._27(null,["\n\t\t"])),(n()(),s._25(0,null,null,0,"img",[["height","32px"],["width","32px"]],[[8,"src",4]],null,null,null,null)),(n()(),s._27(null,[" "])),(n()(),s._25(0,null,null,1,"p",[["style","display:inline"]],null,null,null,null,null)),(n()(),s._27(null,["  ",": ",""])),(n()(),s._27(null,[" \n\t"]))],null,function(n,l){n(l,2,0,s._31(1,"",l.context.$implicit.photo,"")),n(l,5,0,l.context.$implicit.name,l.context.$implicit.message)})}function i(n){return s._24(0,[(n()(),s._25(0,null,null,25,"div",[],null,null,null,null,null)),(n()(),s._27(null,["\n"])),(n()(),s._25(0,null,null,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0;if("submit"===l){e=!1!==s._29(n,4).onSubmit(t)&&e}if("reset"===l){e=!1!==s._29(n,4).onReset()&&e}return e},null,null)),s._26(16384,null,0,h.d,[],null,null),s._26(16384,null,0,h.e,[[8,null],[8,null]],null,null),s._32(2048,null,h.f,null,[h.e]),s._26(16384,null,0,h.g,[h.f],null,null),(n()(),s._27(null,["\n\t"])),(n()(),s._25(0,null,null,15,"div",[["class","form-group text-center"]],null,null,null,null,null)),(n()(),s._27(null,["\n\t  \t"])),(n()(),s._25(0,[["inputBox",1]],null,7,"input",[["class","form-control input-md"],["id","chatbox"],["maxlength","125"],["name","messageBox"],["placeholder","Enter chat in here"],["type","text"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,u=n.component;if("input"===l){e=!1!==s._29(n,11)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==s._29(n,11).onTouched()&&e}if("compositionstart"===l){e=!1!==s._29(n,11)._compositionStart()&&e}if("compositionend"===l){e=!1!==s._29(n,11)._compositionEnd(t.target.value)&&e}if("keyup.enter"===l){e=!1!==u.sendMsg(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(u.msgVal=t)&&e}return e},null,null)),s._26(16384,null,0,h.h,[s.K,s.L,[2,h.i]],null,null),s._26(540672,null,0,h.j,[],{maxlength:[0,"maxlength"]},null),s._32(1024,null,h.k,function(n){return[n]},[h.j]),s._32(1024,null,h.l,function(n){return[n]},[h.h]),s._26(671744,null,0,h.m,[[2,h.f],[2,h.k],[8,null],[2,h.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),s._32(2048,null,h.n,null,[h.m]),s._26(16384,null,0,h.o,[h.n],null,null),(n()(),s._27(null,["\n\t  \t"])),(n()(),s._25(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s._27(null,["\n\t  \t"])),(n()(),s._25(0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.sendMsg(s._29(n,10).value)&&e}return e},null,null)),(n()(),s._27(null,["Send"])),(n()(),s._27(null,["\n\t"])),(n()(),s._27(null,["\n"])),(n()(),s._27(null,["\n"]))],function(n,l){var t=l.component;n(l,12,0,"125"),n(l,15,0,"messageBox",t.msgVal)},function(n,l){n(l,2,0,s._29(l,6).ngClassUntouched,s._29(l,6).ngClassTouched,s._29(l,6).ngClassPristine,s._29(l,6).ngClassDirty,s._29(l,6).ngClassValid,s._29(l,6).ngClassInvalid,s._29(l,6).ngClassPending),n(l,10,0,s._29(l,12).maxlength?s._29(l,12).maxlength:null,s._29(l,17).ngClassUntouched,s._29(l,17).ngClassTouched,s._29(l,17).ngClassPristine,s._29(l,17).ngClassDirty,s._29(l,17).ngClassValid,s._29(l,17).ngClassInvalid,s._29(l,17).ngClassPending)})}function _(n){return s._24(0,[(n()(),s._30(16777216,null,null,1,null,u)),s._26(16384,null,0,c.l,[s.T,s._6],{ngIf:[0,"ngIf"]},null),(n()(),s._27(null,["\n\n"])),(n()(),s._25(0,null,null,5,"div",[["id","messages"]],null,null,null,null,null)),(n()(),s._27(null,["\n\t"])),(n()(),s._30(16777216,null,null,2,null,r)),s._26(802816,null,0,c.m,[s.T,s._6,s.w],{ngForOf:[0,"ngForOf"]},null),s._33(131072,c.n,[s.P]),(n()(),s._27(null,["\n"])),(n()(),s._27(null,["\n"])),(n()(),s._30(16777216,null,null,1,null,i)),s._26(16384,null,0,c.l,[s.T,s._6],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,!t._firebaseService.isLoggedIn()),n(l,6,0,s._34(l,6,0,s._29(l,7).transform(t._firebaseService.messageLog))),n(l,11,0,t._firebaseService.isLoggedIn())},null)}function o(n){return s._24(0,[(n()(),s._25(0,null,null,1,"app-chat",[],null,null,null,_,d)),s._26(114688,null,0,p.a,[f.a],null,null)],function(n,l){n(l,1,0)},null)}var a=t("wzSg"),s=t("3j3K"),c=t("2Je8"),h=t("NVOs"),p=t("T5b3"),f=t("WCJc");t.d(l,"a",function(){return b});var g=[a.a],d=s._23({encapsulation:0,styles:g,data:{}}),b=s._28("app-chat",p.a,o,{},{},[])},Iksp:function(n,l,t){"use strict";var e=t("ZrT/"),u=t("T5b3"),r=t("/ZLn");t.d(l,"a",function(){return i});var i=(e.a,u.a,r.a,function(){function n(){}return n}())},Ni5f:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},T5b3:function(n,l,t){"use strict";var e=t("WCJc");t.d(l,"a",function(){return u});var u=function(){function n(n){this._firebaseService=n}return n.prototype.ngOnInit=function(){},n.prototype.sendMsg=function(n){console.log("sent message through chatcomp"),this._firebaseService.sendMsg(n),this.msgVal=""},n.ctorParameters=function(){return[{type:e.a}]},n}()},WCJc:function(n,l,t){"use strict";var e=t("4SaG"),u=t("JGyx"),r=t("OPUS");t.n(r);t.d(l,"a",function(){return i});var i=function(){function n(n,l){this.db=n,this.afAuth=l,this.profiles=n.list("/profiles"),this.messageLog=n.list("/messages",{query:{limitToLast:13}}),this.user=l.authState}return n.prototype.getProfiles=function(){return this.profiles},n.prototype.login=function(){this.afAuth.auth.signInWithPopup(new r.auth.GoogleAuthProvider)},n.prototype.logout=function(){this.afAuth.auth.signOut()},n.prototype.isLoggedIn=function(){return null!==this.afAuth.auth.currentUser},n.prototype.sendMsg=function(n){"/clear"==n?(this.messageLog.remove(),this.messageLog.push({message:"Cleared the chat.",name:"Server",photo:"../assets/server.png"})):/\S/.test(n)&&this.messageLog.push({message:n,name:this.afAuth.auth.currentUser.displayName,photo:this.afAuth.auth.currentUser.photoURL})},n.ctorParameters=function(){return[{type:e.a},{type:u.a}]},n}()},YWx4:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){this.title="app works!"}return n}()},"ZrT/":function(n,l,t){"use strict";var e=t("WCJc");t.d(l,"a",function(){return u});var u=function(){function n(n){this._firebaseService=n}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:e.a}]},n}()},fgrr:function(n,l,t){"use strict";function e(n){return o._24(0,[(n()(),o._25(0,null,null,3,"li",[],null,null,null,null,null)),(n()(),o._25(0,null,null,2,"a",[],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u._firebaseService.logout()&&e}return e},null,null)),(n()(),o._25(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-sign-out"]],null,null,null,null,null)),(n()(),o._27(null,[" Logout"]))],null,null)}function u(n){return o._24(0,[(n()(),o._25(0,null,null,3,"li",[],null,null,null,null,null)),(n()(),o._25(0,null,null,2,"a",[],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u._firebaseService.login()&&e}return e},null,null)),(n()(),o._27(null,["Login "])),(n()(),o._25(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-sign-in"]],null,null,null,null,null))],null,null)}function r(n){return o._24(0,[(n()(),o._25(0,null,null,51,"nav",[["class","navbar navbar-inverse"]],null,null,null,null,null)),(n()(),o._27(null,["\n      "])),(n()(),o._25(0,null,null,48,"div",[["class","container"]],null,null,null,null,null)),(n()(),o._27(null,["\n        "])),(n()(),o._25(0,null,null,16,"div",[["class","navbar-header"]],null,null,null,null,null)),(n()(),o._27(null,["\n          "])),(n()(),o._25(0,null,null,10,"button",[["aria-controls","navbar"],["aria-expanded","false"],["class","navbar-toggle collapsed"],["data-target","#navbar"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(n()(),o._27(null,["\n            "])),(n()(),o._25(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(n()(),o._27(null,["Toggle navigation"])),(n()(),o._27(null,["\n            "])),(n()(),o._25(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(n()(),o._27(null,["\n            "])),(n()(),o._25(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(n()(),o._27(null,["\n            "])),(n()(),o._25(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(n()(),o._27(null,["\n          "])),(n()(),o._27(null,["\n          "])),(n()(),o._25(0,null,null,1,"a",[["class","navbar-brand chatter"]],null,null,null,null,null)),(n()(),o._27(null,["Chatter"])),(n()(),o._27(null,["\n        "])),(n()(),o._27(null,["\n        "])),(n()(),o._25(0,null,null,27,"div",[["class","collapse navbar-collapse"],["id","navbar"]],null,null,null,null,null)),(n()(),o._27(null,["\n          "])),(n()(),o._25(0,null,null,16,"ul",[["class","nav navbar-nav"]],null,null,null,null,null)),(n()(),o._27(null,["\n            "])),(n()(),o._25(0,null,null,3,"li",[],null,null,null,null,null)),(n()(),o._25(0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;if("click"===l){e=!1!==o._29(n,28).onClick(t.button,t.ctrlKey,t.metaKey)&&e}return e},null,null)),o._26(671744,null,0,a.z,[a.j,a.v,s.f],{routerLink:[0,"routerLink"]},null),(n()(),o._27(null,["Home"])),(n()(),o._27(null,["\n            "])),(n()(),o._25(0,null,null,3,"li",[],null,null,null,null,null)),(n()(),o._25(0,null,null,2,"a",[["routerLink","/chat"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;if("click"===l){e=!1!==o._29(n,33).onClick(t.button,t.ctrlKey,t.metaKey)&&e}return e},null,null)),o._26(671744,null,0,a.z,[a.j,a.v,s.f],{routerLink:[0,"routerLink"]},null),(n()(),o._27(null,["Chats"])),(n()(),o._27(null,["\n            "])),(n()(),o._25(0,null,null,3,"li",[],null,null,null,null,null)),(n()(),o._25(0,null,null,2,"a",[["routerLink","/profiles"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;if("click"===l){e=!1!==o._29(n,38).onClick(t.button,t.ctrlKey,t.metaKey)&&e}return e},null,null)),o._26(671744,null,0,a.z,[a.j,a.v,s.f],{routerLink:[0,"routerLink"]},null),(n()(),o._27(null,["Profiles"])),(n()(),o._27(null,["\n            \n          "])),(n()(),o._27(null,["\n          "])),(n()(),o._25(0,null,null,6,"ul",[["class","nav navbar-nav navbar-right"]],null,null,null,null,null)),(n()(),o._27(null,["\n            "])),(n()(),o._30(16777216,null,null,1,null,e)),o._26(16384,null,0,s.l,[o.T,o._6],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),o._27(null,["\n            "])),(n()(),o._30(0,[["loginButton",2]],null,0,null,u)),(n()(),o._27(null,["\n          "])),(n()(),o._27(null,["\n        "])),(n()(),o._27(null,["      \n    "])),(n()(),o._27(null,["\n"]))],function(n,l){var t=l.component;n(l,28,0,"/"),n(l,33,0,"/chat"),n(l,38,0,"/profiles"),n(l,45,0,t._firebaseService.isLoggedIn(),o._29(l,47))},function(n,l){n(l,27,0,o._29(l,28).target,o._29(l,28).href),n(l,32,0,o._29(l,33).target,o._29(l,33).href),n(l,37,0,o._29(l,38).target,o._29(l,38).href)})}function i(n){return o._24(0,[(n()(),o._25(0,null,null,1,"app-navbar",[],null,null,null,r,f)),o._26(114688,null,0,c.a,[h.a],null,null)],function(n,l){n(l,1,0)},null)}var _=t("601y"),o=t("3j3K"),a=t("5oXY"),s=t("2Je8"),c=t("AG92"),h=t("WCJc");t.d(l,"b",function(){return f}),l.a=r;var p=[_.a],f=o._23({encapsulation:0,styles:p,data:{}});o._28("app-navbar",c.a,i,{},{},[])},kZql:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e={production:!0,firebase:{apiKey:"AIzaSyBwHnE2cA-xw2J4VyyimaIqUaAQiptWOUU",authDomain:"chatter-481c1.firebaseapp.com",databaseURL:"https://chatter-481c1.firebaseio.com",projectId:"chatter-481c1",storageBucket:"chatter-481c1.appspot.com",messagingSenderId:"428037452450"}}},kke6:function(n,l,t){"use strict";var e=t("3j3K"),u=t("Iksp"),r=t("2Je8"),i=t("5oXY"),_=t("Qbdm"),o=t("NVOs"),a=t("Fzro"),s=t("lRFM"),c=t("9zt1"),h=t("PWr4"),p=t("WCJc"),f=t("sP+a"),g=t("GKT3"),d=t("BPmW"),b=t("1A80"),y=t("qPn+"),m=t("ZrT/"),v=t("T5b3"),A=t("/ZLn"),P=t("4gHJ");t.d(l,"a",function(){return I});var R=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),S=function(n){function l(l){return n.call(this,l,[f.a,g.a,d.a,b.a],[b.a])||this}return R(l,n),Object.defineProperty(l.prototype,"_LOCALE_ID_27",{get:function(){return null==this.__LOCALE_ID_27&&(this.__LOCALE_ID_27=e.b(this.parent.get(e.c,null))),this.__LOCALE_ID_27},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_NgLocalization_28",{get:function(){return null==this.__NgLocalization_28&&(this.__NgLocalization_28=new r.a(this._LOCALE_ID_27)),this.__NgLocalization_28},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_APP_ID_29",{get:function(){return null==this.__APP_ID_29&&(this.__APP_ID_29=e.d()),this.__APP_ID_29},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_IterableDiffers_30",{get:function(){return null==this.__IterableDiffers_30&&(this.__IterableDiffers_30=e.e()),this.__IterableDiffers_30},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_KeyValueDiffers_31",{get:function(){return null==this.__KeyValueDiffers_31&&(this.__KeyValueDiffers_31=e.f()),this.__KeyValueDiffers_31},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_DomSanitizer_32",{get:function(){return null==this.__DomSanitizer_32&&(this.__DomSanitizer_32=new _.b(this.parent.get(_.c))),this.__DomSanitizer_32},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Sanitizer_33",{get:function(){return null==this.__Sanitizer_33&&(this.__Sanitizer_33=this._DomSanitizer_32),this.__Sanitizer_33},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_HAMMER_GESTURE_CONFIG_34",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_34&&(this.__HAMMER_GESTURE_CONFIG_34=new _.d),this.__HAMMER_GESTURE_CONFIG_34},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_EVENT_MANAGER_PLUGINS_35",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_35&&(this.__EVENT_MANAGER_PLUGINS_35=[new _.e(this.parent.get(_.c)),new _.f(this.parent.get(_.c)),new _.g(this.parent.get(_.c),this._HAMMER_GESTURE_CONFIG_34)]),this.__EVENT_MANAGER_PLUGINS_35},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_EventManager_36",{get:function(){return null==this.__EventManager_36&&(this.__EventManager_36=new _.h(this._EVENT_MANAGER_PLUGINS_35,this.parent.get(e.g))),this.__EventManager_36},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵDomSharedStylesHost_37",{get:function(){return null==this.__ɵDomSharedStylesHost_37&&(this.__ɵDomSharedStylesHost_37=new _.i(this.parent.get(_.c))),this.__ɵDomSharedStylesHost_37},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵDomRendererFactory2_38",{get:function(){return null==this.__ɵDomRendererFactory2_38&&(this.__ɵDomRendererFactory2_38=new _.j(this._EventManager_36,this._ɵDomSharedStylesHost_37)),this.__ɵDomRendererFactory2_38},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_RendererFactory2_39",{get:function(){return null==this.__RendererFactory2_39&&(this.__RendererFactory2_39=this._ɵDomRendererFactory2_38),this.__RendererFactory2_39},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵSharedStylesHost_40",{get:function(){return null==this.__ɵSharedStylesHost_40&&(this.__ɵSharedStylesHost_40=this._ɵDomSharedStylesHost_37),this.__ɵSharedStylesHost_40},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Testability_41",{get:function(){return null==this.__Testability_41&&(this.__Testability_41=new e.h(this.parent.get(e.g))),this.__Testability_41},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Meta_42",{get:function(){return null==this.__Meta_42&&(this.__Meta_42=new _.k(this.parent.get(_.c))),this.__Meta_42},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Title_43",{get:function(){return null==this.__Title_43&&(this.__Title_43=new _.l(this.parent.get(_.c))),this.__Title_43},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_44",{get:function(){return null==this.__ɵi_44&&(this.__ɵi_44=new o.a),this.__ɵi_44},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_BrowserXhr_45",{get:function(){return null==this.__BrowserXhr_45&&(this.__BrowserXhr_45=new a.a),this.__BrowserXhr_45},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ResponseOptions_46",{get:function(){return null==this.__ResponseOptions_46&&(this.__ResponseOptions_46=new a.b),this.__ResponseOptions_46},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_XSRFStrategy_47",{get:function(){return null==this.__XSRFStrategy_47&&(this.__XSRFStrategy_47=a.c()),this.__XSRFStrategy_47},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_XHRBackend_48",{get:function(){return null==this.__XHRBackend_48&&(this.__XHRBackend_48=new a.d(this._BrowserXhr_45,this._ResponseOptions_46,this._XSRFStrategy_47)),this.__XHRBackend_48},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_RequestOptions_49",{get:function(){return null==this.__RequestOptions_49&&(this.__RequestOptions_49=new a.e),this.__RequestOptions_49},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_Http_50",{get:function(){return null==this.__Http_50&&(this.__Http_50=a.f(this._XHRBackend_48,this._RequestOptions_49)),this.__Http_50},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FirebaseApp_53",{get:function(){return null==this.__FirebaseApp_53&&(this.__FirebaseApp_53=y.a(this._FirebaseAppConfigToken_51,this._FirebaseAppName_52)),this.__FirebaseApp_53},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_AngularFireDatabase_54",{get:function(){return null==this.__AngularFireDatabase_54&&(this.__AngularFireDatabase_54=c.a(this._FirebaseApp_53)),this.__AngularFireDatabase_54},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ActivatedRoute_55",{get:function(){return null==this.__ActivatedRoute_55&&(this.__ActivatedRoute_55=i.a(this._Router_22)),this.__ActivatedRoute_55},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_NoPreloading_56",{get:function(){return null==this.__NoPreloading_56&&(this.__NoPreloading_56=new i.b),this.__NoPreloading_56},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_PreloadingStrategy_57",{get:function(){return null==this.__PreloadingStrategy_57&&(this.__PreloadingStrategy_57=this._NoPreloading_56),this.__PreloadingStrategy_57},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_RouterPreloader_58",{get:function(){return null==this.__RouterPreloader_58&&(this.__RouterPreloader_58=new i.c(this._Router_22,this._NgModuleFactoryLoader_20,this._Compiler_19,this,this._PreloadingStrategy_57)),this.__RouterPreloader_58},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_PreloadAllModules_59",{get:function(){return null==this.__PreloadAllModules_59&&(this.__PreloadAllModules_59=new i.d),this.__PreloadAllModules_59},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ROUTER_INITIALIZER_60",{get:function(){return null==this.__ROUTER_INITIALIZER_60&&(this.__ROUTER_INITIALIZER_60=i.e(this._ɵg_3)),this.__ROUTER_INITIALIZER_60},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_APP_BOOTSTRAP_LISTENER_61",{get:function(){return null==this.__APP_BOOTSTRAP_LISTENER_61&&(this.__APP_BOOTSTRAP_LISTENER_61=[this._ROUTER_INITIALIZER_60]),this.__APP_BOOTSTRAP_LISTENER_61},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_AngularFireAuth_62",{get:function(){return null==this.__AngularFireAuth_62&&(this.__AngularFireAuth_62=new h.a(this._FirebaseApp_53)),this.__AngularFireAuth_62},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FirebaseService_63",{get:function(){return null==this.__FirebaseService_63&&(this.__FirebaseService_63=new p.a(this._AngularFireDatabase_54,this._AngularFireAuth_62)),this.__FirebaseService_63},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._ErrorHandler_1=_.m(),this._NgProbeToken_2=[i.f()],this._ɵg_3=new i.g(this),this._APP_INITIALIZER_4=[e.i,_.n(this.parent.get(_.o,null),this._NgProbeToken_2),i.h(this._ɵg_3)],this._ApplicationInitStatus_5=new e.j(this._APP_INITIALIZER_4),this._ɵf_6=new e.k(this.parent.get(e.g),this.parent.get(e.l),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5),this._ApplicationRef_7=this._ɵf_6,this._ApplicationModule_8=new e.m(this._ApplicationRef_7),this._BrowserModule_9=new _.p(this.parent.get(_.p,null)),this._ɵba_10=new o.b,this._FormsModule_11=new o.c,this._HttpModule_12=new a.g,this._ɵa_13=i.i(this.parent.get(i.j,null)),this._UrlSerializer_14=new i.k,this._RouterOutletMap_15=new i.l,this._ROUTER_CONFIGURATION_16={},this._LocationStrategy_17=i.m(this.parent.get(r.c),this.parent.get(r.d,null),this._ROUTER_CONFIGURATION_16),this._Location_18=new r.e(this._LocationStrategy_17),this._Compiler_19=new e.n,this._NgModuleFactoryLoader_20=new e.o(this._Compiler_19,this.parent.get(e.p,null)),this._ROUTES_21=[[{path:"",component:m.a},{path:"chat",component:v.a},{path:"profiles",component:A.a}]],this._Router_22=i.n(this._ApplicationRef_7,this._UrlSerializer_14,this._RouterOutletMap_15,this._Location_18,this,this._NgModuleFactoryLoader_20,this._Compiler_19,this._ROUTES_21,this._ROUTER_CONFIGURATION_16,this.parent.get(i.o,null),this.parent.get(i.p,null)),this._RouterModule_23=new i.q(this._ɵa_13,this._Router_22),this._AngularFireModule_24=new s.a,this._AngularFireDatabaseModule_25=new c.b,this._AppModule_26=new u.a,this._FirebaseAppConfigToken_51={apiKey:"AIzaSyBwHnE2cA-xw2J4VyyimaIqUaAQiptWOUU",authDomain:"chatter-481c1.firebaseapp.com",databaseURL:"https://chatter-481c1.firebaseio.com",projectId:"chatter-481c1",storageBucket:"chatter-481c1.appspot.com",messagingSenderId:"428037452450"},this._FirebaseAppName_52=void 0,this._AppModule_26},l.prototype.getInternal=function(n,l){return n===r.b?this._CommonModule_0:n===e.q?this._ErrorHandler_1:n===e.r?this._NgProbeToken_2:n===i.g?this._ɵg_3:n===e.s?this._APP_INITIALIZER_4:n===e.j?this._ApplicationInitStatus_5:n===e.k?this._ɵf_6:n===e.t?this._ApplicationRef_7:n===e.m?this._ApplicationModule_8:n===_.p?this._BrowserModule_9:n===o.b?this._ɵba_10:n===o.c?this._FormsModule_11:n===a.g?this._HttpModule_12:n===i.r?this._ɵa_13:n===i.s?this._UrlSerializer_14:n===i.l?this._RouterOutletMap_15:n===i.t?this._ROUTER_CONFIGURATION_16:n===r.f?this._LocationStrategy_17:n===r.e?this._Location_18:n===e.n?this._Compiler_19:n===e.u?this._NgModuleFactoryLoader_20:n===i.u?this._ROUTES_21:n===i.j?this._Router_22:n===i.q?this._RouterModule_23:n===s.a?this._AngularFireModule_24:n===c.b?this._AngularFireDatabaseModule_25:n===u.a?this._AppModule_26:n===e.c?this._LOCALE_ID_27:n===r.g?this._NgLocalization_28:n===e.v?this._APP_ID_29:n===e.w?this._IterableDiffers_30:n===e.x?this._KeyValueDiffers_31:n===_.q?this._DomSanitizer_32:n===e.y?this._Sanitizer_33:n===_.r?this._HAMMER_GESTURE_CONFIG_34:n===_.s?this._EVENT_MANAGER_PLUGINS_35:n===_.h?this._EventManager_36:n===_.i?this._ɵDomSharedStylesHost_37:n===_.j?this._ɵDomRendererFactory2_38:n===e.z?this._RendererFactory2_39:n===_.t?this._ɵSharedStylesHost_40:n===e.h?this._Testability_41:n===_.k?this._Meta_42:n===_.l?this._Title_43:n===o.a?this._ɵi_44:n===a.a?this._BrowserXhr_45:n===a.h?this._ResponseOptions_46:n===a.i?this._XSRFStrategy_47:n===a.d?this._XHRBackend_48:n===a.j?this._RequestOptions_49:n===a.k?this._Http_50:n===y.b?this._FirebaseAppConfigToken_51:n===s.b?this._FirebaseAppName_52:n===y.c?this._FirebaseApp_53:n===P.a?this._AngularFireDatabase_54:n===i.v?this._ActivatedRoute_55:n===i.b?this._NoPreloading_56:n===i.w?this._PreloadingStrategy_57:n===i.c?this._RouterPreloader_58:n===i.d?this._PreloadAllModules_59:n===i.x?this._ROUTER_INITIALIZER_60:n===e.A?this._APP_BOOTSTRAP_LISTENER_61:n===h.a?this._AngularFireAuth_62:n===p.a?this._FirebaseService_63:l},l.prototype.destroyInternal=function(){this._ɵf_6.ngOnDestroy(),this.__ɵDomSharedStylesHost_37&&this._ɵDomSharedStylesHost_37.ngOnDestroy(),this.__RouterPreloader_58&&this._RouterPreloader_58.ngOnDestroy()},l}(e.B),I=new e.C(S,u.a)},mUwc:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},"sP+a":function(n,l,t){"use strict";function e(n){return a._24(0,[(n()(),a._25(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a._27(null,["You are now logged in."]))],null,null)}function u(n){return a._24(0,[(n()(),a._25(0,null,null,1,"button",[["class","loginBtn loginBtn--google"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u._firebaseService.login()&&e}return e},null,null)),(n()(),a._27(null,["\n\t  Login with Google\n\t"]))],null,null)}function r(n){return a._24(0,[(n()(),a._25(0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u._firebaseService.logout()&&e}return e},null,null)),(n()(),a._27(null,["Logout"]))],null,null)}function i(n){return a._24(0,[(n()(),a._25(0,null,null,18,"div",[["class","jumbotron text-center"]],null,null,null,null,null)),(n()(),a._27(null,["\n\t"])),(n()(),a._25(0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(n()(),a._27(null,["\n\t\t"])),(n()(),a._25(0,null,null,1,"h1",[["class","chatter"]],null,null,null,null,null)),(n()(),a._27(null,["Chatter"])),(n()(),a._27(null,["\n\t\t"])),(n()(),a._25(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a._27(null,["A chat app using Angular 2 and Firebase"])),(n()(),a._27(null,["\n\t"])),(n()(),a._27(null,["\n\t"])),(n()(),a._30(16777216,null,null,1,null,e)),a._26(16384,null,0,s.l,[a.T,a._6],{ngIf:[0,"ngIf"]},null),(n()(),a._27(null,["\n\t"])),(n()(),a._30(16777216,null,null,1,null,u)),a._26(16384,null,0,s.l,[a.T,a._6],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),a._27(null,["\n\n\t"])),(n()(),a._30(0,[["logoutBtn",2]],null,0,null,r)),(n()(),a._27(null,["\n\n\n"])),(n()(),a._27(null,["\n\n"])),(n()(),a._25(0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(n()(),a._27(null,["\n\t"])),(n()(),a._25(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a._27(null,["Developer Team"])),(n()(),a._27(null,["\n\t\n"]))],function(n,l){var t=l.component;n(l,12,0,t._firebaseService.isLoggedIn()),n(l,15,0,!t._firebaseService.isLoggedIn(),a._29(l,17))},null)}function _(n){return a._24(0,[(n()(),a._25(0,null,null,1,"app-home",[],null,null,null,i,f)),a._26(114688,null,0,c.a,[h.a],null,null)],function(n,l){n(l,1,0)},null)}var o=t("mUwc"),a=t("3j3K"),s=t("2Je8"),c=t("ZrT/"),h=t("WCJc");t.d(l,"a",function(){return g});var p=[o.a],f=a._23({encapsulation:0,styles:p,data:{}}),g=a._28("app-home",c.a,_,{},{},[])},wACO:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},wzSg:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=["#chatbox[_ngcontent-%COMP%]{padding:20px 12px;font-size:20px}#messages[_ngcontent-%COMP%]{overflow:auto;height:85vh}.msg[_ngcontent-%COMP%]{font-size:24px;padding:10px;border-left:5px solid}.msg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.msg[_ngcontent-%COMP%]:nth-child(odd){border-color:#d0d0d0;background-color:rgba(0,0,0,.2)}.msg[_ngcontent-%COMP%]:nth-child(2n){border-color:#999;background-color:rgba(0,0,0,.35)}"]},x35b:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("3j3K"),u=t("kZql"),r=t("Qbdm"),i=t("kke6");u.a.production&&t.i(e.a)(),t.i(r.a)().bootstrapModuleFactory(i.a)}},[0]);