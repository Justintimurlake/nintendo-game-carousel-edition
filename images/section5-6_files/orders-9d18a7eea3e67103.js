(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6660],{59055:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return f},default:function(){return p}});var o=t(44225),n=t(8540),c=t(59499),i=t(67294),s=t(7692);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=t(11163),d=t(85893),f=!0;function p(){const e=(0,n.xe)(),r=function(e){var r,t;const o=(0,n.xe)(),c=(0,s.aM)(s.o$.CustomerOrderHistory,{page:1,locale:e,includeTotals:!0},{authenticated:!0,skip:!o.isLoggedIn}),{totals:u,orders:l}=(null===(r=c.data)||void 0===r?void 0:r.customer.orderHistory)||{},d=(0,i.useMemo)((()=>{var e;return{email:null===(e=c.data)||void 0===e?void 0:e.customer.email}}),[null===(t=c.data)||void 0===t?void 0:t.customer.email]),f=o.loading||o.isLoggedIn&&c.loading,{0:p,1:g}=(0,i.useState)({loading:f,orders:l,customer:d,meta:{totals:u},error:c.error,fetchMore:c.fetchMore,refetch:c.refetch});return(0,i.useEffect)((()=>{g((e=>a(a({},e),{},{loading:f,orders:l,customer:d,error:c.error,meta:{totals:u}})))}),[f,l,d,c.error,u]),p}((0,l.useRouter)().locale);return e.loading||r.loading?(0,d.jsx)(o.GV,{}):e.isLoggedIn?(0,d.jsx)(o.UT,{purchases:r.orders,totals:(null===r||void 0===r||null===(t=r.meta)||void 0===t?void 0:t.totals)||{},fetchMore:r.fetchMore,refetch:r.refetch}):(0,d.jsx)(o.tw,{});var t}},19159:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return t(59055)}])}},function(e){e.O(0,[1028,4225,9774,2888,179],(function(){return r=19159,e(e.s=r);var r}));var r=e.O();_N_E=r}]);