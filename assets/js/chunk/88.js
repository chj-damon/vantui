(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"269":function(n,e,t){"use strict";t.r(e),t.d(e,"taro_rich_text_core",(function(){return c}));var i=t(8),o=t.n(i),a=t(56),c=function(){function r(n){var e=this;Object(a.g)(this,n),this.renderNode=function(n){if("type"in n&&"text"===n.type)return(n.text||"").replace(/&nbsp;/g," ");if("name"in n&&n.name){var t=n.name,i=n.attrs,c=n.children,u={},s=[];if(i&&"object"===o()(i)){var p=function f(n){var e=i[n];if("style"===n&&"string"==typeof e){var t=e.split(";").map((function(n){return n.trim()})).filter((function(n){return n})),o={};return t.forEach((function(n){if(n){var e=/(.+): *(.+)/g.exec(n);if(e){var t=e[1],i=e[2],a=t.replace(/-([a-z])/g,(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return n[1].toUpperCase()}));o[a]=i}}})),Object.keys(o).length&&(u.style=o),"continue"}u[n]=e};for(var l in i)p(l)}return c&&c.length&&(s=c.map((function(n){return e.renderNode(n)}))),Object(a.e)(t,u,s)}return null}}return r.prototype.render=function(){var n=this.nodes,e=this.renderNode;return Array.isArray(n)?Object(a.e)(a.a,null,n.map((function(n){return e(n)}))):Object(a.e)(a.a,{"innerHTML":n})},r}()}}]);