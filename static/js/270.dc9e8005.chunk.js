/*! For license information please see 270.dc9e8005.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[270],{1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,u=o(e),s=1;s<arguments.length;s++){for(var f in a=Object(arguments[s]))n.call(a,f)&&(u[f]=a[f]);if(t){c=t(a);for(var l=0;l<c.length;l++)r.call(a,c[l])&&(u[c[l]]=a[c[l]])}}return u}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4270:function(e,t,n){"use strict";n.d(t,{q:function(){return fe}});var r=n(2007),o=n.n(r),i=n(9475),a=n.n(i),c=n(77),u=n.n(c),s=n(2791),f=n(1725),l=n.n(f),p="bodyAttributes",d="htmlAttributes",y="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(h).map((function(e){return h[e]})),"charset"),m="cssText",T="href",g="http-equiv",v="innerHTML",w="itemprop",O="name",C="property",A="rel",S="src",E="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",k="defer",x="encodeSpecialCharacters",I="onChangeClientState",L="titleTemplate",_=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),M=[h.NOSCRIPT,h.SCRIPT,h.STYLE],N="data-react-helmet",R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=$(e,h.TITLE),n=$(e,L);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,P);return t||r||void 0},z=function(e){return $(e,I)||function(){}},K=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&Z("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==v&&c!==m&&c!==w||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=l()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},G=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){G(t)}),0)}}(),J=function(e){return clearTimeout(e)},Q="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:n.g.requestAnimationFrame||G,X="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||J:n.g.cancelAnimationFrame||J,Z=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;oe(h.BODY,r),oe(h.HTML,o),re(l,p);var d={baseTag:ie(h.BASE,n),linkTags:ie(h.LINK,i),metaTags:ie(h.META,a),noscriptTags:ie(h.NOSCRIPT,c),scriptTags:ie(h.SCRIPT,s),styleTags:ie(h.STYLE,f)},y={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),u(e,y,b)},ne=function(e){return Array.isArray(e)?e.join(""):e},re=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ne(e)),oe(h.TITLE,t)},oe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(N),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(N):n.getAttribute(N)!==a.join(",")&&n.setAttribute(N,a.join(","))}},ie=function(e,t){var n=document.head||document.querySelector(h.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===v)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(N,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ae=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[N]=!0,r),i=ce(n,o);return[s.createElement(h.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=ae(n),i=ne(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+F(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case d:return{toComponent:function(){return ce(t)},toString:function(){return ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[N]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===v||n===m){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===v||e===m)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===M.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},se=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,y=e.titleAttributes;return{base:ue(h.BASE,t,r),bodyAttributes:ue(p,n,r),htmlAttributes:ue(d,o,r),link:ue(h.LINK,i,r),meta:ue(h.META,a,r),noscript:ue(h.NOSCRIPT,c,r),script:ue(h.SCRIPT,u,r),style:ue(h.STYLE,s,r),title:ue(h.TITLE,{title:l,titleAttributes:y},r)}},fe=function(e){var t,n;return n=t=function(t){function n(){return q(this,n),Y(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!u()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case h.TITLE:return B({},o,((t={})[r.type]=a,t.titleAttributes=B({},i),t));case h.BODY:return B({},o,{bodyAttributes:B({},i)});case h.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((n={})[r.type]=B({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=H(t,["children"]),o=B({},r);return n&&(o=this.mapChildrenToProps(n,o)),s.createElement(e,o)},D(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(a()((function(e){return{baseTag:W([T,E],e),bodyAttributes:K(p,e),defer:$(e,k),encode:$(e,x),htmlAttributes:K(d,e),linkTags:V(h.LINK,[A,T],e),metaTags:V(h.META,[O,b,g,C,w],e),noscriptTags:V(h.NOSCRIPT,[v],e),onChangeClientState:z(e),scriptTags:V(h.SCRIPT,[S,v],e),styleTags:V(h.STYLE,[m],e),title:U(e),titleAttributes:K(y,e)}}),(function(e){ee&&X(ee),e.defer?ee=Q((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),se)((function(){return null})));fe.renderStatic=fe.rewind},9475:function(e,t,n){"use strict";var r,o=n(2791),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),l.canUseDOM?t(u):n&&(u=n(u))}var l=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}}}]);
//# sourceMappingURL=270.dc9e8005.chunk.js.map