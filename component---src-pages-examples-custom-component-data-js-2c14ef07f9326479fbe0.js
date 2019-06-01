(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(186),i=n(231),u=n.n(i),s=n(232),c=n.n(s),l=n(161);function m(e){return r.a.createElement(l.Snackbar,e,r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{margin:"0.5em",flexGrow:1}},e.message),r.a.createElement("button",{style:{marginRight:"0.5em"}},e.data.action)))}function f(){var e=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement(l.SnackbarManager,{ref:e,component:m}),r.a.createElement("main",null,r.a.createElement("button",{onClick:function(){e.current.create({data:{action:"Retry"},message:"⚠️ Connection Error"})}},"Show Snackbar")))}var p=n(168),d=n(160);function b(){return r.a.createElement(d.a,{title:"Passing Custom Data to a Custom Component"},r.a.createElement("p",null,"You can also create more rich snackbar notifications by passing arbitrary data that can be used when rendering a custom snackbar component."),r.a.createElement("p",null,"Simply pass a ",r.a.createElement("code",null,"data")," property in the snackbar object passed to ",r.a.createElement("code",null,"SnackbarManager.create"),", then reference the data attributes in your custom component's ",r.a.createElement("code",null,"render")," function."),r.a.createElement(f,null),r.a.createElement(o.d,{forceRenderTabPanel:!0},r.a.createElement(o.b,null,r.a.createElement(o.a,null,"CustomComponentDataExample.js"),r.a.createElement(o.a,null,"CustomSnackbarComponent.js")),r.a.createElement(o.c,null,r.a.createElement(p.a,{src:u.a})),r.a.createElement(o.c,null,r.a.createElement(p.a,{src:c.a}))))}n.d(t,"default",function(){return b})},155:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},156:function(e,t,n){"use strict";n(162),n(163),n(164),n(165),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(158)),r=i(n(157)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(166));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(){var e=h(["\n  animation-duration: ","ms;\n  align-self: flex-start;\n  width: calc(100% + 0.5em);\n  height: 0.25em;\n  background: rgba(255, 255, 255, 0.2);\n  position: relative;\n  top: 0.25em;\n  left: -0.25em;\n  border-bottom-left-radius: 5px;\n  animation: "," 3s linear;\n"]);return f=function(){return e},e}function p(){var e=h(["\n  background: transparent;\n  padding: 0;\n  font-size: 1.5em;\n  margin-top: -0.25em;\n  outline: none;\n  width: 1em;\n"]);return p=function(){return e},e}function d(){var e=h(["\n  flex-grow: 1;\n  margin-left: ",";\n"]);return d=function(){return e},e}function b(){var e=h(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]);return b=function(){return e},e}function v(){var e=h(["\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 5px;\n  color: #ffffff;\n  min-height: 3em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.25em;\n  text-align: center;\n  margin-bottom: 0.5em;\n"]);return v=function(){return e},e}function y(){var e=h(["\n  0% {\n    width: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  99% {\n    border-bottom-right-radius: 0;\n  }\n\n  100% {\n    width: calc(100% + 0.5em);\n    border-bottom-right-radius: 5px;\n  }\n"]);return y=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=(0,o.keyframes)(y()),E=o.default.div(v()),k=o.default.div(b()),C=o.default.div(d(),function(e){return e.dismissable?"1.5em":"0"}),O=o.default.button(p()),S=o.default.div(f(),function(e){return e.timeout},g),j=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=c(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?l(a):r).state={animationPaused:!1},n.pause=n.pause.bind(l(n)),n.resume=n.resume.bind(l(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["default"].Component),n=t,(a=[{key:"pause",value:function(){this.props.pauseOnHover&&(this.setState({animationPaused:!0}),this.props.onPause())}},{key:"resume",value:function(){this.props.pauseOnHover&&(this.setState({animationPaused:!1}),this.props.onResume())}},{key:"render",value:function(){var e=this.props,t=e.timeout,n=e.children,a=e.dismissable,o=e.message,i=e.onDismiss,u=e.sticky,s=e.progressBar;return r.default.createElement(E,{onMouseEnter:this.pause,onMouseLeave:this.resume},r.default.createElement(k,null,r.default.createElement(C,{dismissable:a},n||o),a?r.default.createElement(O,{onClick:i},"×"):null),!u&&s?r.default.createElement(S,{timeout:t,className:"react-snackbar-alert__snackbar-progress-bar",style:{animationPlayState:this.state.animationPaused?"paused":"running"}}):null)}}])&&s(n.prototype,a),o&&s(n,o),t}();t.default=j,j.defaultProps={progressBar:!0},j.propTypes={children:a.default.node,pauseOnHover:a.default.bool,onPause:a.default.func,onResume:a.default.func,timeout:a.default.number,dismissable:a.default.bool,message:a.default.string,onDismiss:a.default.func,sticky:a.default.bool,progressBar:a.default.bool}},159:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(55),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,n){"use strict";var a=n(170),r=n.n(a),o=(n(171),n(172),n(0)),i=n.n(o),u=n(173),s=n(174),c=n.n(s);function l(){return i.a.createElement("footer",{id:c.a.footer},"Created with 💙 by ",i.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var m=n(175),f=n.n(m);function p(){return i.a.createElement("header",{id:f.a.header},i.a.createElement("h1",null,"🍫 React Snackbar Alert"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},i.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),i.a.createElement("div",null,i.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},i.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var d=n(4),b=n.n(d),v=n(33),y=n.n(v);n(155),i.a.createContext({});b.a.object,b.a.string.isRequired,b.a.func,b.a.func;var h=n(176),g=n.n(h);function E(){return i.a.createElement("nav",{id:g.a.sidebar},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(y.a,{to:"/",activeClassName:g.a.active},"Home")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/gettingStarted/",activeClassName:g.a.active},"Getting Started")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/api/",activeClassName:g.a.active},"API"))),i.a.createElement("h2",null,"Examples"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/base/",activeClassName:g.a.active},"Base")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/pauseOnHover/",activeClassName:g.a.active},"Pause on Hover")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/noProgressBar/",activeClassName:g.a.active},"No Progress Bar")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/dismissable/",activeClassName:g.a.active},"Dismissable")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/sticky/",activeClassName:g.a.active},"Sticky")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customTimeout/",activeClassName:g.a.active},"Custom Timeout")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customAnimationTimeout/",activeClassName:g.a.active},"Custom Animation Timeout")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customComponent/",activeClassName:g.a.active},"Custom Snackbar Component")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customChildComponent/",activeClassName:g.a.active},"Extending Snackbar Component")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/examples/customComponentData/",activeClassName:g.a.active},"Custom Component Data"))))}var k=n(177),C=n.n(k);n(178);function O(e){var t=e.children,n=e.title;return Object(o.useEffect)(function(){r.a.highlightAll()}),i.a.createElement("div",null,i.a.createElement(u.Helmet,null,i.a.createElement("title",null,n?n+" |":""," React Snackbar Alert")),i.a.createElement(p,null),i.a.createElement("div",{id:C.a.body},i.a.createElement(E,null),i.a.createElement("main",{id:C.a.main},i.a.createElement("div",{id:C.a.contentContainer},i.a.createElement("h1",null,n),t),i.a.createElement(l,null))))}n.d(t,"a",function(){return O})},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"SnackbarManager",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Snackbar",{enumerable:!0,get:function(){return r.default}});var a=o(n(167)),r=o(n(156));function o(e){return e&&e.__esModule?e:{default:e}}},167:function(e,t,n){"use strict";n(56),n(179),n(162),n(163),n(75),n(180),n(181),n(35),n(74),n(164),n(165),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(158)),r=c(n(157)),o=c(n(166)),i=n(183),u=c(n(182)),s=c(n(156));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(){var e=h(["\n  &.react-snackbar-alert__snackbar-container-enter {\n    opacity: 0;\n    transform: scaleY(0.1);\n  }\n\n  &.react-snackbar-alert__snackbar-container-enter-active {\n    opacity: 1;\n    transform: scaleY(1);\n    transition: all ","ms;\n  }\n\n  &.react-snackbar-alert__snackbar-container-exit {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n\n  &.react-snackbar-alert__snackbar-container-exit-active {\n    opacity: 0;\n    transform: scaleY(0.1);\n    transition: all ","ms;\n  }\n"]);return v=function(){return e},e}function y(){var e=h(["\n  position: fixed;\n  width: 20em;\n  bottom: 0;\n  left: calc(50% - 10em);\n  z-index: 10000;\n"]);return y=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=o.default.div(y()),E=o.default.div(v(),function(e){return e.animationTimeout},function(e){return e.animationTimeout}),k=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=p(t).call(this,e))||"object"!==l(r)&&"function"!=typeof r?d(a):r).timeouts={},n.startTimes={},n.paused={},n.state={notifications:[]},n.create=n.create.bind(d(n)),n.pause=n.pause.bind(d(n)),n.remove=n.remove.bind(d(n)),n.resume=n.resume.bind(d(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["default"].Component),n=t,(a=[{key:"create",value:function(e){var t=this;e.key=(0,u.default)(),void 0===e.timeout&&(e.timeout=this.props.timeout),this.setState({notifications:[].concat(m(this.state.notifications),[e])},function(){if(!e.sticky){t.startTimes[e.key]=Date.now();var n=setTimeout(function(){t.remove(e)},e.timeout);t.timeouts[e.key]=n}})}},{key:"remove",value:function(e){clearTimeout(this.timeouts[e.key]),this.setState({notifications:this.state.notifications.filter(function(t){return t!==e})}),delete this.timeouts[e.key],delete this.paused[e.key],delete this.startTimes[e.key]}},{key:"pause",value:function(e){if(!e.sticky){clearTimeout(this.timeouts[e.key]),delete this.timeouts[e.key];var t=(this.paused[e.key]||e.timeout)-(Date.now()-this.startTimes[e.key]);this.paused[e.key]=t}}},{key:"resume",value:function(e){var t=this;if(!e.sticky){var n=this.paused[e.key];this.startTimes[e.key]=Date.now();var a=setTimeout(function(){t.remove(e)},n);this.timeouts[e.key]=a}}},{key:"componentWillUnmount",value:function(){var e=this;Object.keys(this.timeouts).forEach(function(t){clearTimeout(e.timeouts[t])})}},{key:"render",value:function(){var e=this,t=this.props.component;return r.default.createElement(g,null,r.default.createElement(i.TransitionGroup,null,this.state.notifications.map(function(n){return r.default.createElement(i.CSSTransition,{key:n.key,timeout:n.animationTimeout||e.props.animationTimeout,classNames:"react-snackbar-alert__snackbar-container"},r.default.createElement(E,{animationTimeout:n.animationTimeout||e.props.animationTimeout},r.default.createElement(t,{progressBar:void 0!==n.progressBar?n.progressBar:e.props.progressBar,sticky:n.sticky,timeout:n.timeout,dismissable:void 0!==n.dismissable?n.dismissable:e.props.dismissable,onDismiss:function(){return e.remove(n)},onPause:function(){return e.pause(n)},onResume:function(){return e.resume(n)},pauseOnHover:void 0!==n.pauseOnHover?n.pauseOnHover:e.props.pauseOnHover,message:n.message,data:n.data})))})))}}])&&f(n.prototype,a),o&&f(n,o),t}();t.default=k,k.defaultProps={animationTimeout:250,component:s.default,dismissable:!1,pauseOnHover:!1,progressBar:!0,timeout:3e3},k.propTypes={animationTimeout:a.default.number,component:a.default.elementType,dismissable:a.default.bool,pauseOnHover:a.default.bool,progressBar:a.default.bool,timeout:a.default.number}},168:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(169),r=n.n(a),o=n(0),i=n.n(o);function u(e){var t=e.src,n=e.language;return i.a.createElement("pre",null,i.a.createElement("code",{className:"language-"+n,dangerouslySetInnerHTML:{__html:r()(t)}}))}u.defaultProps={language:"jsx"}},231:function(e,t){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\n\nimport CustomSnackbarComponent from './CustomSnackbarComponent';\n\nexport default function CustomComponentDataExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      data: {\n        action: 'Retry'\n      },\n      message: '⚠️ Connection Error'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"},232:function(e,t){e.exports="import React from 'react';\nimport { Snackbar } from 'react-snackbar-alert';\n\nexport default function CustomSnackbarComponent(props) {\n  return (\n    <Snackbar {...props}>\n      <div style={{display: 'flex', justifyContent: 'center'}}>\n        <div style={{margin: '0.5em', flexGrow: 1}}>{props.message}</div>\n        <button style={{marginRight: '0.5em'}}>{props.data.action}</button>\n      </div>\n    </Snackbar>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-custom-component-data-js-2c14ef07f9326479fbe0.js.map