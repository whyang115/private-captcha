(this["webpackJsonpprviate-captcha"]=this["webpackJsonpprviate-captcha"]||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(24),r=a.n(i),s=(a(77),a(31)),o=(a(78),a(136)),l=a(135),d=a(44),m=a(42),u=a(62),w=a.n(u);var g=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),u=Object(s.a)(r,2),g=u[0],v=u[1],f=Object(n.useState)(!1),p=Object(s.a)(f,2),b=p[0],h=p[1],S=Object(n.useState)(""),E=Object(s.a)(S,2),O=E[0],j=E[1],k=Object(n.useState)(""),y=Object(s.a)(k,2),M=y[0],N=y[1];function C(){if(M){var e=Math.random().toString(16).slice(2);j(e),b||(h(!0),w.a.get(M,{params:{randstr:e,width:500,height:80,fontSize:50},responseType:"arraybuffer"}).then((function(e){i(e)})).finally((function(){h(!1)})))}}return window.getPara=function(e){N(e)},Object(n.useEffect)((function(){C()}),[M]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"title"},"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),c.a.createElement(o.a,{value:g,onChange:function(e){return v(e.target.value)}}),c.a.createElement("div",{className:"imgWrap",onClick:C},c.a.createElement("img",{alt:"captcha",src:a}),b&&c.a.createElement(l.a,{size:"large"})),c.a.createElement("div",{className:"text",onClick:C},"\u770b\u4e0d\u6e05\uff0c\u6362\u4e00\u5f20"),c.a.createElement("div",{className:"btns"},c.a.createElement(d.a,{onClick:function(){Object(m.get)(window,["webkit","messageHandlers","Save","postMessage"])?window.webkit.messageHandlers.Save.postMessage(""):window.Android.Save("")}},"\u53d6\u6d88"),c.a.createElement(d.a,{type:"primary",disabled:!g,onClick:function(){var e={ticket:g,randstr:O};Object(m.get)(window,["webkit","messageHandlers","Save","postMessage"])?window.webkit.messageHandlers.Save.postMessage(e):window.Android.Save(JSON.stringify(e))}},"\u786e\u8ba4")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(132)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.4ed8d564.chunk.js.map