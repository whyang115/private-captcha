(this["webpackJsonpprviate-captcha"]=this["webpackJsonpprviate-captcha"]||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),o=a.n(r),i=(a(77),a(34)),s=(a(78),a(136)),l=a(135),u=a(43),d=a(61),m=a(62),g=a.n(m);var p=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),p=m[0],v=m[1],f=Object(n.useState)(!1),w=Object(i.a)(f,2),b=w[0],h=w[1],E=Object(n.useState)(""),k=Object(i.a)(E,2),j=k[0],O=k[1];function y(){var e=Math.random().toString(16).slice(2);O(e),b||(h(!0),g.a.get("http://api.dev.mingdao.net/oauth2/genImageCaptcha",{params:{randstr:e},responseType:"arraybuffer"}).then((function(e){var t=e.data,a=new Blob([t],{type:"image/gif"}),n=new FileReader;n.onload=function(e){var t=e.target.result;r(t)},n.readAsDataURL(a)})).finally((function(){h(!1)})))}return Object(n.useEffect)((function(){y()}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"title"},"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),c.a.createElement(s.a,{value:p,onChange:function(e){return v(e.target.value)}}),c.a.createElement("div",{className:"imgWrap",onClick:y,style:{backgroundImage:"url(".concat(a,")")}},b&&c.a.createElement(l.a,{size:"large"})),c.a.createElement("div",{className:"text",onClick:y},"\u770b\u4e0d\u6e05\uff0c\u6362\u4e00\u5f20"),c.a.createElement("div",{className:"btns"},c.a.createElement(u.a,null,"\u53d6\u6d88"),c.a.createElement(u.a,{type:"primary",disabled:!p,onClick:function(){var e={ticket:p,randstr:j};window.sendContent=function(){Object(d.get)(window,["webkit","messageHandlers","Save","postMessage"])?window.webkit.messageHandlers.Save.postMessage(e):window.Android.Save(e)}}},"\u786e\u8ba4")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(132)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.92d5aedb.chunk.js.map