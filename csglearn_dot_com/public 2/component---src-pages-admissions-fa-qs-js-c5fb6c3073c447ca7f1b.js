(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"Il/4":function(e,t,n){"use strict";var r=n("JX7q"),a=n("dI71"),o=n("q1tI"),s=n.n(o),l=n("QJSi"),i=n("b6Qr"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleNavbar=n.toggleNavbar.bind(Object(r.a)(n)),n.state={collapseOpen:!1},n}Object(a.a)(t,e);var n=t.prototype;return n.toggleNavbar=function(){this.setState(Object.assign({},this.state,{collapseOpen:!this.state.collapseOpen}))},n.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.z,{className:"break-out sticky-top",type:"light",theme:"light",expand:"md"},s.a.createElement(l.A,{href:"/"},"CSG Learning"),i.isMobile?s.a.createElement("a",{href:"/apply",className:"ml-auto mr-3"},s.a.createElement(l.e,null,"APPLY")):null,s.a.createElement(l.B,{onClick:this.toggleNavbar}),s.a.createElement(l.m,{open:this.state.collapseOpen,navbar:!0},s.a.createElement(l.w,{navbar:!0,className:"ml-auto"},s.a.createElement(l.x,null,s.a.createElement(l.y,{active:!0,href:"/admissions/new-students"},"New Students")),s.a.createElement(l.x,null,s.a.createElement(l.y,{active:!0,href:"/admissions/"},"Faculties")),s.a.createElement(l.x,null,s.a.createElement(l.y,{active:!0,href:"/admissions/forms"},"Forms & Documents")),s.a.createElement(l.x,null,s.a.createElement(l.y,{active:!0,href:"/admissions/FAQs"},s.a.createElement("i",{className:"fas fa-info-circle text-primary mr-2"}),"FAQs")),s.a.createElement(l.x,null,s.a.createElement(l.e,{active:!0,style:{width:"100%",marginLeft:"10px"},href:"/apply"},"Apply"))))))},t}(o.Component);t.a=c},efxb:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),s=n("Il/4"),l=n("I2cD"),i=n("b6Qr"),c=(n("8ypT"),n("W/9C")),_=function(e){function t(t){return e.call(this,t)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.MobileView,null,o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:"https://i.imgur.com/IcviBO3.jpg",style:{width:"100%",height:"100%"}}))),o.a.createElement(i.BrowserView,null,o.a.createElement(l.a,null)),o.a.createElement(s.a,null),this.props.children,o.a.createElement("br",null),o.a.createElement(c.a,null))},t}(a.Component);t.a=_},oPzb:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("17x9"),s=n.n(o);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?f(e):t}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}var h={return:13,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,space:32};h.keyCodes=Object.keys(h).reduce((function(e,t){return e[h[t]]=t,e}),{});var v={"faq-row-wrapper":"styles_faq-row-wrapper__3vA1D","faq-row":"styles_faq-row__2YF3c","row-body":"styles_row-body__1NvUo","row-title":"styles_row-title__1YiiY","no-tabfocus":"styles_no-tabfocus__1HmyD","row-title-text":"styles_row-title-text__1MuhU","icon-wrapper":"styles_icon-wrapper__2cftw",closed:"styles_closed__39w54","row-content":"styles_row-content__QOGZd",animate:"styles_animate__3ecdr",static:"styles_static__3chYW",expanded:"styles_expanded__3elPy",expanding:"styles_expanding__2OAFB","row-content-text":"styles_row-content-text__2sgAB"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles_faq-row-wrapper__3vA1D {\n  background-color: var(--faq-bg-color, white); }\n  .styles_faq-row-wrapper__3vA1D h2 {\n    margin: 0;\n    color: var(--title-text-color, black); }\n  .styles_faq-row-wrapper__3vA1D .styles_faq-row__2YF3c {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n    border-bottom: 1px solid #ccc; }\n  .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c {\n    flex-direction: column;\n    position: relative; }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      color: var(--row-title-color, black);\n      font-size: var(--row-title-text-size, large);\n      cursor: pointer;\n      align-items: center; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_no-tabfocus__1HmyD {\n        outline: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_row-title-text__1MuhU {\n        padding-right: 3em; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw {\n        max-width: 25px;\n        max-height: 25px;\n        margin: 0;\n        padding: 0;\n        color: var(--arrow-color, black);\n        transform: rotate(0deg);\n        transition: transform var(--transition-duration, 0.3s);\n        position: absolute;\n        top: 13px;\n        right: 12px; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          width: 100%;\n          height: 100%; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          fill: var(--arrow-color, black); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd {\n        visibility: hidden; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_animate__3ecdr {\n          opacity: 0;\n          transition: height var(--transition-duration, 0.3s); }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd {\n        visibility: visible; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: block; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanding__2OAFB .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd {\n      overflow: hidden;\n      transition: height var(--transition-duration, 0.3s);\n      transition-timing-function: var(--timing-function, ease); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd .styles_row-content-text__2sgAB {\n        color: var(--row-content-color, black);\n        font-size: var(--row-content-text-size, medium);\n        padding: var(--row-content-padding-top, 0) var(--row-content-padding-right, 0) var(--row-content-padding-bottom, 0) var(--row-content-padding-left, 0); }\n");var b=function(e){w(n,r.PureComponent);var t=y(n);function n(){var e;l(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return _(f(e=t.call.apply(t,[this].concat(o))),"state",{isExpanded:!1,ref:a.a.createRef(),height:0,rowClassName:"closed"}),_(f(e),"finishTransition",(function(){var t=e.state.isExpanded;e.setState({rowClassName:t?"expanded":"closed"})})),_(f(e),"expand",(function(){e.setState((function(e){return{isExpanded:!e.isExpanded}}))})),_(f(e),"keyPress",(function(t){var n=t.keyCode?t.keyCode:t.which;switch(h.keyCodes[n]){case"space":case"return":t.preventDefault(),t.stopPropagation(),e.expand()}})),_(f(e),"setHeight",(function(){var t=e.state,n=t.ref,r=t.isExpanded,a=n.current.scrollHeight;e.setState({height:r?a:0})})),e}return c(n,[{key:"getSnapshotBeforeUpdate",value:function(e,t){var n=t.isExpanded,r=this.state.isExpanded,a=this.props.config,o=(a=void 0===a?{}:a).animate,s=void 0===o||o;return r!==n?{rowClassName:r?s?"expanding":"expanded":s?"closing":"closed"}:null}},{key:"componentDidUpdate",value:function(e,t,n){var r=this.props.config,a=(r=void 0===r?{}:r).animate,o=void 0===a||a;null!==n&&this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),o?this.setHeight:void 0)}},{key:"render",value:function(){var e=this.props,t=e.data,n=t.title,r=t.content,o=e.config,s=(o=void 0===o?{}:o).animate,l=void 0===s||s,i=o.arrowIcon,c=o.tabFocus,_=void 0!==c&&c,d=this.state,w=d.isExpanded,u=d.ref,f=d.height,m=d.rowClassName,y={onClick:this.expand,role:"button","aria-expanded":w,"aria-controls":"react-faq-rowcontent-".concat(this.props.rowid),onKeyPress:this.keyPress,onKeyDown:this.keyPress};_&&(y.tabIndex=0);var h={role:"region",id:"react-faq-rowcontent-".concat(this.props.rowid),"aria-expanded":w,"aria-hidden":!w,onTransitionEnd:this.finishTransition};l&&(h.style={height:f});var b=["row-title",m,v["row-title"],v[m],_?"":v["no-tabfocus"]].filter(Boolean).join(" "),g=i||a.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'},className:"arrow-image ".concat(v["arrow-image"]),alt:"Expand arrow"}),E=[v["row-content"],"row-content",l?v.animate:v.static].join(" "),x=[v["row-content-text"],"row-content-text"].join(" "),q=r&&"string"==typeof r?a.a.createElement("div",{className:x,dangerouslySetInnerHTML:{__html:r}}):a.a.createElement("div",{className:x},r);return a.a.createElement("section",{className:"faq-row ".concat(v["faq-row"]),role:"listitem"},a.a.createElement("div",p({className:b},y),a.a.createElement("div",{className:"row-title-text ".concat(v["row-title-text"])},n),a.a.createElement("span",{className:"icon-wrapper ".concat(v["icon-wrapper"]),"aria-hidden":"true"},g)),a.a.createElement("div",p({className:E},h,{ref:u}),q))}}]),n}();_(b,"propTypes",{config:s.a.object,data:s.a.object,rowid:s.a.number});var g=function(e){w(n,r.PureComponent);var t=y(n);function n(){return l(this,n),t.apply(this,arguments)}return c(n,[{key:"render",value:function(){var e=this,t=this.props.data||{},n=t.title,r=t.rows,o=void 0===r?[]:r,s=this.props,l=s.styles,i=void 0===l?{}:l,c=s.config,_=((c=void 0===c?{}:c).animate,{"--faq-bg-color":i.bgColor,"--title-text-color":i.titleTextColor,"--row-title-color":i.rowTitleColor,"--row-title-text-size":i.rowTitleTextSize,"--row-content-color":i.rowContentColor,"--row-content-text-size":i.rowContentTextSize,"--row-content-padding-top":i.rowContentPaddingTop,"--row-content-padding-bottom":i.rowContentPaddingBottom,"--row-content-padding-right":i.rowContentPaddingRight,"--row-content-padding-left":i.rowContentPaddingLeft,"--arrow-color":i.arrowColor,"--transition-duration":i.transitionDuration,"--timing-function":i.timingFunc}),p="faq-row-wrapper ".concat(v["faq-row-wrapper"]),d="faq-title ".concat(v["faq-row"]),w="faq-body ".concat(v["row-body"]);return a.a.createElement("div",{className:p,style:_},n?a.a.createElement("section",{className:d},a.a.createElement("h2",null,n)):null,o.length?a.a.createElement("section",{className:w,role:"list"},o.map((function(t,n){return a.a.createElement(b,{data:t,key:n,rowid:n+1,config:e.props.config})}))):null)}}]),n}();_(g,"propTypes",{data:s.a.object,styles:s.a.object,config:s.a.object}),t.a=g},wL3v:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("Wbzz"),n("efxb")),s=n("vrFN"),l=n("QJSi"),i=n("oPzb"),c=(n("b6Qr"),{title:"",rows:[{title:"How do I apply?",content:a.a.createElement("span",null,a.a.createElement("br",null),"Prospective students can apply using our online portal found"," ",a.a.createElement("a",{href:"/apply"},"here"),".",a.a.createElement("br",null),a.a.createElement("br",null))},{title:"What are the requirements for admissions?",content:a.a.createElement("span",null,a.a.createElement("br",null),"Each programme or diploma has their own unique requirements for acceptace. Prospective students can review the general list of requirements ",a.a.createElement("a",{href:"/admissions/requirements"},"here"),", or review our ",a.a.createElement("a",{href:"/programmes"},"programmes")," or"," ",a.a.createElement("a",{href:"/diplomas"},"diplomas"),".",a.a.createElement("br",null),a.a.createElement("br",null))},{title:"What documents do I need for enrollment?",content:a.a.createElement("span",null,a.a.createElement("br",null),"Please refer to a list of admissions requirements"," ",a.a.createElement("a",{href:"/admissions/requirements"},"here"),".",a.a.createElement("br",null),a.a.createElement("br",null))},{title:"What is an academic portfolio?",content:a.a.createElement("span",null,a.a.createElement("br",null),"An academic portfolio is a compilation of verifiable documentation demonstrating learning gained through prior learning experiences which match the outcomes of university education or matriculation requirements.",a.a.createElement("br",null),a.a.createElement("br",null))},{title:"Where will I sit the CSEC or CAPE exams?",content:a.a.createElement("span",null,a.a.createElement("br",null),"Candidates will be assigned an approved examination center based on their address. This is where they will sit their exams.",a.a.createElement("br",null),a.a.createElement("br",null))},{title:"Where will I access my class notes?",content:a.a.createElement("span",null,a.a.createElement("br",null),"Current students can access their class materials on our online learning portal here"," ",a.a.createElement("a",{target:"_blank",href:"https://www.hub.csglearn.com"},"here"),".",a.a.createElement("br",null),a.a.createElement("br",null))}]}),_={titleTextColor:"",rowTitleColor:""},p={animate:!0};t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement(s.a,{title:"Admissions FAQs",description:"",lang:"en"}),a.a.createElement(l.n,null,a.a.createElement(l.c,null,a.a.createElement(l.d,null,a.a.createElement("a",{href:"/"},"Home")),a.a.createElement(l.d,null,a.a.createElement("a",{href:"/admissions"},"Admissions")),a.a.createElement(l.d,{active:!0},"FAQs")),a.a.createElement(l.C,null,a.a.createElement(l.l,{sm:12,md:6,lg:6},a.a.createElement(i.a,{data:c,styles:_,config:p})),a.a.createElement(l.l,{sm:12,md:6,lg:6})))))}}}]);
//# sourceMappingURL=component---src-pages-admissions-fa-qs-js-c5fb6c3073c447ca7f1b.js.map