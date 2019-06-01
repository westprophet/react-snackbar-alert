(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(157),c=t(170);t(158);function s(){var e=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement(c.SnackbarManager,{ref:e,pauseOnHover:!0}),r.a.createElement("main",null,r.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}var i=t(209),o=t.n(i),u=t(159);function m(){return r.a.createElement(l.a,{title:"Pause on Hover"},r.a.createElement("p",null,"Pause on Hover will pause a snackbar's timeout when the mouse is hovered over it. This is disabled by default. It can be enabled in one of two ways:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Setting the ",r.a.createElement("code",null,"pauseOnHover")," prop on the ",r.a.createElement("code",null,"SnackbarManager")," for all snackbars"),r.a.createElement("li",null,"Setting the ",r.a.createElement("code",null,"pauseOnHover")," property on the passed snackbar object for a specific snackbar")),r.a.createElement(s,null),r.a.createElement(u.a,{src:o.a}))}t.d(a,"default",function(){return m})},155:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},156:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},157:function(e,a,t){"use strict";var n=t(161),r=t.n(n),l=(t(162),t(163),t(0)),c=t.n(l),s=t(164),i=t(165),o=t.n(i);function u(){return c.a.createElement("footer",{id:o.a.footer},"Created with 💙 by ",c.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var m=t(166),E=t.n(m);function v(){return c.a.createElement("header",{id:E.a.header},c.a.createElement("h1",null,"🍫 React Snackbar Alert"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),c.a.createElement("div",null,c.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var p=t(4),d=t.n(p),b=t(33),f=t.n(b);t(155),c.a.createContext({});d.a.object,d.a.string.isRequired,d.a.func,d.a.func;var g=t(167),h=t.n(g);function k(){return c.a.createElement("nav",{id:h.a.sidebar},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.a,{to:"/",activeClassName:h.a.active},"Home")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/gettingStarted/",activeClassName:h.a.active},"Getting Started")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/api/",activeClassName:h.a.active},"API"))),c.a.createElement("h2",null,"Examples"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/base/",activeClassName:h.a.active},"Base")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/pauseOnHover/",activeClassName:h.a.active},"Pause on Hover")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/noProgressBar/",activeClassName:h.a.active},"No Progress Bar")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/dismissable/",activeClassName:h.a.active},"Dismissable")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/sticky/",activeClassName:h.a.active},"Sticky")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customTimeout/",activeClassName:h.a.active},"Custom Timeout")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customAnimationTimeout/",activeClassName:h.a.active},"Custom Animation Timeout")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customComponent/",activeClassName:h.a.active},"Custom Snackbar Component")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customChildComponent/",activeClassName:h.a.active},"Extending Snackbar Component")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customComponentData/",activeClassName:h.a.active},"Custom Component Data"))))}var C=t(168),S=t.n(C);t(158),t(169);function x(e){var a=e.children,t=e.title;return Object(l.useEffect)(function(){r.a.highlightAll()}),c.a.createElement("div",null,c.a.createElement(s.Helmet,null,c.a.createElement("title",null,t?t+" |":""," React Snackbar Alert")),c.a.createElement(v,null),c.a.createElement("div",{id:S.a.body},c.a.createElement(k,null),c.a.createElement("main",{id:S.a.main},c.a.createElement("div",{id:S.a.contentContainer},c.a.createElement("h1",null,t),a),c.a.createElement(u,null))))}t.d(a,"a",function(){return x})},159:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var n=t(160),r=t.n(n),l=t(0),c=t.n(l);function s(e){var a=e.src,t=e.language;return c.a.createElement("pre",null,c.a.createElement("code",{className:"language-"+t,dangerouslySetInnerHTML:{__html:r()(a)}}))}s.defaultProps={language:"jsx"}},160:function(e,a,t){"use strict";var n=/["'&<>]/;e.exports=function(e){var a,t=""+e,r=n.exec(t);if(!r)return t;var l="",c=0,s=0;for(c=r.index;c<t.length;c++){switch(t.charCodeAt(c)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 39:a="&#39;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}s!==c&&(l+=t.substring(s,c)),s=c+1,l+=a}return s!==c?l+t.substring(s,c):l}},209:function(e,a){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nexport default function PauseOnHoverExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} pauseOnHover={true} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-pause-on-hover-js-e32d36b050d419ed16bc.js.map