(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return o});var n=t(0),r=t.n(n),l=t(156),c=t(171),i=t(172),s=t.n(i),m=t(158);function o(){return r.a.createElement(l.a,{title:"Base"},r.a.createElement("p",null,"The default timeout is 3 seconds."),r.a.createElement(c.a,null),r.a.createElement(m.a,{src:s.a}))}},154:function(e,a,t){var n;e.exports=(n=t(155))&&n.default||n},155:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(55),s=t(2),m=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},156:function(e,a,t){"use strict";var n=t(160),r=t.n(n),l=(t(161),t(162),t(0)),c=t.n(l),i=t(163),s=t(164),m=t.n(s);function o(){return c.a.createElement("footer",{id:m.a.footer},"Created with 💙 by ",c.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var u=t(165),E=t.n(u);function d(){return c.a.createElement("header",{id:E.a.header},c.a.createElement("h1",null,"🍫 React Snackbar Alert"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),c.a.createElement("div",null,c.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var v=t(4),f=t.n(v),p=t(33),b=t.n(p);t(154),c.a.createContext({});f.a.object,f.a.string.isRequired,f.a.func,f.a.func;var g=t(166),h=t.n(g);function k(){return c.a.createElement("nav",{id:h.a.sidebar},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(b.a,{to:"/",activeClassName:h.a.active},"Home")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/gettingStarted/",activeClassName:h.a.active},"Getting Started")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/api/",activeClassName:h.a.active},"API"))),c.a.createElement("h2",null,"Examples"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/base/",activeClassName:h.a.active},"Base")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/noProgressBar/",activeClassName:h.a.active},"No Progress Bar")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/dismissable/",activeClassName:h.a.active},"Dismissable")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/sticky/",activeClassName:h.a.active},"Sticky")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/customTimeout/",activeClassName:h.a.active},"Custom Timeout")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/customAnimationTimeout/",activeClassName:h.a.active},"Custom Animation Timeout")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/customComponent/",activeClassName:h.a.active},"Custom Snackbar Component")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/customChildComponent/",activeClassName:h.a.active},"Extending Snackbar Component")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/examples/customComponentData/",activeClassName:h.a.active},"Custom Component Data"))))}var C=t(167),x=t.n(C);t(157),t(168);function S(e){var a=e.children,t=e.title;return Object(l.useEffect)(function(){r.a.highlightAll()}),c.a.createElement("div",null,c.a.createElement(i.Helmet,null,c.a.createElement("title",null,t?t+" |":""," React Snackbar Alert")),c.a.createElement(d,null),c.a.createElement("div",{id:x.a.body},c.a.createElement(k,null),c.a.createElement("main",{id:x.a.main},c.a.createElement("div",{id:x.a.contentContainer},c.a.createElement("h1",null,t),a),c.a.createElement(o,null))))}t.d(a,"a",function(){return S})},158:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(159),r=t.n(n),l=t(0),c=t.n(l);function i(e){var a=e.src,t=e.language;return c.a.createElement("pre",null,c.a.createElement("code",{className:"language-"+t,dangerouslySetInnerHTML:{__html:r()(a)}}))}i.defaultProps={language:"jsx"}},159:function(e,a,t){"use strict";var n=/["'&<>]/;e.exports=function(e){var a,t=""+e,r=n.exec(t);if(!r)return t;var l="",c=0,i=0;for(c=r.index;c<t.length;c++){switch(t.charCodeAt(c)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 39:a="&#39;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}i!==c&&(l+=t.substring(i,c)),i=c+1,l+=a}return i!==c?l+t.substring(i,c):l}},171:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(0),r=t.n(n),l=t(169);t(157);function c(){var e=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement(l.SnackbarManager,{ref:e}),r.a.createElement("main",null,r.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}},172:function(e,a){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nexport default function BaseExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-base-js-f9bdd6e4e6e410aa533c.js.map