(this["webpackJsonpcbetar-2"]=this["webpackJsonpcbetar-2"]||[]).push([[1],{115:function(e,t,n){var a={"./ion-icon.entry.js":[203,57]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=115,e.exports=r},140:function(e,t,n){},141:function(e,t,n){},15:function(e,t,n){"use strict";t.a={storeFile:"Settings.json",fontSizeNorm:24,fontSizeLarge:48,apiVersion:"v1.2",cbetaApiUrl:"http://cbdata.dila.edu.tw/".concat("v1.2"),topCatalogs:{CBETA:"CBETA \u90e8\u985e",others:"\u6b77\u4ee3\u85cf\u7d93\u88dc\u8f2f",modern:"\u8fd1\u4ee3\u65b0\u7de8\u6587\u737b","Cat-T":"\u5927\u6b63\u85cf(\u90e8\u5225)","Cat-X":"\u534d\u7e8c\u85cf(\u90e8\u5225)","Cat-N":"\u5357\u50b3\u5927\u85cf\u7d93(\u90e8\u5225)","Vol-A":"\u8d99\u57ce\u91d1\u85cf","Vol-B":"\u5927\u85cf\u7d93\u88dc\u7de8","Vol-C":"\u4e2d\u83ef\u5927\u85cf\u7d93-\u4e2d\u83ef\u66f8\u5c40\u7248","Vol-D":"\u570b\u5716\u5584\u672c","Vol-F":"\u623f\u5c71\u77f3\u7d93","Vol-G":"\u4f5b\u6559\u5927\u85cf\u7d93","Vol-GA":"\u4e2d\u570b\u4f5b\u5bfa\u53f2\u5fd7\u5f59\u520a","Vol-GB":"\u4e2d\u570b\u4f5b\u5bfa\u5fd7\u53e2\u520a","Vol-I":"\u5317\u671d\u4f5b\u6559\u77f3\u523b\u62d3\u7247\u767e\u54c1","Vol-J":"\u5609\u8208\u85cf","Vol-K":"\u9ad8\u9e97\u5927\u85cf\u7d93-\u65b0\u6587\u8c50\u7248","Vol-L":"\u4e7e\u9686\u5927\u85cf\u7d93-\u65b0\u6587\u8c50\u7248","Vol-LC":"\u5442\u6f82\u4f5b\u5b78\u8457\u4f5c\u96c6","Vol-M":"\u534d\u6b63\u85cf\u7d93-\u65b0\u6587\u8c50\u7248","Vol-N":"\u5357\u50b3\u5927\u85cf\u7d93(\u518a\u5225)","Vol-P":"\u6c38\u6a02\u5317\u85cf","Vol-S":"\u5b8b\u85cf\u907a\u73cd-\u65b0\u6587\u8c50\u7248","Vol-T":"\u5927\u6b63\u85cf(\u518a\u5225)","Vol-U":"\u6d2a\u6b66\u5357\u85cf","Vol-X":"\u534d\u7e8c\u85cf(\u518a\u5225)","Vol-ZS":"\u6b63\u53f2\u4f5b\u6559\u8cc7\u6599\u985e\u7de8","Vol-ZW":"\u85cf\u5916\u4f5b\u6559\u6587\u737b","Vol-Y":"\u5370\u9806\u6cd5\u5e2b\u4f5b\u5b78\u8457\u4f5c\u96c6"}}},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),i=n.n(o),c=n(34),s=n(1),l=n(83),u=n(18),p=n(30),h=n(42),m=n(33),f=n(15);var d=Object(p.b)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object(m.a)({},e);switch(t.type){case"SET_KEY_VAL":var a=t.key,r=t.val;n[a]=r,localStorage.setItem(f.a.storeFile,JSON.stringify({settings:n}));break;case"ADD_BOOKMARK":null!==t.bookmark.fileName&&""!==t.bookmark.fileName&&localStorage.setItem(t.bookmark.fileName,t.htmlStr),n.bookmarks=[].concat(Object(h.a)(n.bookmarks),[t.bookmark]),localStorage.setItem(f.a.storeFile,JSON.stringify({settings:n}));break;case"DEL_BOOKMARK":var o=n.bookmarks,i=o.findIndex((function(e){return e.uuid===t.uuid}));-1!==i&&o.splice(i,1),null==o.find((function(e){return e.fileName===t.fileName}))&&localStorage.removeItem(t.fileName),n.bookmarks=Object(h.a)(o),localStorage.setItem(f.a.storeFile,JSON.stringify({settings:n}));break;default:if(0===Object.keys(n).length){var c=["fontSize","listFontSize","darkMode","showComments","bookmarks"],s=[32,24,0,0,[]];n={};for(var l=0;l<c.length;l++)n[c[l]]=s[l]}}return n},tmpSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object(m.a)({},e),a=t.key,r=t.val;switch(n[a]=r,t.type){case"TMP_SET_KEY_VAL":return n}return e}});var k=n(9),b=n(55),v=n(79),y=n(80),g=(n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(3)),E=n(4),w=n(7),j=n(8),O=(n(153),n(82)),S=function(e){Object(w.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).uuidStr="",e}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(s.k,null,r.a.createElement(s.f,null,r.a.createElement(s.s,null,r.a.createElement(s.r,null,"\u8a2d\u5b9a"))),r.a.createElement(s.e,null,r.a.createElement(s.j,null,r.a.createElement(s.h,null,r.a.createElement("div",null,r.a.createElement(s.g,{icon:k.v})),r.a.createElement("div",{className:"contentBlock"},r.a.createElement("div",{style:{flexDirection:"column"}},r.a.createElement("div",null,"\u5217\u8868\u5b57\u578b\u5927\u5c0f: ",this.props.settings.listFontSize),r.a.createElement(s.l,{min:10,max:64,value:this.props.settings.listFontSize,onIonChange:function(t){e.props.dispatch({type:"SET_KEY_VAL",key:"listFontSize",val:t.currentTarget.value})}})))),r.a.createElement(s.h,null,r.a.createElement("div",null,r.a.createElement(s.g,{icon:k.v})),r.a.createElement("div",{className:"contentBlock"},r.a.createElement("div",{style:{flexDirection:"column"}},r.a.createElement("div",null,"\u7d93\u6587\u5b57\u578b\u5927\u5c0f: ",this.props.settings.fontSize),r.a.createElement(s.l,{min:10,max:64,value:this.props.settings.fontSize,onIonChange:function(t){e.props.dispatch({type:"SET_KEY_VAL",key:"fontSize",val:t.currentTarget.value})}})))),r.a.createElement(s.h,null,r.a.createElement("div",null,r.a.createElement(s.g,{icon:k.u})),r.a.createElement("div",{className:"contentBlock"},r.a.createElement("div",null,"\u7279\u8272"),r.a.createElement("div",null,"\u641c\u5c0b\u7d93\u6587\u3001\u66f8\u7c64\u529f\u80fd\u3001\u96e2\u7dda\u700f\u89bd\u3001\u6697\u8272\u4e3b\u984c\u3001\u5b57\u578b\u8abf\u6574\u3002"))),r.a.createElement(s.h,{style:{alignItems:"start"}},r.a.createElement("div",null,r.a.createElement(s.g,{icon:k.k})),r.a.createElement("div",{className:"contentBlock"},r.a.createElement("div",null,"\u95dc\u65bc"),r.a.createElement("div",null,"\u7a0b\u5f0f\u7248\u672c: ",O.version),r.a.createElement("div",null,"CBETA API\u7248\u672c: ",f.a.apiVersion),r.a.createElement("div",null,"\u4f5c\u8005: Meng-Yuan Huang"),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:myh@live.com",target:"__new"},"myh@live.com")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/MrMYHuang/cbetar2",target:"__new"},"\u64cd\u4f5c\u8aaa\u660e\u8207\u958b\u653e\u539f\u59cb\u78bc")),r.a.createElement("div",null,r.a.createElement("a",{href:"http://cbdata.dila.edu.tw/v1.2/",target:"__new"},"CBETA API\u53c3\u8003\u6587\u4ef6")))))))}}]),n}(r.a.Component),A=Object(u.b)((function(e){return{settings:e.settings}}))(S),_=n(5),C=n.n(_),x=n(12),B=(n(75),n(17)),T=function(e){Object(w.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={work:null},a}return Object(E.a)(n,[{key:"ionViewWillEnter",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.bookmarks,n=Array();return t.forEach((function(t,a){var o,i,c,l="",u="".concat(t.selectedText);switch(t.type){case B.b.CATALOG:l="/catalog/".concat(t.uuid);break;case B.b.WORK:l="/catalog/work/".concat(t.uuid);break;case B.b.JUAN:u="".concat(null===(o=t.work)||void 0===o?void 0:o.title,"\u7b2c").concat(null===(i=t.work)||void 0===i?void 0:i.juan,"\u5377 - ").concat(u),l="/catalog/webview/".concat(null===(c=t.work)||void 0===c?void 0:c.work,"/").concat(t.fileName)}n.push(r.a.createElement(s.h,{key:"bookmarkItem_"+a,button:!0,onClick:function(){var n=Object(x.a)(C.a.mark((function n(a){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a.preventDefault(),e.props.history.push({pathname:l,state:{uuid:t.uuid,label:t.work}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},r.a.createElement(s.i,{style:{fontSize:e.props.listFontSize},key:"bookmarkItemLabel_"+a},u)))})),r.a.createElement(s.k,null,r.a.createElement(s.f,null,r.a.createElement(s.s,null,r.a.createElement(s.r,null,"\u66f8\u7c64"))),r.a.createElement(s.e,null,this.hasBookmark?r.a.createElement(s.j,null,n):r.a.createElement(s.i,{style:{fontSize:48,textAlign:"center",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},"\u7121\u66f8\u7c64")))}},{key:"hasBookmark",get:function(){return this.props.bookmarks.length>0}}]),n}(r.a.Component),N=Object(s.B)(T),V=Object(u.b)((function(e){return{bookmarks:e.settings.bookmarks,listFontSize:e.settings.listFontSize}}))(N),z=n(56),D=function(){var e=localStorage.getItem(f.a.storeFile);return null!=e?Object(p.c)(d,JSON.parse(e)):Object(p.c)(d)}(),I=function(){return r.a.createElement(u.a,{store:D},r.a.createElement(s.b,null,r.a.createElement(l.a,null,r.a.createElement(s.q,null,r.a.createElement(s.n,{animated:!1},r.a.createElement(c.b,{path:"/:tab(catalog)",component:function(e){return r.a.createElement(b.a,e)},exact:!0}),r.a.createElement(c.b,{path:"/:tab(catalog)/:path",component:function(e){return r.a.createElement(b.a,e)},exact:!0}),r.a.createElement(c.b,{path:"/:tab(catalog)/work/:path",component:function(e){return r.a.createElement(v.a,e)},exact:!0}),r.a.createElement(c.b,{path:"/:tab(catalog)/webview/:work/:path",render:function(e){return r.a.createElement(y.a,e)},exact:!0}),r.a.createElement(c.b,{path:"/:tab(catalog)/search/:keyword",render:function(e){return r.a.createElement(z.a,e)},exact:!0}),r.a.createElement(c.b,{path:"/:tab(bookmarks)",component:V,exact:!0}),r.a.createElement(c.b,{path:"/:tab(bookmarks)/search/:keyword",render:function(e){return r.a.createElement(z.a,e)},exact:!0}),r.a.createElement(c.b,{path:"/settings",component:A}),r.a.createElement(c.b,{path:"/",render:function(){return r.a.createElement(c.a,{to:"/bookmarks"})},exact:!0})),r.a.createElement(s.o,{slot:"bottom"},r.a.createElement(s.p,{tab:"bookmarks",href:"/bookmarks"},r.a.createElement(s.g,{icon:k.d})),r.a.createElement(s.p,{tab:"catalog",href:"/catalog"},r.a.createElement(s.g,{icon:k.c})),r.a.createElement(s.p,{tab:"settings",href:"/settings"},r.a.createElement(s.g,{icon:k.t})))))))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var a,r=n(3);!function(e){e[e.CATALOG=0]="CATALOG",e[e.WORK=1]="WORK",e[e.JUAN=2]="JUAN"}(a||(a={}));var o=function e(t){Object(r.a)(this,e),this.type=a.CATALOG,this.uuid="",this.work=null,this.selectedText="",this.fileName="",this.type=t.type,this.uuid=t.uuid,this.work=t.work,this.selectedText=t.selectedText,this.fileName=t.fileName}},55:function(e,t,n){"use strict";(function(e){var a=n(33),r=n(5),o=n.n(r),i=n(12),c=n(3),s=n(4),l=n(7),u=n(8),p=n(0),h=n.n(p),m=n(1),f=n(18),d=n(28),k=n.n(d),b=(n(140),n(15)),v=n(17),y=n(9),g=n(78),E="".concat(b.a.cbetaApiUrl,"/catalog_entry?q="),w=function(t){Object(l.a)(r,t);var n=Object(u.a)(r);function r(e){var t;return Object(c.a)(this,r),(t=n.call(this,e)).catalogs=Array(),t.state={catalogs:[],showSearchAlert:!1},t}return Object(s.a)(r,[{key:"ionViewWillEnter",value:function(){this.fetchData(this.props.match.params.path)}},{key:"fetchData",value:function(){var t=Object(i.a)(o.a.mark((function t(n){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.catalogs=new Array,null!=this.props.match.params.path){t.next=5;break}this.catalogs=this.getTopCatalogs(),t.next=10;break;case 5:return t.next=7,k.a.get(E+n,{responseType:"arraybuffer"});case 7:a=t.sent,r=JSON.parse(new e(a.data).toString()),this.catalogs=r.results;case 10:return this.setState({catalogs:this.catalogs}),t.abrupt("return",!0);case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTopCatalogs",value:function(){var e=Array();return Object.keys(b.a.topCatalogs).forEach((function(t){var n={n:t,nodeType:null,work:null,label:b.a.topCatalogs[t],file:null};e.push(n)})),e}},{key:"addBookmarkHandler",value:function(){var e;this.props.dispatch({type:"ADD_BOOKMARK",bookmark:new v.a({type:v.b.CATALOG,uuid:this.props.match.params.path,selectedText:(null===(e=this.props.location)||void 0===e?void 0:e.state).label||this.props.match.params.path,fileName:"",work:null})})}},{key:"delBookmarkHandler",value:function(){this.props.dispatch({type:"DEL_BOOKMARK",uuid:this.props.match.params.path})}},{key:"getRows",value:function(){var e=this,t=Array();return this.state.catalogs.forEach((function(n,a){var r="";r=null==n.work?"/catalog/".concat(n.n):"/catalog/work/".concat(n.work),t.push(h.a.createElement(m.h,{key:"".concat(n.n,"item")+a,button:!0,onClick:function(){var t=Object(i.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.props.history.push({pathname:r,state:{label:n.label}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h.a.createElement(m.i,{style:{fontSize:e.props.listFontSize},key:"".concat(n.n,"label")+a},n.label)))})),t}},{key:"render",value:function(){var e=this,t=this.getRows();return h.a.createElement(m.k,null,h.a.createElement(m.f,null,h.a.createElement(m.s,null,h.a.createElement(m.r,null,"\u76ee\u9304"),h.a.createElement(m.d,{hidden:this.isTopCatalog,fill:"clear",slot:"start"},h.a.createElement(m.c,{icon:y.a})),h.a.createElement(m.d,{hidden:this.isTopCatalog,fill:"clear",color:this.hasBookmark?"warning":"primary",slot:"end",onClick:function(t){return e.hasBookmark?e.delBookmarkHandler():e.addBookmarkHandler()}},h.a.createElement(m.g,{icon:y.d,slot:"icon-only"})),h.a.createElement(m.d,{hidden:this.isTopCatalog,fill:"clear",slot:"end",onClick:function(t){return e.props.history.push("/".concat(e.props.match.params.tab))}},h.a.createElement(m.g,{icon:y.l,slot:"icon-only"})),h.a.createElement(m.d,{fill:"clear",slot:"end",onClick:function(t){return e.setState({showSearchAlert:!0})}},h.a.createElement(m.g,{icon:y.q,slot:"icon-only"})))),h.a.createElement(m.e,null,h.a.createElement(m.j,null,t),h.a.createElement(g.a,Object(a.a)({showSearchAlert:this.state.showSearchAlert,searchCancel:function(){e.setState({showSearchAlert:!1})},searchOk:function(t){e.props.history.push("/catalog/search/".concat(t)),e.setState({showSearchAlert:!1})}},this.props))))}},{key:"isTopCatalog",get:function(){return null==this.props.match.params.path}},{key:"hasBookmark",get:function(){var e,t=this;return null!=(null===(e=this.props.bookmarks)||void 0===e?void 0:e.find((function(e){return e.type===v.b.CATALOG&&e.uuid===t.props.match.params.path})))}}]),r}(h.a.Component),j=Object(m.B)(w);t.a=Object(f.b)((function(e){return{bookmarks:e.settings.bookmarks,listFontSize:e.settings.listFontSize}}))(j)}).call(this,n(43).Buffer)},56:function(e,t,n){"use strict";(function(e){var a=n(5),r=n.n(a),o=n(12),i=n(3),c=n(4),s=n(7),l=n(8),u=n(0),p=n.n(u),h=n(1),m=n(18),f=n(28),d=n.n(f),k=n(15),b="".concat(k.a.cbetaApiUrl,"/toc?q="),v=function(t){Object(s.a)(a,t);var n=Object(l.a)(a);function a(e){var t;return Object(i.a)(this,a),(t=n.call(this,e)).state={searches:[]},t}return Object(c.a)(a,[{key:"ionViewWillEnter",value:function(){this.search(this.props.match.params.keyword)}},{key:"search",value:function(){var t=Object(o.a)(r.a.mark((function t(n){var a,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(b+n,{responseType:"arraybuffer"});case 3:return a=t.sent,o=JSON.parse(new e(a.data).toString()),i=o.results,this.setState({searches:i}),t.abrupt("return",!0);case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,this,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getRows",value:function(){var e=this,t=Array();return this.state.searches.forEach((function(n,a){var i="catalog"===n.type,c=i?n.label:"".concat(n.title,"\n\u4f5c\u8005:").concat(n.creators),s="/".concat(e.props.match.params.tab)+(i?"/".concat(n.n):"/work/".concat(n.work));t.push(p.a.createElement(h.h,{key:"searchItem_"+a,button:!0,onClick:function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.props.history.push({pathname:s,state:{label:n.label}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p.a.createElement(h.i,{style:{fontSize:e.props.listFontSize},key:"searchLabel_"+a},c)))})),t}},{key:"render",value:function(){var e=this.getRows();return p.a.createElement(h.k,null,p.a.createElement(h.f,null,p.a.createElement(h.s,null,p.a.createElement(h.r,null,"\u641c\u5c0b - ",this.props.match.params.keyword))),p.a.createElement(h.e,null,p.a.createElement(h.j,null,e)))}}]),a}(p.a.Component),y=Object(h.B)(v);t.a=Object(m.b)((function(e){return{listFontSize:e.settings.listFontSize}}))(y)}).call(this,n(43).Buffer)},75:function(e,t,n){},78:function(e,t,n){"use strict";var a=n(3),r=n(4),o=n(7),i=n(8),c=n(0),s=n.n(c),l=n(1),u=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={showSearchAlert:!1},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement(l.a,{isOpen:this.props.showSearchAlert,header:"\u641c\u5c0b\u7d93\u6587",subHeader:"\u8f38\u5165\u641c\u5c0b",inputs:[{name:"name0",type:"search",placeholder:"\u4f8b:\u91d1\u525b\u822c\u82e5"}],buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){return e.props.searchCancel()}},{text:"\u78ba\u5b9a",cssClass:"primary",handler:function(t){e.props.searchOk(t.name0)}}]})}}]),n}(s.a.Component);t.a=u},79:function(e,t,n){"use strict";(function(e){var a=n(5),r=n.n(a),o=n(12),i=n(3),c=n(4),s=n(7),l=n(8),u=n(0),p=n.n(u),h=n(1),m=n(18),f=n(28),d=n.n(f),k=(n(75),n(15)),b=n(9),v=n(17),y="".concat(k.a.cbetaApiUrl,"/works?work="),g=function(t){Object(s.a)(a,t);var n=Object(l.a)(a);function a(e){var t;return Object(i.a)(this,a),(t=n.call(this,e)).state={work:null},t}return Object(c.a)(a,[{key:"ionViewWillEnter",value:function(){this.fetchWork(this.props.match.params.path)}},{key:"fetchWork",value:function(){var t=Object(o.a)(r.a.mark((function t(n){var a,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get(y+n,{responseType:"arraybuffer"});case 2:return a=t.sent,o=JSON.parse(new e(a.data).toString()),i=o.results,this.setState({work:i[0]}),t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"addBookmarkHandler",value:function(){this.props.dispatch({type:"ADD_BOOKMARK",bookmark:new v.a({type:v.b.WORK,uuid:this.props.match.params.path,selectedText:this.props.location.state.label||this.props.match.params.path,fileName:"",work:null})})}},{key:"delBookmarkHandler",value:function(){this.props.dispatch({type:"DEL_BOOKMARK",uuid:this.props.match.params.path})}},{key:"getRows",value:function(){for(var e=this,t=this.state.work,n=Array(),a=t.juan_list.split(","),i=function(i){var c="/catalog/webview/".concat(t.work,"/").concat(a[i]);n.push(p.a.createElement(h.h,{key:"juanItem"+i,button:!0,onClick:function(){var n=Object(o.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a.preventDefault(),e.props.history.push({pathname:c,state:{label:t.title}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},p.a.createElement(h.i,{style:{fontSize:e.props.listFontSize},key:"juanLabel"+i},"\u5377",a[i])))},c=0;c<a.length;c++)i(c);return n}},{key:"render",value:function(){var e=this;if(null==this.state.work)return p.a.createElement(h.k,null);var t=this.getRows();return p.a.createElement(h.k,null,p.a.createElement(h.f,null,p.a.createElement(h.s,null,p.a.createElement(h.r,null,this.state.work.title),p.a.createElement(h.d,{fill:"clear",slot:"start"},p.a.createElement(h.c,{icon:b.a})),p.a.createElement(h.d,{fill:"clear",color:this.hasBookmark?"warning":"primary",slot:"end",onClick:function(t){return e.hasBookmark?e.delBookmarkHandler():e.addBookmarkHandler()}},p.a.createElement(h.g,{icon:b.d,slot:"icon-only"})),p.a.createElement(h.d,{fill:"clear",slot:"end",onClick:function(t){return e.props.history.push("/".concat(e.props.match.params.tab))}},p.a.createElement(h.g,{icon:b.l,slot:"icon-only"})),p.a.createElement(h.d,{fill:"clear",slot:"end",onClick:function(t){return e.setState({showSearchAlert:!0})}},p.a.createElement(h.g,{icon:b.q,slot:"icon-only"})))),p.a.createElement(h.e,null,p.a.createElement(h.j,null,t)))}},{key:"hasBookmark",get:function(){var e=this;return null!=this.props.bookmarks.find((function(t){return t.type===v.b.WORK&&t.uuid===e.props.match.params.path}))}}]),a}(p.a.Component),E=Object(h.B)(g);t.a=Object(m.b)((function(e){return{bookmarks:e.settings.bookmarks,listFontSize:e.settings.listFontSize}}))(E)}).call(this,n(43).Buffer)},80:function(e,t,n){"use strict";(function(e){var a=n(5),r=n.n(a),o=n(12),i=n(3),c=n(4),s=n(7),l=n(8),u=n(0),p=n.n(u),h=n(1),m=n(18),f=n(155),d=n(28),k=n.n(d),b=(n(141),n(15)),v=n(9),y=n(17),g=n(81);var E="".concat(b.a.cbetaApiUrl,"/juans?edition=CBETA"),w=function(t){Object(s.a)(a,t);var n=Object(l.a)(a);function a(e){var t;return Object(i.a)(this,a),(t=n.call(this,e)).state={htmlStr:null},t}return Object(c.a)(a,[{key:"ionViewWillEnter",value:function(){this.fetchData(this.props.match.params.path)}},{key:"ionViewDidEnter",value:function(){!function(e){var t;console.log("Bookmark uuid: bookmark_"+e),null===(t=document.getElementById("bookmark_"+e))||void 0===t||t.scrollIntoView()}(this.props.location.state?this.props.location.state.uuid:"")}},{key:"fetchData",value:function(){var t=Object(o.a)(r.a.mark((function t(n){var a,o,i,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="",null===this.props.location.state.uuid){t.next=5;break}a=localStorage.getItem(null===(o=this.bookmark)||void 0===o?void 0:o.fileName),t.next=10;break;case 5:return t.next=7,k.a.get("".concat(E,"&work=").concat(this.props.match.params.work,"&juan=").concat(n),{responseType:"arraybuffer"});case 7:i=t.sent,c=JSON.parse(new e(i.data).toString()),a=c.results[0];case 10:return this.setState({htmlStr:a}),t.abrupt("return",!0);case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"addBookmarkHandler",value:function(){var e,t=f.a();if(window.getSelection&&(e=window.getSelection()).rangeCount){var n;e.getRangeAt(0).startContainer.parentElement.id="bookmark_"+t;var a=null===(n=document.getElementById("cbetarWebView"))||void 0===n?void 0:n.innerHTML;return this.props.dispatch({type:"ADD_BOOKMARK",htmlStr:a,bookmark:new y.a({type:y.b.JUAN,uuid:t,selectedText:e.toString(),fileName:"".concat(this.props.match.params.work,"_juan").concat(this.props.match.params.path,".html"),work:new g.a({juan:this.props.match.params.path,title:this.props.location.state.label,work:this.props.match.params.work})})}),void(this.props.location.state.uuid=t)}}},{key:"delBookmarkHandler",value:function(){var e,t=this.props.location.state.uuid,n=document.getElementById("bookmark_"+t);n&&(n.id="",this.props.dispatch({type:"DEL_BOOKMARK",uuid:t,fileName:null===(e=this.bookmark)||void 0===e?void 0:e.fileName}))}},{key:"render",value:function(){var e=this;return p.a.createElement(h.k,null,p.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n      .t, p { font-size: ".concat(this.props.fontSize,"px }\n    ")}}),p.a.createElement(h.f,null,p.a.createElement(h.s,null,p.a.createElement(h.r,null,this.props.workTitle),"            ",p.a.createElement(h.d,{fill:"clear",slot:"start"},p.a.createElement(h.c,{icon:v.a})),p.a.createElement(h.d,{fill:"clear",color:this.hasBookmark?"warning":"primary",slot:"end",onClick:function(t){return e.hasBookmark?e.delBookmarkHandler():e.addBookmarkHandler()}},p.a.createElement(h.g,{icon:v.d,slot:"icon-only"})),p.a.createElement(h.d,{fill:"clear",slot:"end",onClick:function(t){return e.props.history.push("/".concat(e.props.match.params.tab))}},p.a.createElement(h.g,{icon:v.l,slot:"icon-only"})),p.a.createElement(h.d,{fill:"clear",slot:"end",onClick:function(t){return e.setState({showSearchAlert:!0})}},p.a.createElement(h.g,{icon:v.q,slot:"icon-only"})))),p.a.createElement(h.e,null,p.a.createElement("div",{id:"cbetarWebView",style:{userSelect:"text"},dangerouslySetInnerHTML:{__html:this.state.htmlStr}})))}},{key:"bookmark",get:function(){var e=this;return this.props.bookmarks.find((function(t){return t.type===y.b.JUAN&&t.uuid===e.props.location.state.uuid}))}},{key:"hasBookmark",get:function(){return null!=this.bookmark}}]),a}(p.a.Component),j=Object(h.B)(w);t.a=Object(m.b)((function(e){return{bookmarks:e.settings.bookmarks,fontSize:e.settings.fontSize,settings:e.settings}}))(j)}).call(this,n(43).Buffer)},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),r=function e(t){Object(a.a)(this,e),this.title=void 0,this.juan=void 0,this.juan_list=void 0,this.work=void 0,this.title=t.title,this.juan=t.juan,this.juan_list=t.juan_list,this.work=t.work}},82:function(e){e.exports=JSON.parse('{"name":"cbetar-2","version":"1.0.0","private":true,"dependencies":{"@capacitor-community/electron":"^1.2.3","@capacitor/android":"^2.4.0","@capacitor/core":"2.4.0","@ionic/react":"^5.0.7","@ionic/react-router":"^5.0.7","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.4.0","@testing-library/user-event":"^8.0.3","@types/jest":"^24.0.25","@types/node":"^12.12.24","@types/react":"^16.9.17","@types/react-dom":"^16.9.4","@types/react-router":"^5.1.4","@types/react-router-dom":"^5.1.3","axios":"^0.19.2","ionicons":"^5.0.0","react":"^16.13.0","react-dom":"^16.13.0","react-redux":"^7.2.1","react-router":"^5.1.2","react-router-dom":"^5.1.2","react-scripts":"3.4.1","redux":"^4.0.5","typescript":"3.8.3","uuid":"^8.3.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","android":"npx cap open android","sync":"npx cap sync android"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@capacitor/cli":"2.4.0","@types/react-redux":"^7.1.9","@types/uuid":"^8.3.0","electron-packager":"^15.0.0"},"description":"An Ionic project"}')},87:function(e,t,n){e.exports=n(154)},93:function(e,t,n){var a={"./ion-action-sheet.entry.js":[157,5],"./ion-alert.entry.js":[158,6],"./ion-app_8.entry.js":[159,7],"./ion-avatar_3.entry.js":[160,18],"./ion-back-button.entry.js":[161,19],"./ion-backdrop.entry.js":[162,43],"./ion-button_2.entry.js":[163,20],"./ion-card_5.entry.js":[164,21],"./ion-checkbox.entry.js":[165,22],"./ion-chip.entry.js":[166,23],"./ion-col_3.entry.js":[167,44],"./ion-datetime_3.entry.js":[168,10],"./ion-fab_3.entry.js":[169,24],"./ion-img.entry.js":[170,45],"./ion-infinite-scroll_2.entry.js":[171,46],"./ion-input.entry.js":[172,25],"./ion-item-option_3.entry.js":[173,26],"./ion-item_8.entry.js":[174,27],"./ion-loading.entry.js":[175,28],"./ion-menu_3.entry.js":[176,29],"./ion-modal.entry.js":[177,8],"./ion-nav_2.entry.js":[178,15],"./ion-popover.entry.js":[179,9],"./ion-progress-bar.entry.js":[180,30],"./ion-radio_2.entry.js":[181,31],"./ion-range.entry.js":[182,32],"./ion-refresher_2.entry.js":[183,11],"./ion-reorder_2.entry.js":[184,17],"./ion-ripple-effect.entry.js":[185,47],"./ion-route_4.entry.js":[186,33],"./ion-searchbar.entry.js":[187,34],"./ion-segment_2.entry.js":[188,35],"./ion-select_3.entry.js":[189,36],"./ion-slide_2.entry.js":[190,48],"./ion-spinner.entry.js":[191,13],"./ion-split-pane.entry.js":[192,49],"./ion-tab-bar_2.entry.js":[193,37],"./ion-tab_2.entry.js":[194,16],"./ion-text.entry.js":[195,38],"./ion-textarea.entry.js":[196,39],"./ion-toast.entry.js":[197,40],"./ion-toggle.entry.js":[198,12],"./ion-virtual-scroll.entry.js":[199,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=93,e.exports=r}},[[87,3,4]]]);
//# sourceMappingURL=main.d52cf5f9.chunk.js.map