/*! For license information please see 4732_d2067332e9154d9db50c.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[4732],{"3003":function(e,t,n){"use strict";n.d(t,{"gO":function(){return b},"zx":function(){return j},"Xz":function(){return g},"l0":function(){return h},"Ee":function(){return O},"II":function(){return x},"C3":function(){return w},"Ho":function(){return k},"pf":function(){return _},"xv":function(){return P},"gx":function(){return S},"nk":function(){return N},"G7":function(){return C}});var r=n(2784),o=function manipulatePropsFunction(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.dangerouslySetInnerHTML,r=e.style;return"string"!=typeof r&&(t.style=r),Object.assign(Object.assign({},t),{"dangerouslySetInnerHTML":n})},a=n(9249),s=n(7371),c=n(5754),i=n(3820);Object.create;Object.create;var u=function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)},l=function mergeRefs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){u(t,e)}))}},f=function camelToDashCase(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))},d=function getClassName(e,t,n){var r=t.className||t.class,o=n.className||n.class,a=m(e),s=m(r?r.split(" "):[]),c=m(o?o.split(" "):[]),i=[];return a.forEach((function(e){s.has(e)?(i.push(e),s.delete(e)):c.has(e)||i.push(e)})),s.forEach((function(e){return i.push(e)})),i.join(" ")},v=function isCoveredByReact(e){return!1},p=function syncEvent(e,t,n){var r=e.__events||(e.__events={}),o=r[t];o&&e.removeEventListener(t,o),e.addEventListener(t,r[t]=function handler(e){n&&n.call(this,e)})},m=function arrayToMap(e){var t=new Map;return e.forEach((function(e){return t.set(e,e)})),t},y=function createReactComponent(e,t,n,o){void 0!==o&&o();var u=function dashToPascalCase(e){return e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}(e),m=function(t){(0,c.Z)(ReactComponent,t);var o=(0,i.Z)(ReactComponent);function ReactComponent(e){var t;return(0,a.Z)(this,ReactComponent),(t=o.call(this,e)).setComponentElRef=function(e){t.componentEl=e},t}return(0,s.Z)(ReactComponent,[{"key":"componentDidMount","value":function componentDidMount(){this.componentDidUpdate(this.props)}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){!function attachProps(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){var r=d(e.classList,t,n);""!==r&&(e.className=r),Object.keys(t).forEach((function(n){if(!("style"===n&&"string"!=typeof t[n]||["children","ref","class","className","forwardedRef"].includes(n)))if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){var r=n.substring(2).toLowerCase();v(r)||p(e,r,t[n])}else e[n]=t[n],"string"==typeof t[n]&&e.setAttribute(f(n),t[n])}))}}(this.componentEl,this.props,e)}},{"key":"render","value":function render(){var t=this.props,o=t.children,a=t.forwardedRef,s=(t.className,t.ref,function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["children","forwardedRef","className","ref"])),c=Object.keys(s).reduce((function(e,t){var n=s[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){var r=t.substring(2).toLowerCase();"undefined"!=typeof document&&v(r)&&(e[t]=n)}else{"style"!==t&&["string","boolean","number"].includes(typeof n)&&(e[f(t)]=n)}return e}),{});n&&(c=n(this.props,c));var i=Object.assign(Object.assign({},c),{"ref":l(a,this.setComponentElRef)});return(0,r.createElement)(e,i,o)}}],[{"key":"displayName","get":function get(){return u}}]),ReactComponent}(r.Component);return t&&(m.contextType=t),function createForwardRef(e,t){var n=function forwardRef(t,n){return r.createElement(e,Object.assign({},t,{"forwardedRef":n}))};return n.displayName=t,r.forwardRef(n)}(m,u)},b=r.Fragment,j=y("taro-button-core",void 0,o),g=y("taro-canvas-core",void 0,o),h=(r.Fragment,y("taro-form-core",void 0,o)),O=y("taro-image-core",void 0,o),x=y("taro-input-core",void 0,o),w=y("taro-navigator-core",void 0,o),k=y("taro-rich-text-core",void 0,o),_=y("taro-scroll-view-core",void 0,o),P=y("taro-text-core",void 0,o),S=y("taro-textarea-core",void 0,o),N=y("taro-video-core",void 0,o),C=y("taro-view-core",void 0,o)},"4679":function(e,t,n){"use strict";n.d(t,{"Z":function(){return l}});var r=n(9249),o=n(7371),a=n(5754),s=n(3820),c=n(3003),i=n(2784),u=n(2322),l=function(e){(0,a.Z)(Index,e);var t=(0,s.Z)(Index);function Index(){return(0,r.Z)(this,Index),t.call(this)}return(0,o.Z)(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,r=e.card;return(0,u.jsxs)(c.G7,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&(0,u.jsx)(c.G7,{"className":"demo-block__title","children":n}),r?(0,u.jsx)(c.G7,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(i.Component)},"4376":function(e,t,n){"use strict";n.d(t,{"Z":function(){return Page}});var r=n(5273),o=n(3003),a=n(1448),s=n(1177),c=n(2784),i=n(2322);function Page(e){var t=e.title,n=e.className,u=void 0===n?"":n,l=e.children,f=a.ZP.useRouter().path;return(0,c.useEffect)((function(){document.body.scrollTop=document.documentElement.scrollTop=0}),[f]),a.ZP.useShareAppMessage((function(){return{"title":"AntM 组件库演示","path":f}})),(0,i.jsxs)(o.G7,{"className":"demo-page ".concat(u),"children":[(0,i.jsxs)(o.G7,{"className":"demo-nav","children":[(0,i.jsx)(r.Z,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return(0,s.n)()}}),(0,i.jsxs)(o.G7,{"className":"demo-nav__title","children":[t," "]})]}),l]})}},"4732":function(e,t,n){"use strict";n.r(t),n.d(t,{"default":function(){return x}});var r=n(9249),o=n(7371),a=n(753),s=n(5754),c=n(3820),i=n(6666),u=n(2784),l=n(4376),f=n(4679),d=n(8079),v=n(6234),p=n(3003),m=n(2779),y=n.n(m);function everyItemEqual(e,t){if(e.length!==t.length)return!1;for(var n=0,r=0;r<e.length;r++){var o=e[r];o&&t.includes(o)&&n++}return n===e.length}var b=n(2322),j="van-sku";function Sku(e){var t=e.sku,n=void 0===t?[]:t,r=e.className,o=void 0===r?"":r,a=e.goodsList,s=void 0===a?[]:a,c=e.goodsId,l=e.onChange,f=e.clickAttrDisable,m=e.itemRender,g=e.disabledClassName,h=void 0===g?"":g,O=e.activeClassName,x=void 0===O?"":O,w=e.itemDisable,k=(0,u.useState)(),_=(0,v.Z)(k,2),P=_[0],S=_[1];(0,u.useEffect)((function(){if(!c&&s)for(var e=0;e<s.length;e++){var t=s[e];if(!0!==(null==t?void 0:t.disabled)){S(t),l&&l(t);break}}if(c&&s)for(var n=0;n<s.length;n++){var r=s[n];if((null==r?void 0:r.id)===c){S(r);break}}}),[c,s]);var N=(0,u.useCallback)((function(e,t){var n=(0,d.Z)((null==P?void 0:P.skuIds)||[]);if(n.length){var r=t.filter((function(e){return n.includes(e.id)}))[0].id;n.splice(n.indexOf(r),1),n=n.concat(e);for(var o=void 0,a=0;a<s.length;a++){var c,i;if(null!==(c=s[a])&&void 0!==c&&c.skuIds&&everyItemEqual((null===(i=s[a])||void 0===i?void 0:i.skuIds)||[],n)){o=s[a];break}}return o}}),[null==P?void 0:P.skuIds,s]),C=(0,u.useCallback)((function(e,t){t?(S(e),l&&l(e)):f&&f(e)}),[f,l]);return(0,b.jsx)(p.G7,{"className":"".concat(j," ").concat(o),"children":n.map((function(e,t){return(0,b.jsxs)(p.G7,{"className":"".concat(j,"-item"),"children":[(0,b.jsx)(p.G7,{"className":"".concat(j,"-name"),"children":e.name}),(0,b.jsx)(p.G7,{"className":"".concat(j,"-attrs"),"children":e.items.map((function(t,n){var r,o=N(t.id,e.items),a=!(!o||!0===o.disabled||w&&w(o));return(0,b.jsx)(p.G7,{"onClick":function onClick(){return C(o,a)},"className":y()((r={},(0,i.Z)(r,"".concat(j,"-attr"),!0),(0,i.Z)(r,"".concat(j,"-attr-active ").concat(x),null==P?void 0:P.skuIds.includes(t.id)),(0,i.Z)(r,"".concat(j,"-attr-disable ").concat(h),!a),r)),"children":m?m(t):t.name},"attr#".concat(n,"@").concat(t.id))}))})]},"sku#".concat(t,"@").concat(e.id))}))})}var g=n(6269),h=[{"id":1,"name":"颜色","items":[{"name":"亮黑色","id":11,"color":"#131111"},{"name":"釉白色","id":12,"mark":"首发","color":"#ffff"},{"name":"秘银色","id":13,"color":"#d2cccc"},{"name":"夏日胡杨","id":14,"color":"#dd5151"}]},{"id":2,"name":"版本","items":[{"name":"8GB+128GB","id":21},{"name":"8GB+256GB","id":22}]}],O=[{"id":1,"skuIds":[11,21],"skuName":"亮黑色&8GB+128GB"},{"id":2,"skuIds":[11,22],"skuName":"亮黑色&8GB+256GB","count":0},{"id":3,"skuIds":[12,21],"skuName":"釉白色&8GB+128GB"},{"id":4,"skuIds":[12,22],"skuName":"釉白色&8GB+256GB"},{"id":4,"skuIds":[21,13],"skuName":"秘银色&8GB+128GB"},{"id":6,"skuIds":[13,22],"skuName":"秘银色&8GB+256GB","disabled":!0},{"id":7,"skuIds":[14,22],"skuName":"夏日胡杨&8GB+256GB"}];function Demo(){var e=h,t=O,n=u.useState(),r=(0,v.Z)(n,2),o=r[0],a=r[1];return(0,b.jsxs)(b.Fragment,{"children":[(0,b.jsx)(g.Z,{}),(0,b.jsx)(p.G7,{"children":"当前选择商品："}),(0,b.jsxs)(p.G7,{"style":{"paddingBottom":10},"children":["HUAWEI手机【",(null==o?void 0:o.skuName)||"--","】"]}),(0,b.jsx)(Sku,{"sku":e,"goodsList":t,"onChange":function onChange(e){return a(e)},"clickAttrDisable":function clickAttrDisable(e){return g.Z.show("暂无库存")},"itemDisable":function itemDisable(e){return!e||(0===e.count||void 0)},"itemRender":function itemRender(e){return e.color?(0,b.jsxs)(p.G7,{"className":"sku-color-item","children":[(0,b.jsx)(p.G7,{"className":"color-item","style":{"background":e.color}}),(0,b.jsx)(p.G7,{"children":e.name})]}):e.name}})]})}var x=function(e){(0,s.Z)(Index,e);var t=(0,c.Z)(Index);function Index(){var e;return(0,r.Z)(this,Index),e=t.call(this),(0,i.Z)((0,a.Z)(e),"state",{"active":0}),e}return(0,o.Z)(Index,[{"key":"render","value":function render(){return(0,b.jsx)(l.Z,{"title":"Sku 商品规格选择","className":"pages-sku-index","children":(0,b.jsx)(f.Z,{"title":"基本用法","padding":!0,"children":(0,b.jsx)(Demo,{})})})}}]),Index}(u.Component)},"5448":function(e,t,n){"use strict";n.d(t,{"PO":function(){return isPlainObject},"tI":function(){return isPromise},"Xq":function(){return isDef},"BP":function(){return isObj},"jn":function(){return isBoolean},"hU":function(){return isImageUrl},"cb":function(){return isVideoUrl}});var r=n(6522);function isFunction(e){return"function"==typeof e}function isPlainObject(e){return null!==e&&"object"===(0,r.Z)(e)&&!Array.isArray(e)}function isPromise(e){return isPlainObject(e)&&isFunction(e.then)&&isFunction(e.catch)}function isDef(e){return null!=e}function isObj(e){var t=(0,r.Z)(e);return null!==e&&("object"===t||"function"===t)}function isBoolean(e){return"boolean"==typeof e}var o=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,a=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(e){return o.test(e)}function isVideoUrl(e){return a.test(e)}},"5273":function(e,t,n){"use strict";n.d(t,{"J":function(){return Icon},"Z":function(){return d}});var r=n(6666),o=n(2159),a=n(3003),s=n(1152),c=n(3162),i=n(1248),u=n(7546);function isImage(e){return-1!==e.indexOf("/")}function rootClass(e){var t=[];if(e.classPrefix&&t.push(e.classPrefix),isImage(e.name))t.push("van-icon--image");else{var n=e.classPrefix?"".concat(e.classPrefix,"-").concat(e.name):e.name;t.push(n)}return t.join(" ")}function rootStyle(e){return(0,i.o)([{"color":e.color,"font-size":(0,u.N)(e.size)}])}var l=n(2322),f=["classPrefix","name","color","size","dot","info","style","className"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Icon(e){var t=e.classPrefix,n=void 0===t?"van-icon":t,r=e.name,i=e.color,u=e.size,d=e.dot,v=e.info,p=e.style,m=e.className,y=(0,o.Z)(e,f);return(0,l.jsxs)(a.G7,_objectSpread(_objectSpread({"className":rootClass({"classPrefix":n,"name":r})+" ".concat(m||""),"style":s.oB([rootStyle({"color":i,"size":u}),p])},y),{},{"children":[(v||0===v||d)&&(0,l.jsx)(c.k,{"dot":d,"info":v,"className":"van-icon__info"}),isImage(r)&&(0,l.jsx)(a.Ee,{"src":r,"mode":"aspectFit","className":"van-icon__image"})]}))}var d=Icon},"3162":function(e,t,n){"use strict";n.d(t,{"k":function(){return Info}});var r=n(6666),o=n(2159),a=n(3003),s=n(1152),c=n(2322),i=["dot","info","style","className"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Info(e){var t=e.dot,n=e.info,r=void 0===n?null:n,u=e.style,l=e.className,f=(0,o.Z)(e,i);return(0,c.jsx)(c.Fragment,{"children":(r||0===r||t)&&(0,c.jsx)(a.G7,_objectSpread(_objectSpread({"className":"van-info "+s.PH("info",{"dot":t})+"  "+l,"style":s.oB([u])},f),{},{"children":t?"":r}))})}t.Z=Info},"1746":function(e,t,n){"use strict";n.d(t,{"g":function(){return Loading},"Z":function(){return d}});var r=n(6666),o=n(6234),a=n(2159),s=n(3003),c=n(2784),i=n(1152),u=n(7546);function textStyle(e){return(0,i.oB)({"font-size":(0,u.N)(e.textSize)})}var l=n(2322),f=["vertical","type","color","size","textSize","className","children","style"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Loading(e){var t,n=e.vertical,r=e.type,d=void 0===r?"circular":r,v=e.color,p=e.size,m=e.textSize,y=e.className,b=e.children,j=e.style,g=(0,a.Z)(e,f),h=(0,c.useState)(Array.from({"length":12})),O=(0,o.Z)(h,1)[0];return(0,l.jsxs)(s.G7,_objectSpread(_objectSpread({"className":" "+i.PH("loading",{"vertical":n})+" "+y,"style":i.oB([j])},g),{},{"children":[(0,l.jsx)(s.G7,{"className":"van-loading__spinner van-loading__spinner--"+d,"style":(t={"color":v,"size":p},(0,i.oB)({"color":t.color,"width":(0,u.N)(t.size),"height":(0,u.N)(t.size)})),"children":"spinner"===d&&(0,l.jsx)(l.Fragment,{"children":O.map((function(e,t){return(0,l.jsx)(s.G7,{"className":"van-loading__dot"},"van-loading__dot_".concat(t))}))})}),(0,l.jsx)(s.G7,{"className":"van-loading__text","style":textStyle({"textSize":m}),"children":b})]}))}var d=Loading},"6645":function(e,t,n){"use strict";n.d(t,{"Y":function(){return useTransition}});var r=n(6234),o=n(2784),a=n(5448),s=function getClassNames(e){return{"enter":"van-".concat(e,"-enter van-").concat(e,"-enter-active enter-class enter-active-class"),"enter-to":"van-".concat(e,"-enter-to van-").concat(e,"-enter-active enter-to-class enter-active-class"),"leave":"van-".concat(e,"-leave van-").concat(e,"-leave-active leave-class leave-active-class"),"leave-to":"van-".concat(e,"-leave-to van-").concat(e,"-leave-active leave-to-class leave-active-class")}};function useTransition(e){var t=e.show,n=void 0!==t&&t,c=e.duration,i=void 0===c?300:c,u=e.name,l=void 0===u?"fade":u,f=e.onBeforeEnter,d=e.onBeforeLeave,v=e.onAfterEnter,p=e.onAfterLeave,m=e.onEnter,y=e.onLeave,b=e.enterClass,j=e.enterActiveClass,g=e.enterToClass,h=e.leaveClass,O=e.leaveActiveClass,x=e.leaveToClass,w=(0,o.useRef)(!1),k=(0,o.useRef)(""),_=(0,o.useState)(!1),P=(0,r.Z)(_,2),S=P[0],N=P[1],C=(0,o.useState)(!1),Z=(0,r.Z)(C,2),E=Z[0],D=Z[1],I=(0,o.useState)(0),B=(0,r.Z)(I,2),A=B[0],G=B[1],T=(0,o.useState)(""),L=(0,r.Z)(T,2),R=L[0],z=L[1],F=(0,o.useMemo)((function(){var e=s(l);return l||(e.enter+=" ".concat(null!=b?b:""),e["enter-to"]+="".concat(null!=g?g:""," ").concat(null!=j?j:""," "),e.leave+="  ".concat(null!=h?h:""),e["leave-to"]+=" ".concat(null!=x?x:""," ").concat(null!=O?O:"")),e}),[j,b,g,O,h,x,l]),K=(0,o.useCallback)((function(){w.current||(w.current=!0,"enter"===k.current?null==v||v():null==p||p(),!n&&S&&N(!1))}),[S,v,p,n]),U=(0,o.useCallback)((function(){var e=(0,a.BP)(i)?i.enter:i;k.current="enter",null==f||f(),requestAnimationFrame((function(){"enter"===k.current&&(null==m||m(),D(!0),N(!0),z(F.enter),G(e),requestAnimationFrame((function(){"enter"===k.current&&(w.current=!1,setTimeout((function(){return K()}),e),z(F["enter-to"]))})))}))}),[i,f,m,F,K]),M=(0,o.useCallback)((function(){if(S){var e=(0,a.BP)(i)?i.leave:i;k.current="leave",null==d||d(),requestAnimationFrame((function(){"leave"===k.current&&(null==y||y(),z(F.leave),G(e),requestAnimationFrame((function(){"leave"===k.current&&(w.current=!1,setTimeout((function(){return K()}),e),z(F["leave-to"]))})))}))}}),[F,S,i,d,y,K]);return(0,o.useEffect)((function(){!n||R&&R.includes(F["enter-to"])||U(),n||M()}),[n]),{"display":S,"inited":E,"currentDuration":A,"classes":R,"onTransitionEnd":K}}},"5099":function(e,t,n){"use strict";var r=n(6234),o=n(6666),a=n(2159),s=n(2784),c=n(1152),i=n(6933),u=n(2322),l=["show","zIndex","style","className","lockScroll","duration","setOuterShow","children"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function OverlayInner(e){var t=e.show,n=e.zIndex,r=e.style,o=e.className,f=e.lockScroll,d=void 0===f||f,v=e.duration,p=void 0===v?300:v,m=e.setOuterShow,y=e.children,b=(0,a.Z)(e,l),j=(0,s.useCallback)((function(e){e.stopPropagation(),e.preventDefault()}),[]);return d?(0,u.jsx)(i.Z,_objectSpread(_objectSpread({"show":t,"className":"van-overlay"+"  ".concat(o),"style":c.oB([{"z-index":n},r]),"duration":p,"onTouchMove":j,"onAfterLeave":function onAfterLeave(){setTimeout((function(){m(!1)}),0)}},b),{},{"children":y})):(0,u.jsx)(i.Z,_objectSpread(_objectSpread({"show":t,"className":"van-overlay"+"  ".concat(o||""),"style":c.oB([{"z-index":n},r]),"duration":p,"onAfterLeave":function onAfterLeave(){return m(!1)}},b),{},{"children":y}))}t.Z=function Overlay(e){var t=e.show,n=(0,s.useState)(!1),o=(0,r.Z)(n,2),a=o[0],c=o[1];return(0,s.useEffect)((function(){t&&c(!0)}),[t]),(0,u.jsx)(u.Fragment,{"children":a?(0,u.jsx)(OverlayInner,_objectSpread({"setOuterShow":c},e)):(0,u.jsx)(u.Fragment,{})})}},"9808":function(e,t,n){"use strict";n.d(t,{"on":function(){return on},"S":function(){return off},"X":function(){return trigger}});var r=new(n(1448).zW);function trigger(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return r.trigger.apply(r,[e].concat(n))}function on(e,t){return r.on(e,t)}function off(e,t){return r.off(e,t)}},"6269":function(e,t,n){"use strict";var r=n(6666),o=n(2159),a=n(6234),s=n(3003),c=n(2784),i=n(6933),u=n(5099),l=n(5273),f=n(1746),d=n(5448),v=n(9808),p=n(3035),m=n(2322),y=["style","className","children","zIndex"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b="van-toast",j={"show":!0,"duration":2e3,"mask":!1,"forbidClick":!1,"type":"text","position":"middle","message":"","loadingType":"circular","selector":"#van-toast","id":b},g=Object.assign({},j),h=null;function Toast(e){var t=(0,c.useState)({"show":!1,"duration":2e3,"mask":!1,"forbidClick":!1,"type":"text","position":"middle","message":"","loadingType":"circular","selector":"#van-toast"}),n=(0,a.Z)(t,2),r=n[0],O=n[1],x=e.style,w=e.className,k=e.children,_=e.zIndex,P=(0,o.Z)(e,y),S=e.id||b;(0,c.useLayoutEffect)((function(){O((function(e){return _objectSpread({},e)}))}),[e]);var N=(0,c.useCallback)((function(e){var t;O((function(e){return _objectSpread(_objectSpread({},e),{},{"show":!1})})),null==e||null===(t=e.onClose)||void 0===t||t.call(e)}),[]),C=function tShowListener(e){var t=Object.assign(Object.assign({},g),function parseOptions(e){return(0,d.BP)(e)?e:{"message":e}}(e));"#van-toast"!==t.selector&&t.selector.replace("#","")!==S||(p.Z.clear(),O((function(e){return _objectSpread(_objectSpread({},e),t)})),clearTimeout(h),null!=t.duration&&t.duration>0&&(h=setTimeout((function(){(0,v.X)("toast_clear",e)}),t.duration)))},Z=(0,c.useCallback)((function(e){N(e)}),[]),E=(0,c.useCallback)((function(e){g=Object.assign(g,e)}),[]),D=(0,c.useCallback)((function(){g=Object.assign({},j)}),[]);return(0,c.useEffect)((function(){return(0,v.on)("toast_show",C),(0,v.on)("toast_clear",Z),(0,v.on)("toast_setDefaultOptions",E),(0,v.on)("toast_resetDefaultOptions",D),function(){(0,v.S)("toast_show",C),(0,v.S)("toast_clear",Z),(0,v.S)("toast_setDefaultOptions",E),(0,v.S)("toast_resetDefaultOptions",D)}}),[]),(0,m.jsxs)(s.G7,{"children":[(r.mask||r.forbidClick)&&(0,m.jsx)(u.Z,{"show":r.show,"zIndex":_,"style":r.mask?"":"background-color: transparent;"}),(0,m.jsx)(i.Z,{"show":r.show,"style":_?{"zIndex":_}:{},"className":"van-toast__container","children":(0,m.jsxs)(s.G7,_objectSpread(_objectSpread({"id":"van-toast","className":"van-toast van-toast--"+("text"===r.type||"html"===r.type?"text":"icon")+" van-toast--".concat(r.position," ").concat(w),"style":x,"onTouchMove":function noop(){}},P),{},{"children":["text"===r.type?(0,m.jsx)(s.xv,{"children":r.message}):"html"===r.type?(0,m.jsx)(s.Ho,{"nodes":r.message}):(0,m.jsxs)(s.G7,{"className":"van-toast__box","children":["loading"===r.type?(0,m.jsx)(f.Z,{"color":"white","type":r.loadingType,"className":"van-toast__loading"}):(0,m.jsx)(l.Z,{"className":"van-toast__icon","name":r.type}),r.message&&(0,m.jsx)(s.xv,{"className":"van-toast__text","children":r.message})]}),k]}))})]})}Toast.show=p.Z,Toast.loading=p.Z.loading,Toast.success=p.Z.success,Toast.fail=p.Z.fail,Toast.clear=p.Z.clear,Toast.setDefaultOptions=p.Z.setDefaultOptions,Toast.resetDefaultOptions=p.Z.resetDefaultOptions,t.Z=Toast},"3035":function(e,t,n){"use strict";var r=n(5448),o=n(9808);var a=function createMethod(e){return function(t){return s(Object.assign({"type":e},function parseOptions(e){return(0,r.BP)(e)?e:{"message":e}}(t)))}},s=function Toast(e){(0,o.X)("toast_show",e)};s.loading=a("loading"),s.success=a("success"),s.fail=a("fail"),s.clear=function(e){(0,o.X)("toast_clear",e)},s.setDefaultOptions=function(e){(0,o.X)("toast_setDefaultOptions",e)},s.resetDefaultOptions=function(){(0,o.X)("toast_resetDefaultOptions")},t.Z=s},"6933":function(e,t,n){"use strict";n.d(t,{"Z":function(){return l}});var r=n(6666),o=n(2159),a=n(3003),s=n(1152);var c=n(6645),i=n(2322),u=["onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave","onEnter","onLeave","duration","name","show","children","style","className","enterClass","enterActiveClass","enterToClass","leaveClass","leaveActiveClass","leaveToClass"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function Transition(e){var t,n=e.onBeforeEnter,r=e.onBeforeLeave,l=e.onAfterEnter,f=e.onAfterLeave,d=e.onEnter,v=e.onLeave,p=e.duration,m=e.name,y=e.show,b=e.children,j=e.style,g=e.className,h=e.enterClass,O=e.enterActiveClass,x=e.enterToClass,w=e.leaveClass,k=e.leaveActiveClass,_=e.leaveToClass,P=(0,o.Z)(e,u),S=(0,c.Y)({"show":y,"duration":p,"name":m,"enterClass":h,"enterActiveClass":O,"enterToClass":x,"leaveClass":w,"leaveActiveClass":k,"leaveToClass":_,"onBeforeEnter":n,"onBeforeLeave":r,"onAfterEnter":l,"onAfterLeave":f,"onEnter":d,"onLeave":v}),N=S.currentDuration,C=S.classes,Z=S.display;return(0,i.jsx)(i.Fragment,{"children":(0,i.jsx)(a.G7,_objectSpread(_objectSpread({"className":"van-transition "+C+" ".concat(g||""),"style":s.oB([(t={"currentDuration":N,"display":Z},s.oB([{"-webkit-transition-duration":t.currentDuration+"ms","transition-duration":t.currentDuration+"ms"},t.display?null:"display: none",t.style])),j])},P),{},{"catchMove":!0,"children":b}))})}},"7546":function(e,t,n){"use strict";n.d(t,{"N":function(){return addUnit}});var r=n(1448);function addUnit(e){if(null!=e)return/^-?\d+(\.\d+)?$/.test(""+e)?(0,r.uk)(e):e}},"8043":function(e,t,n){"use strict";function isArray(e){return e&&"[object Array]"===toString.call(e)}n.d(t,{"k":function(){return isArray}})},"4560":function(e,t,n){"use strict";n.d(t,{"X":function(){return keys}});var r=new RegExp('{|}|"',"g");function keys(e){return JSON.stringify(e).replace(r,"").split(",").map((function(e){return e.split(":")[0]}))}},"1248":function(e,t,n){"use strict";n.d(t,{"o":function(){return style}});var r=n(8043),o=n(4560);function style(e){return r.k(e)?e.filter((function(e){return null!=e&&""!==e})).map((function(e){return style(e)})).join(";")||"":"[object Object]"===toString.call(e)?o.X(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[(n=t,null===(r=n.replace(new RegExp("[A-Z]","g"),(function(e){return"-"+e})))||void 0===r?void 0:r.toLowerCase()),[e[t]]].join(":");var n,r})).join(";")||"":e||""}},"1152":function(e,t,n){"use strict";n.d(t,{"Nn":function(){return c.N},"PH":function(){return u},"oB":function(){return i.o}});var r=n(6522),o=n(8043),a=n(4560),s="van-";function traversing(e,t){t&&("string"==typeof t||"number"==typeof t?e.push(t):o.k(t)?t.forEach((function(t){traversing(e,t)})):"object"===(0,r.Z)(t)&&a.X(t).forEach((function(n){t[n]&&e.push(n)})))}function serializer(e){if(1===e.length&&function isPrimitive(e){var t=(0,r.Z)(e);return"boolean"===t||"number"===t||"string"===t||"undefined"===t||null===e}(e[0]))return e[0];for(var t={},n=0;n<e.length;n++)t["key"+n]=e[n];return JSON.stringify(t)}var c=n(7546),i=n(1248),u=function memoize(e){var t={};return function(){var n=serializer(arguments);return void 0===t[n]&&(t[n]=function call(e,t){return 2===t.length?e(t[0],t[1]):1===t.length?e(t[0]):e()}(e,arguments)),t[n]}}((function _bem(e,t){var n=[];return traversing(n,t),function join(e,t){return e=s+e,(t=t.map((function(t){return e+"--"+t}))).unshift(e),t.join(" ")}(e,n)}))},"2779":function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=classNames.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(n=function(){return classNames}.apply(t,[]))||(e.exports=n)}()},"1837":function(e,t,n){"use strict";var r=n(2784),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":a,"_owner":c.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},"2322":function(e,t,n){"use strict";e.exports=n(1837)},"2159":function(e,t,n){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{"Z":function(){return _objectWithoutProperties}})}}]);