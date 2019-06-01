(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var l=a(0),n=a.n(l),r=a(157),c=a(184),m=a.n(c);function i(){return n.a.createElement(r.a,{title:"API"},n.a.createElement("h2",null,n.a.createElement("code",null,"SnackbarManager")," Component"),n.a.createElement("h3",null,"Props"),n.a.createElement("table",{className:m.a.api},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"animationTimeout"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"500"),n.a.createElement("td",null,"The duration of the show and hide animations, in milliseconds")),n.a.createElement("tr",null,n.a.createElement("td",null,"component"),n.a.createElement("td",null,"React component type"),n.a.createElement("td",null,n.a.createElement("code",null,"Snackbar")," component"),n.a.createElement("td",null,"The component type to use for rendering the snackbar")),n.a.createElement("tr",null,n.a.createElement("td",null,"dismissable"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false"),n.a.createElement("td",null,"Whether or not created snackbars can be manually dismissed by the user")),n.a.createElement("tr",null,n.a.createElement("td",null,"pauseOnHover"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false"),n.a.createElement("td",null,"Whether or not to pause a snackbar's timeout when the mouse is hovered over it")),n.a.createElement("tr",null,n.a.createElement("td",null,"progressBar"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"true"),n.a.createElement("td",null,"Whether or not to show an animated progress bar indicating the time before a snackbar is removed")),n.a.createElement("tr",null,n.a.createElement("td",null,"timeout"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"3000"),n.a.createElement("td",null,"The time before a snackbar is automatically removed, in milliseconds")))),n.a.createElement("h3",null,"Methods"),n.a.createElement("code",null,"create(snackbar: SnackbarData)"),n.a.createElement("p",null,"Creates and shows a snackbar notification."),n.a.createElement("h3",null,n.a.createElement("code",null,"SnackbarData")," type"),"When a value is specified for a given property in both the ",n.a.createElement("code",null,"SnackbarManager")," component and a ",n.a.createElement("code",null,"SnackbarData")," item, the value in the ",n.a.createElement("code",null,"SnackbarData")," takes precedence. Otherwise, it will default to the corresponding setting in the ",n.a.createElement("code",null,"SnackbarManager")," if not specified.",n.a.createElement("table",{className:m.a.api},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"animationTimeout"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"The duration of the show and hide animations, in milliseconds")),n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"object"),n.a.createElement("td",null,"Custom data that can be used with a custom snackbar component")),n.a.createElement("tr",null,n.a.createElement("td",null,"dismissable"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"Whether or not this snackbar can be manually dismissed by the user")),n.a.createElement("tr",null,n.a.createElement("td",null,"message (Required)"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"The message to display")),n.a.createElement("tr",null,n.a.createElement("td",null,"pauseOnHover"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"Whether or not to pause this snackbar's timeout when it is hovered over")),n.a.createElement("tr",null,n.a.createElement("td",null,"progressBar"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"Whether or not to show the progress bar for this snackbar")),n.a.createElement("tr",null,n.a.createElement("td",null,"sticky"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"Whether or not this snackbar should be sticky. Sticky snackbars are not automatically removed.")),n.a.createElement("tr",null,n.a.createElement("td",null,"timeout"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"The time before this snackbar is automatically removed, in milliseconds")))))}},155:function(e,t,a){var l;e.exports=(l=a(156))&&l.default||l},156:function(e,t,a){"use strict";a.r(t);a(34);var l=a(0),n=a.n(l),r=a(4),c=a.n(r),m=a(55),i=a(2),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(m.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},157:function(e,t,a){"use strict";var l=a(161),n=a.n(l),r=(a(162),a(163),a(0)),c=a.n(r),m=a(164),i=a(165),o=a.n(i);function s(){return c.a.createElement("footer",{id:o.a.footer},"Created with 💙 by ",c.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var u=a(166),E=a.n(u);function d(){return c.a.createElement("header",{id:E.a.header},c.a.createElement("h1",null,"🍫 React Snackbar Alert"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),c.a.createElement("div",null,c.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var h=a(4),b=a.n(h),p=a(33),v=a.n(p);a(155),c.a.createContext({});b.a.object,b.a.string.isRequired,b.a.func,b.a.func;var f=a(167),k=a.n(f);function g(){return c.a.createElement("nav",{id:k.a.sidebar},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(v.a,{to:"/",activeClassName:k.a.active},"Home")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/gettingStarted/",activeClassName:k.a.active},"Getting Started")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/api/",activeClassName:k.a.active},"API"))),c.a.createElement("h2",null,"Examples"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/base/",activeClassName:k.a.active},"Base")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/pauseOnHover/",activeClassName:k.a.active},"Pause on Hover")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/noProgressBar/",activeClassName:k.a.active},"No Progress Bar")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/dismissable/",activeClassName:k.a.active},"Dismissable")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/sticky/",activeClassName:k.a.active},"Sticky")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customTimeout/",activeClassName:k.a.active},"Custom Timeout")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customAnimationTimeout/",activeClassName:k.a.active},"Custom Animation Timeout")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customComponent/",activeClassName:k.a.active},"Custom Snackbar Component")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customChildComponent/",activeClassName:k.a.active},"Extending Snackbar Component")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customComponentData/",activeClassName:k.a.active},"Custom Component Data"))))}var C=a(168),y=a.n(C);a(158),a(169);function N(e){var t=e.children,a=e.title;return Object(r.useEffect)(function(){n.a.highlightAll()}),c.a.createElement("div",null,c.a.createElement(m.Helmet,null,c.a.createElement("title",null,a?a+" |":""," React Snackbar Alert")),c.a.createElement(d,null),c.a.createElement("div",{id:y.a.body},c.a.createElement(g,null),c.a.createElement("main",{id:y.a.main},c.a.createElement("div",{id:y.a.contentContainer},c.a.createElement("h1",null,a),t),c.a.createElement(s,null))))}a.d(t,"a",function(){return N})}}]);
//# sourceMappingURL=component---src-pages-api-js-7729a13c54e83c5b642d.js.map