(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"282":function(e,n,c){"use strict";(function(e){c.d(n,"a",(function(){return Page}));var t=c(281),a=c(280),i=c(31),d=c(27),o=(c(283),c(44));function Page(n){var c=n.title,s=n.children;return Object(d.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(i.pageScrollTo)({"scrollTop":0})})),Object(o.jsxs)(a.m,{"className":"demo-page","children":[Object(o.jsxs)(a.m,{"className":"demo-nav","children":[Object(o.jsx)(t.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return i.default.navigateBack()}}),Object(o.jsxs)(a.m,{"className":"demo-nav__title","children":[c," "]})]}),s]})}}).call(this,c(121))},"283":function(e,n,c){},"284":function(e,n,c){"use strict";c.d(n,"a",(function(){return b}));var t=c(3),a=c.n(t),i=c(6),d=c.n(i),o=c(16),s=c.n(o),r=c(17),l=c.n(r),h=c(280),u=c(27),j=(c(285),c(44)),b=function(e){s()(Index,e);var n=l()(Index);function Index(){return a()(this,Index),n.call(this)}return d()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,c=e.title,t=e.card;return Object(j.jsxs)(h.m,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[c&&Object(j.jsx)(h.m,{"className":"demo-block__title","children":c}),t?Object(j.jsx)(h.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(u.Component)},"285":function(e,n,c){},"709":function(e,n,c){},"762":function(e,n,c){"use strict";c.r(n),c.d(n,"default",(function(){return k}));var t=c(3),a=c.n(t),i=c(6),d=c.n(i),o=c(24),s=c.n(o),r=c(16),l=c.n(r),h=c(17),u=c.n(h),j=c(9),b=c.n(j),x=c(27),m=c(281),g=c(282),f=c(284),p=(c(709),c(44)),k=function(e){l()(Index,e);var n=u()(Index);function Index(){var e;return a()(this,Index),e=n.call(this),b()(s()(e),"state",{"checked":!0,"checked2":!0}),b()(s()(e),"onChange",(function(n){var c=n.detail;e.setState({"checked":c})})),b()(s()(e),"onChange2",(function(n){var c=n.detail;m.mb.confirm({"selector":"#switch-demo","title":"提示","message":"是否切换开关？"}).then((function(){e.setState({"checked2":c})})).catch((function(e){console.log(e)}))})),e}return d()(Index,[{"key":"render","value":function render(){var e=this.state,n=e.checked,c=e.checked2;return Object(p.jsx)(g.a,{"title":"Switch 开关","children":Object(p.jsxs)(p.Fragment,{"children":[Object(p.jsx)(f.a,{"title":"基础用法","padding":!0,"children":Object(p.jsx)(m.cb,{"checked":n,"onChange":this.onChange})}),Object(p.jsx)(f.a,{"title":"禁用状态","padding":!0,"children":Object(p.jsx)(m.cb,{"checked":n,"disabled":!0,"onChange":this.onChange})}),Object(p.jsx)(f.a,{"title":"加载状态","padding":!0,"children":Object(p.jsx)(m.cb,{"checked":n,"loading":!0,"onChange":this.onChange})}),Object(p.jsx)(f.a,{"title":"自定义大小","padding":!0,"children":Object(p.jsx)(m.cb,{"checked":n,"size":"24px","onChange":this.onChange})}),Object(p.jsx)(f.a,{"title":"自定义颜色","padding":!0,"children":Object(p.jsx)(m.cb,{"checked":n,"activeColor":"#07c160","inactiveColor":"#ee0a24","onChange":this.onChange})}),Object(p.jsx)(f.a,{"title":"异步控制","padding":!0,"children":Object(p.jsx)(m.cb,{"checked":c,"size":"36px","onChange":this.onChange2})}),Object(p.jsx)(m.q,{"id":"switch-demo"})]})})}}]),Index}(x.Component)}}]);