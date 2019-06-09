(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=a(204),s=a.n(c),o=a(162),m=a.n(o),u=a(176),p=a(171);function h(){var e=s()(["\n  margin: 0.5em;\n\n  h3 {\n    margin: 0;\n  }\n"]);return h=function(){return e},e}function E(){var e=s()(["\n  display: flex;\n"]);return E=function(){return e},e}var v=u.default.div(E()),d=u.default.div(h()),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={progressBar:!0,pauseOnHover:!1,sticky:!1,dismissable:!1,theme:"default",timeout:3e3,position:"bottom"},a}i()(t,e);var a=t.prototype;return a.checkboxStateUpdater=function(e){var t=this;return function(a){var n;t.setState(((n={})[e]=a.target.checked,n),function(){m.a.highlightAll()})}},a.numberStateUpdater=function(e){var t=this;return function(a){var n,l=parseInt(a.target.value,10);t.setState(((n={})[e]=l,n),function(){m.a.highlightAll()})}},a.selectStateUpdater=function(e){var t=this;return function(a){var n;t.setState(((n={})[e]=a.target.value,n),function(){m.a.highlightAll()})}},a.render=function(){return l.a.createElement(p.SnackbarProvider,{position:this.state.position},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(v,null,l.a.createElement(d,null,l.a.createElement("h3",null,"Snackbar Options"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"timeout"},"Timeout (ms):"),l.a.createElement("input",{id:"timeout",type:"number",value:this.state.timeout,onChange:this.numberStateUpdater("timeout")})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"theme"},"Theme:"),l.a.createElement("select",{id:"theme",value:this.state.theme,onChange:this.selectStateUpdater("theme")},l.a.createElement("option",{value:"default"},"Default"),l.a.createElement("option",{value:"info"},"Info"),l.a.createElement("option",{value:"success"},"Success"),l.a.createElement("option",{value:"warning"},"Warning"),l.a.createElement("option",{value:"error"},"Error"))),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"progress-bar",checked:this.state.progressBar,onChange:this.checkboxStateUpdater("progressBar")}),l.a.createElement("label",{htmlFor:"progress-bar"},"Progress Bar")),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"pause-on-hover",checked:this.state.pauseOnHover,onChange:this.checkboxStateUpdater("pauseOnHover")}),l.a.createElement("label",{htmlFor:"pause-on-hover"},"Pause on Hover")),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"sticky",checked:this.state.sticky,onChange:this.checkboxStateUpdater("sticky")}),l.a.createElement("label",{htmlFor:"sticky"},"Sticky")),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"dismissable",checked:this.state.dismissable,onChange:this.checkboxStateUpdater("dismissable")}),l.a.createElement("label",{htmlFor:"dismissable"},"Dismissable"))),l.a.createElement(d,null,l.a.createElement("h3",null,"Snackbar Manager Options"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"position"},"Position:"),l.a.createElement("select",{id:"position",value:this.state.position,onChange:this.selectStateUpdater("position")},l.a.createElement("option",{value:"top"},"Top"),l.a.createElement("option",{value:"top-left"},"Top Left"),l.a.createElement("option",{value:"top-right"},"Top Right"),l.a.createElement("option",{value:"bottom"},"Bottom"),l.a.createElement("option",{value:"bottom-left"},"Bottom Left"),l.a.createElement("option",{value:"bottom-right"},"Bottom Right"))))),l.a.createElement(g,{dismissable:this.state.dismissable,pauseOnHover:this.state.pauseOnHover,progressBar:this.state.progressBar,sticky:this.state.sticky,timeout:this.state.timeout,theme:this.state.theme}),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-jsx"},"\nimport React from 'react';\n\nimport { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';\n\nexport default function DemoExample() {\n  return (\n    <SnackbarProvider position=\""+this.state.position+"\">\n      <Container />\n    </SnackbarProvider>\n  );\n}\n\nconst Container = wrapComponent(function({ createSnackbar }) {\n  function showSnackbar() {\n    createSnackbar({\n      message: 'Hello Snackbar!',\n      dismissable: "+this.state.dismissable+",\n      pauseOnHover: "+this.state.pauseOnHover+",\n      progressBar: "+this.state.progressBar+",\n      sticky: "+this.state.sticky+",\n      theme: '"+this.state.theme+"',\n      timeout: "+this.state.timeout+"\n    });\n  }\n\n  return (\n    <div>\n      <button onClick={showSnackbar}>Show Snackbar</button>\n    </div>\n  );\n});\n\n          ")))))},t}(l.a.Component);var g=Object(p.wrapComponent)(function(e){var t=e.createSnackbar,a=e.dismissable,n=e.pauseOnHover,r=e.progressBar,i=e.sticky,c=e.theme,s=e.timeout;return l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){t({message:"Hello Snackbar!",progressBar:r,pauseOnHover:n,sticky:i,dismissable:a,theme:c,timeout:s})}},"Show Snackbar"))}),f=a(159);function k(){return l.a.createElement(f.a,null,l.a.createElement("h1",null,"Welcome"),l.a.createElement("p",null,"React Snackbar Alert is a very simple library for \"snackbar\" style notifications. It's a quick and lightweight way to let your users know what's going on in your app."),l.a.createElement("h1",null,"Demo"),l.a.createElement(b,null),l.a.createElement("h1",null,"Features"),l.a.createElement("ul",null,l.a.createElement("li",null,"Easy to use"),l.a.createElement("li",null,"Supported in all modern browsers (plus IE11)"),l.a.createElement("li",null,"Notifications can be restyled and extended"),l.a.createElement("li",null,"Arbitrary custom data can be specified to create rich, interactive notifications")),l.a.createElement("h1",null,"Requirements"),l.a.createElement("p",null,"React Snackbar Alert requires React 16.8 or newer. It also requires styled-components 4 to be installed."))}a.d(t,"default",function(){return k})},157:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},159:function(e,t,a){"use strict";var n=a(162),l=a.n(n),r=(a(163),a(164),a(0)),i=a.n(r),c=a(165),s=a(166),o=a.n(s);function m(){return i.a.createElement("footer",{id:o.a.footer},"Created with 💙 by ",i.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var u=a(167),p=a.n(u);function h(e){var t=e.onMenuToggle;return i.a.createElement("header",{id:p.a.header},i.a.createElement("h1",null,i.a.createElement("button",{id:p.a.menuButton,onClick:t},"☰")," ","🍫 React Snackbar Alert"),i.a.createElement("div",{id:p.a.headerLinks},i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},i.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),i.a.createElement("div",null,i.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},i.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"})))))}var E=a(4),v=a.n(E),d=a(33),b=a.n(d);a(157),i.a.createContext({});v.a.object,v.a.string.isRequired,v.a.func,v.a.func;var g=a(168),f=a.n(g);function k(e){var t=e.visible;return i.a.createElement("nav",{id:f.a.sidebar,className:t?f.a.open:f.a.closed},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(b.a,{to:"/",activeClassName:f.a.active},"Home")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/gettingStarted/",activeClassName:f.a.active},"Getting Started")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/api/",activeClassName:f.a.active},"API"))),i.a.createElement("h2",null,"Examples"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/base/",activeClassName:f.a.active},"Base")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/theme/",activeClassName:f.a.active},"Themes")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/position/",activeClassName:f.a.active},"Position")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/pauseOnHover/",activeClassName:f.a.active},"Pause on Hover")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/noProgressBar/",activeClassName:f.a.active},"No Progress Bar")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/dismissable/",activeClassName:f.a.active},"Dismissable")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/sticky/",activeClassName:f.a.active},"Sticky")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/customTimeout/",activeClassName:f.a.active},"Custom Timeout")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/customAnimationTimeout/",activeClassName:f.a.active},"Custom Animation Timeout")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/customComponent/",activeClassName:f.a.active},"Custom Snackbar Component")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/customChildComponent/",activeClassName:f.a.active},"Extending Snackbar Component")),i.a.createElement("li",null,i.a.createElement(b.a,{to:"/examples/customComponentData/",activeClassName:f.a.active},"Custom Component Data"))))}var C=a(169),S=a.n(C);a(170);function y(e){var t=e.children,a=e.title;Object(r.useEffect)(function(){l.a.highlightAll()});var n=Object(r.useState)(!1),s=n[0],o=n[1];return i.a.createElement("div",null,i.a.createElement(c.Helmet,null,i.a.createElement("title",null,a?a+" |":""," React Snackbar Alert"),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"})),i.a.createElement(h,{onMenuToggle:function(){return o(!s)}}),i.a.createElement("div",{id:S.a.body},i.a.createElement(k,{visible:s}),i.a.createElement("div",{id:S.a.main},i.a.createElement("div",{id:S.a.contentContainer},i.a.createElement("h1",null,a),t),i.a.createElement(m,null))))}a.d(t,"a",function(){return y})},204:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}}}]);
//# sourceMappingURL=component---src-pages-index-js-d4f62b29e69c8dd72797.js.map