(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{153:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(157),c=t(170);t(158);function s(){var e=Object(n.useRef)(null);return l.a.createElement("div",null,l.a.createElement(c.SnackbarManager,{ref:e,dismissable:!0}),l.a.createElement("main",null,l.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}var i=t(207),m=t.n(i),o=t(159);function u(){return l.a.createElement(r.a,{title:"Dismissable"},l.a.createElement("p",null,"Snackbar notifications will automatically disappear after the timeout has passed. They can also, however, be configured so that they can be manually dismissed before the timeout passes. This can be done in one of two ways:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Setting the ",l.a.createElement("code",null,"dismissable")," prop on the ",l.a.createElement("code",null,"SnackbarManager")," (to make all snackbars dismissable)"),l.a.createElement("li",null,"Setting the ",l.a.createElement("code",null,"dismissable")," property on the passed snackbar object (to make only that snackbar dismissable)")),l.a.createElement(s,null),l.a.createElement(o.a,{src:m.a}))}t.d(a,"default",function(){return u})},155:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},156:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},157:function(e,a,t){"use strict";var n=t(161),l=t.n(n),r=(t(162),t(163),t(0)),c=t.n(r),s=t(164),i=t(165),m=t.n(i);function o(){return c.a.createElement("footer",{id:m.a.footer},"Created with 💙 by ",c.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var u=t(166),E=t.n(u);function d(){return c.a.createElement("header",{id:E.a.header},c.a.createElement("h1",null,"🍫 React Snackbar Alert"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),c.a.createElement("div",null,c.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var b=t(4),p=t.n(b),v=t(33),f=t.n(v);t(155),c.a.createContext({});p.a.object,p.a.string.isRequired,p.a.func,p.a.func;var h=t(167),g=t.n(h);function k(){return c.a.createElement("nav",{id:g.a.sidebar},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.a,{to:"/",activeClassName:g.a.active},"Home")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/gettingStarted/",activeClassName:g.a.active},"Getting Started")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/api/",activeClassName:g.a.active},"API"))),c.a.createElement("h2",null,"Examples"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/base/",activeClassName:g.a.active},"Base")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/pauseOnHover/",activeClassName:g.a.active},"Pause on Hover")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/noProgressBar/",activeClassName:g.a.active},"No Progress Bar")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/dismissable/",activeClassName:g.a.active},"Dismissable")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/sticky/",activeClassName:g.a.active},"Sticky")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customTimeout/",activeClassName:g.a.active},"Custom Timeout")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customAnimationTimeout/",activeClassName:g.a.active},"Custom Animation Timeout")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customComponent/",activeClassName:g.a.active},"Custom Snackbar Component")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customChildComponent/",activeClassName:g.a.active},"Extending Snackbar Component")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customComponentData/",activeClassName:g.a.active},"Custom Component Data"))))}var C=t(168),S=t.n(C);t(158),t(169);function x(e){var a=e.children,t=e.title;return Object(r.useEffect)(function(){l.a.highlightAll()}),c.a.createElement("div",null,c.a.createElement(s.Helmet,null,c.a.createElement("title",null,t?t+" |":""," React Snackbar Alert")),c.a.createElement(d,null),c.a.createElement("div",{id:S.a.body},c.a.createElement(k,null),c.a.createElement("main",{id:S.a.main},c.a.createElement("div",{id:S.a.contentContainer},c.a.createElement("h1",null,t),a),c.a.createElement(o,null))))}t.d(a,"a",function(){return x})},159:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var n=t(160),l=t.n(n),r=t(0),c=t.n(r);function s(e){var a=e.src,t=e.language;return c.a.createElement("pre",null,c.a.createElement("code",{className:"language-"+t,dangerouslySetInnerHTML:{__html:l()(a)}}))}s.defaultProps={language:"jsx"}},160:function(e,a,t){"use strict";var n=/["'&<>]/;e.exports=function(e){var a,t=""+e,l=n.exec(t);if(!l)return t;var r="",c=0,s=0;for(c=l.index;c<t.length;c++){switch(t.charCodeAt(c)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 39:a="&#39;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}s!==c&&(r+=t.substring(s,c)),s=c+1,r+=a}return s!==c?r+t.substring(s,c):r}},207:function(e,a){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nexport default function DismissableExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} dismissable={true} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-dismissable-js-60837c82e136ea743c03.js.map