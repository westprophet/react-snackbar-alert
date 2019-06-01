(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(187),i=a(228),s=a.n(i),c=a(229),l=a.n(c),u=a(162);a(161);function m(e){return r.a.createElement(u.Snackbar,e,r.a.createElement("h2",{style:{margin:0}},e.message))}function f(){var e=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement(u.SnackbarManager,{ref:e,component:m}),r.a.createElement("main",null,r.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}var p=a(169),d=a(160);function b(){return r.a.createElement(d.a,{title:"Extending the Snackbar Component"},r.a.createElement("p",null,"You can also extend the default ",r.a.createElement("code",null,"Snackbar")," component. This allows you to keep the default styling and animation, but also add your own child content to the snackbar."),r.a.createElement("p",null,"To extend the default component, import the ",r.a.createElement("code",null,"Snackbar")," component and use it in your custom component. Make sure to pass all received props along to the ",r.a.createElement("code",null,"Snackbar")," component, or else the animations won't work."),r.a.createElement(f,null),r.a.createElement(o.d,{forceRenderTabPanel:!0},r.a.createElement(o.b,null,r.a.createElement(o.a,null,"CustomChildComponentExample.js"),r.a.createElement(o.a,null,"CustomSnackbarComponent.js")),r.a.createElement(o.c,null,r.a.createElement(p.a,{src:s.a})),r.a.createElement(o.c,null,r.a.createElement(p.a,{src:l.a}))))}a.d(t,"default",function(){return b})},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},156:function(e,t,a){"use strict";a(163),a(164),a(165),a(166),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(158)),r=o(a(157));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  animation-duration: ","ms;\n"]);return m=function(){return e},e}var f=o(a(167)).default.div(m(),function(e){return e.timeout}),p=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=c(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?l(n):r).state={animationPaused:!1},a.pause=a.pause.bind(l(a)),a.resume=a.resume.bind(l(a)),a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r["default"].Component),a=t,(n=[{key:"pause",value:function(){this.props.pauseOnHover&&(this.setState({animationPaused:!0}),this.props.onPause())}},{key:"resume",value:function(){this.props.pauseOnHover&&(this.setState({animationPaused:!1}),this.props.onResume())}},{key:"render",value:function(){var e=this.props,t=e.timeout,a=e.children,n=e.dismissable,o=e.message,i=e.onDismiss,s=e.sticky,c=e.progressBar,l="react-snackbar-alert__snackbar";return n&&(l+=" react-snackbar-alert__dismissable"),r.default.createElement("div",{className:l,onMouseEnter:this.pause,onMouseLeave:this.resume},r.default.createElement("div",{className:"react-snackbar-alert__snackbar-main"},r.default.createElement("div",{className:"react-snackbar-alert__snackbar-content"},a||o),n?r.default.createElement("button",{onClick:i,className:"react-snackbar-alert__snackbar-close"},"×"):null),!s&&c?r.default.createElement(f,{timeout:t,className:"react-snackbar-alert__snackbar-progress-bar",style:{animationPlayState:this.state.animationPaused?"paused":"running"}}):null)}}])&&s(a.prototype,n),o&&s(a,o),t}();t.default=p,p.defaultProps={progressBar:!0},p.propTypes={children:n.default.node,pauseOnHover:n.default.bool,onPause:n.default.func,onResume:n.default.func,timeout:n.default.number,dismissable:n.default.bool,message:n.default.string,onDismiss:n.default.func,sticky:n.default.bool,progressBar:n.default.bool}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},160:function(e,t,a){"use strict";var n=a(171),r=a.n(n),o=(a(172),a(173),a(0)),i=a.n(o),s=a(174),c=a(175),l=a.n(c);function u(){return i.a.createElement("footer",{id:l.a.footer},"Created with 💙 by ",i.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var m=a(176),f=a.n(m);function p(){return i.a.createElement("header",{id:f.a.header},i.a.createElement("h1",null,"🍫 React Snackbar Alert"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},i.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),i.a.createElement("div",null,i.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},i.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var d=a(4),b=a.n(d),v=a(33),y=a.n(v);a(155),i.a.createContext({});b.a.object,b.a.string.isRequired,b.a.func,b.a.func;var k=a(177),h=a.n(k);function E(){return i.a.createElement("nav",{id:h.a.sidebar},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(y.a,{to:"/",activeClassName:h.a.active},"Home")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/gettingStarted/",activeClassName:h.a.active},"Getting Started")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/api/",activeClassName:h.a.active},"API"))),i.a.createElement("h2",null,"Examples"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/base/",activeClassName:h.a.active},"Base")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/pauseOnHover/",activeClassName:h.a.active},"Pause on Hover")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/noProgressBar/",activeClassName:h.a.active},"No Progress Bar")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/dismissable/",activeClassName:h.a.active},"Dismissable")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/sticky/",activeClassName:h.a.active},"Sticky")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customTimeout/",activeClassName:h.a.active},"Custom Timeout")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customAnimationTimeout/",activeClassName:h.a.active},"Custom Animation Timeout")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customComponent/",activeClassName:h.a.active},"Custom Snackbar Component")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customChildComponent/",activeClassName:h.a.active},"Extending Snackbar Component")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customComponentData/",activeClassName:h.a.active},"Custom Component Data"))))}var g=a(178),S=a.n(g);a(161),a(179);function _(e){var t=e.children,a=e.title;return Object(o.useEffect)(function(){r.a.highlightAll()}),i.a.createElement("div",null,i.a.createElement(s.Helmet,null,i.a.createElement("title",null,a?a+" |":""," React Snackbar Alert")),i.a.createElement(p,null),i.a.createElement("div",{id:S.a.body},i.a.createElement(E,null),i.a.createElement("main",{id:S.a.main},i.a.createElement("div",{id:S.a.contentContainer},i.a.createElement("h1",null,a),t),i.a.createElement(u,null))))}a.d(t,"a",function(){return _})},162:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"SnackbarManager",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Snackbar",{enumerable:!0,get:function(){return r.default}});var n=o(a(168)),r=o(a(156));function o(e){return e&&e.__esModule?e:{default:e}}},168:function(e,t,a){"use strict";a(56),a(180),a(163),a(164),a(75),a(181),a(182),a(35),a(74),a(165),a(166),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(158)),r=l(a(157)),o=l(a(167)),i=a(184),s=l(a(183)),c=l(a(156));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  &.react-snackbar-alert__snackbar-container-enter {\n    opacity: 0;\n    transform: scaleY(0.1);\n  }\n\n  &.react-snackbar-alert__snackbar-container-enter-active {\n    opacity: 1;\n    transform: scaleY(1);\n    transition: all ","ms;\n  }\n\n  &.react-snackbar-alert__snackbar-container-exit {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n\n  &.react-snackbar-alert__snackbar-container-exit-active {\n    opacity: 0;\n    transform: scaleY(0.1);\n    transition: all ","ms;\n  }\n"]);return v=function(){return e},e}var y=o.default.div(v(),function(e){return e.animationTimeout},function(e){return e.animationTimeout}),k=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=p(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?d(n):r).timeouts={},a.startTimes={},a.paused={},a.state={notifications:[]},a.create=a.create.bind(d(a)),a.pause=a.pause.bind(d(a)),a.remove=a.remove.bind(d(a)),a.resume=a.resume.bind(d(a)),a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["default"].Component),a=t,(n=[{key:"create",value:function(e){var t=this;e.key=(0,s.default)(),void 0===e.timeout&&(e.timeout=this.props.timeout),this.setState({notifications:[].concat(m(this.state.notifications),[e])},function(){if(!e.sticky){t.startTimes[e.key]=Date.now();var a=setTimeout(function(){t.remove(e)},e.timeout);t.timeouts[e.key]=a}})}},{key:"remove",value:function(e){clearTimeout(this.timeouts[e.key]),this.setState({notifications:this.state.notifications.filter(function(t){return t!==e})}),delete this.timeouts[e.key],delete this.paused[e.key],delete this.startTimes[e.key]}},{key:"pause",value:function(e){if(!e.sticky){clearTimeout(this.timeouts[e.key]),delete this.timeouts[e.key];var t=(this.paused[e.key]||e.timeout)-(Date.now()-this.startTimes[e.key]);this.paused[e.key]=t}}},{key:"resume",value:function(e){var t=this;if(!e.sticky){var a=this.paused[e.key];this.startTimes[e.key]=Date.now();var n=setTimeout(function(){t.remove(e)},a);this.timeouts[e.key]=n}}},{key:"componentWillUnmount",value:function(){var e=this;Object.keys(this.timeouts).forEach(function(t){clearTimeout(e.timeouts[t])})}},{key:"render",value:function(){var e=this,t=this.props.component;return r.default.createElement("div",{className:"react-snackbar-alert__snackbar-manager"},r.default.createElement(i.TransitionGroup,null,this.state.notifications.map(function(a){return r.default.createElement(i.CSSTransition,{key:a.key,timeout:a.animationTimeout||e.props.animationTimeout,classNames:"react-snackbar-alert__snackbar-container"},r.default.createElement(y,{animationTimeout:a.animationTimeout||e.props.animationTimeout},r.default.createElement(t,{progressBar:void 0!==a.progressBar?a.progressBar:e.props.progressBar,sticky:a.sticky,timeout:a.timeout,dismissable:void 0!==a.dismissable?a.dismissable:e.props.dismissable,onDismiss:function(){return e.remove(a)},onPause:function(){return e.pause(a)},onResume:function(){return e.resume(a)},pauseOnHover:void 0!==a.pauseOnHover?a.pauseOnHover:e.props.pauseOnHover,message:a.message,data:a.data})))})))}}])&&f(a.prototype,n),o&&f(a,o),t}();t.default=k,k.defaultProps={animationTimeout:250,component:c.default,dismissable:!1,pauseOnHover:!1,progressBar:!0,timeout:3e3},k.propTypes={animationTimeout:n.default.number,component:n.default.elementType,dismissable:n.default.bool,pauseOnHover:n.default.bool,progressBar:n.default.bool,timeout:n.default.number}},169:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(170),r=a.n(n),o=a(0),i=a.n(o);function s(e){var t=e.src,a=e.language;return i.a.createElement("pre",null,i.a.createElement("code",{className:"language-"+a,dangerouslySetInnerHTML:{__html:r()(t)}}))}s.defaultProps={language:"jsx"}},228:function(e,t){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nimport CustomSnackbarComponent from './CustomSnackbarComponent';\n\nexport default function CustomComponentExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"},229:function(e,t){e.exports="import React from 'react';\nimport { Snackbar } from 'react-snackbar-alert';\n\nexport default function CustomSnackbarComponent(props) {\n  return (\n    <Snackbar {...props}>\n      <h2 style={{margin: 0}}>{props.message}</h2>\n    </Snackbar>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-custom-child-component-js-ef1190b9c89f608ef3dd.js.map