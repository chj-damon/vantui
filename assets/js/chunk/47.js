(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"282":function(e,n,r){"use strict";(function(e){r.d(n,"a",(function(){return Page}));var c=r(281),s=r(280),t=r(31),a=r(27),i=(r(283),r(44));function Page(n){var r=n.title,d=n.children;return Object(a.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(t.pageScrollTo)({"scrollTop":0})})),Object(i.jsxs)(s.m,{"className":"demo-page","children":[Object(i.jsxs)(s.m,{"className":"demo-nav","children":[Object(i.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return t.default.navigateBack()}}),Object(i.jsxs)(s.m,{"className":"demo-nav__title","children":[r," "]})]}),d]})}}).call(this,r(121))},"283":function(e,n,r){},"284":function(e,n,r){"use strict";r.d(n,"a",(function(){return g}));var c=r(3),s=r.n(c),t=r(6),a=r.n(t),i=r(16),d=r.n(i),l=r(17),m=r.n(l),o=r(280),h=r(27),j=(r(285),r(44)),g=function(e){d()(Index,e);var n=m()(Index);function Index(){return s()(this,Index),n.call(this)}return a()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,r=e.title,c=e.card;return Object(j.jsxs)(o.m,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[r&&Object(j.jsx)(o.m,{"className":"demo-block__title","children":r}),c?Object(j.jsx)(o.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(h.Component)},"285":function(e,n,r){},"714":function(e,n,r){},"768":function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return f}));var c=r(5),s=r.n(c),t=r(3),a=r.n(t),i=r(6),d=r.n(i),l=r(24),m=r.n(l),o=r(16),h=r.n(o),j=r(17),g=r.n(j),b=r(9),p=r.n(b),u=r(27),x=r(281),O=r(282),N=r(284),y=(r(714),r(44)),f=function(e){h()(Index,e);var n=g()(Index);function Index(){var e;return a()(this,Index),e=n.call(this),p()(m()(e),"state",{"show":{"success":!0,"primary":!0}}),p()(m()(e),"onClose",(function(n){e.setState({"show":s()(s()({},e.state.show),{},p()({},n.target.id,!1))})})),e}return d()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(y.jsx)(O.a,{"title":"Tag 标记","children":Object(y.jsxs)(y.Fragment,{"children":[Object(y.jsxs)(N.a,{"title":"基础用法","padding":!0,"children":[Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"primary","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"success","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"danger","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"warning","children":"标签"})]}),Object(y.jsxs)(N.a,{"title":"圆角样式","padding":!0,"children":[Object(y.jsx)(x.hb,{"className":"demo-margin-right","round":!0,"type":"primary","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","round":!0,"type":"success","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","round":!0,"type":"danger","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","round":!0,"type":"warning","children":"标签"})]}),Object(y.jsxs)(N.a,{"title":"标记样式","padding":!0,"children":[Object(y.jsx)(x.hb,{"className":"demo-margin-right","mark":!0,"type":"primary","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","mark":!0,"type":"success","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","mark":!0,"type":"danger","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","mark":!0,"type":"warning","children":"标签"})]}),Object(y.jsxs)(N.a,{"title":"空心样式","padding":!0,"children":[Object(y.jsx)(x.hb,{"className":"demo-margin-right","plain":!0,"type":"primary","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","plain":!0,"type":"success","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","plain":!0,"type":"danger","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","plain":!0,"type":"warning","children":"标签"})]}),Object(y.jsxs)(N.a,{"title":"自定义颜色","padding":!0,"children":[Object(y.jsx)(x.hb,{"className":"demo-margin-right","color":"#f2826a","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","color":"#7232dd","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","color":"#7232dd","plain":!0,"children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","color":"#ffe1e1","textColor":"#ad0000","children":"标签"})]}),Object(y.jsxs)(N.a,{"title":"标签大小","padding":!0,"children":[Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"danger","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"danger","size":"medium","children":"标签"}),Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"danger","size":"large","children":"标签"})]}),Object(y.jsxs)(N.a,{"title":"可关闭标签","padding":!0,"children":[e.primary&&Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"primary","size":"medium","closeable":!0,"id":"primary","onClose":this.onClose,"children":"标签"}),e.success&&Object(y.jsx)(x.hb,{"className":"demo-margin-right","type":"success","size":"medium","closeable":!0,"id":"success","onClose":this.onClose,"children":"标签"})]})]})})}}]),Index}(u.Component)}}]);