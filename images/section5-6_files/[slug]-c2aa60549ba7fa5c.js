(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8417],{18142:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return s}});var i=r(69050),n=r(65920),o=(r(68562),r(44894)),a=r(85893);var s=!0;t.default=function(e){let{page:t,preview:r}=e;const s=t.content.pageHeader.heading,l=[{href:"/",title:"Home"},{href:"/store",title:"My Nintendo Store"},{href:"/store/games",title:"Games"},{href:"/store/games/[slug]",title:s}];return(0,a.jsx)(o.Kq,{preview:r,children:(0,a.jsx)(n.Z,{breadcrumbLinks:l,page:t.content,showRating:t.showRating,filterSections:i.G,analytics:{pageName:`Games PLP - ${s}`}})})}},65920:function(e,t,r){"use strict";var i=r(59499),n=r(4730),o=r(67294),a=r(11163),s=r(8540),l=r(35201),d=r(37884),u=r(72854),c=r(69050),m=r(95695),p=r(90042),h=r(82585),f=r(76734),g=r(3794),b=r(68636),v=r(48042),y=r(69323),x=r(60572),w=r(32377),j=r(84826),P=(r(45967),r(72516)),S=r(59595),_=r(88311),O=r(85893);const N=["title","attribute"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=e=>{let{breadcrumbLinks:t,filterSections:r,lightScrim:i,page:I,pageIcon:k,showRating:F,analytics:C}=e;const{pageHeader:R,ctaCollection:B,merchandisedGrid:G,legalText:E}=I||{};(0,x.r)();const{text:H}=(0,s.i1)(),{query:L,pathname:Z,locale:z}=(0,a.useRouter)(),{trackSortInteraction:A}=(0,d.u)(),{0:D,1:T}=(0,o.useState)(),{0:X,1:q}=(0,o.useState)((()=>P.Xx[0].value)),{isFilterModalOpen:V,selectedSortByOption:Q,toggleModalFiltersMenu:W,handleSortByChange:K}=(0,u.sI)({sortBy:X,sortByOptions:P.Xx,applySortBy:e=>{const t=P.Xx.find((t=>t.value===e));t&&C.pageName&&A(t,C.pageName),q((()=>e))}}),Y=(0,o.useMemo)((()=>P.Xx.map((e=>{let{value:t,label:r}=e;return{value:t,label:H(r)}}))),[H]),$=(0,o.useMemo)((()=>({value:Q.value,label:H(Q.label)})),[Q,H]),J=(0,o.useMemo)((()=>z===P.bA||z===P.oV?r.map((e=>e.attribute===c.F.ESRB_RATING?z===P.bA?c.w:c.v:e)):r),[z,r]),U=(0,o.useMemo)((()=>J.map((e=>{let{attribute:t}=e;return t}))),[J]),ee=(G||[]).flat(),te=(G||[]).flat().filter((e=>{let{sku:t}=e;return Boolean(t)})),{appliedFilters:re,filteredProducts:ie,filteredState:ne,refine:oe,refineByQuery:ae,clearFilters:se}=(0,u.x3)(te,U,{operator:u.fP.AND,queryToInitializeFilters:L}),le=0===(null===re||void 0===re?void 0:re.length)&&Q.value===P.Xx[0].value?ee:ie,de=(0,w.Z)(w.o.DESKTOP),ue=(0,o.useMemo)((()=>X?[...le].sort(X("name")):le),[le,X]),ce=(0,o.useMemo)((()=>re.map((e=>({attribute:e.split(u.HA)[0],label:e.split(u.HA)[1],value:e})))),[re]),me=(0,o.useMemo)((()=>J.filter((e=>{var t,r;let{attribute:i}=e;return(null===(t=ne[i])||void 0===t||null===(r=t.items)||void 0===r?void 0:r.length)>0})).map(((e,t)=>{var r;let{title:i,attribute:o}=e,a=(0,n.Z)(e,N);return(0,O.jsx)(m.A,M({attribute:o,title:i&&H(i),startCollapsed:0!==t,refine:oe,items:(null===(r=ne[o])||void 0===r?void 0:r.items)||[],showMoreLabel:H("Show more"),showLessLabel:H("Show less"),collapsible:!0,limit:5,showMore:!0,analytics:{pageName:null===C||void 0===C?void 0:C.pageName}},a),o)}))),[J,ne,oe,H,C]),pe=(0,o.useMemo)((()=>(0,O.jsx)(p.c,{children:ue.map(((e,t)=>e.sku?(0,O.jsx)(j.I8,M(M({},e),{},{constrain:!1,showRating:F||!1}),e.sku+t):(0,O.jsx)(S.Z,{asset:e.asset.primary.assetPath,cta:e.cta,heading:e.heading},e.heading+t)))})),[F,ue]);(0,o.useEffect)((()=>{ae(L)}),[ae,L]),(0,o.useEffect)((()=>{T(window.innerWidth)}),[de]);const he=(0,o.useMemo)((()=>(0,O.jsx)(b.B,{currentPage:Z,children:t.map(((e,t)=>(0,O.jsx)(l.Z,{href:e.href,children:(0,O.jsx)("a",{children:H(e.title)})},e.title+t)))})),[t,H,Z]),fe=(0,o.useMemo)((()=>{var e,t,r;return(0,O.jsx)(j.tm,{iconName:k,content:{assetPath:null===(e=R.asset)||void 0===e||null===(t=e.primary)||void 0===t?void 0:t.assetPath,assetPathAlt:null===(r=R.asset)||void 0===r?void 0:r.alt,background:R.background,cta:R.cta,description:R.description,heading:R.heading,modifiers:R.modifiers},lightScrim:i})}),[R,k,i]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(j.JL,{children:t&&he}),fe,(null===B||void 0===B?void 0:B.list.length)>0&&(0,O.jsx)(j.$0,{constrained:!0,small:!0,divider:["bottom"],children:(0,O.jsx)(j.l6,{center:!0,items:B.list})}),(0,O.jsx)(v.S,{size:48,axis:"vertical"}),(0,O.jsxs)(j.He,{children:[(0,O.jsxs)(_.zB,{breadcrumbs:!!t,children:[(0,O.jsx)(p.D,{children:t&&he}),(0,O.jsx)(h.S,{label:H("Sort by"),onSelect:K,options:Y,dropdownValue:$}),(0,O.jsx)(p.M,{children:(0,O.jsx)(f.F,{icon:y.Z,variant:"tertiary",onClick:W,children:H("Filter")})})]}),(0,O.jsx)(v.S,{size:32,axis:"vertical"}),(0,O.jsx)(g.F,{enableStickyFilterPanel:!0,isFilterModalOpen:V,toggleModalFiltersMenu:W,attributeFilterSets:me,screenWidth:D,customizeFilters:{clearFilters:se,removeFilter:oe,activeFilters:ce},children:pe}),E&&(0,O.jsx)(_.VH,{children:(0,O.jsx)(j.Ho,{data:E,textVariant:"legal"})})]}),(0,O.jsx)(j.y4,{})]})}},88311:function(e,t,r){"use strict";r.d(t,{VH:function(){return s},VR:function(){return a},zB:function(){return o}});var i=r(37797),n=r(90042);const o=(0,i.default)(n.S).withConfig({displayName:"PLPstyles__StyledSortContainer",componentId:"sc-qsladu-0"})(["justify-content:",";","{align-items:",";}"],(e=>{let{breadcrumbs:t}=e;return t?"space-between":"flex-end"}),(e=>{let{theme:t}=e;return t.mediaQuery.desktop}),(e=>{let{breadcrumbs:t}=e;return t?"center":"unset"})),a=i.default.div.withConfig({displayName:"PLPstyles__ButtonRow",componentId:"sc-qsladu-1"})(["display:flex;justify-content:center;margin-top:",";"],(e=>{let{theme:t}=e;return t.spacing[32]})),s=i.default.div.withConfig({displayName:"PLPstyles__LegalText",componentId:"sc-qsladu-2"})(["margin-top:",";text-align:center;","{margin-top:",";}"],(e=>{let{theme:t}=e;return t.spacing[32]}),(e=>{let{theme:t}=e;return t.mediaQuery.tablet}),(e=>{let{theme:t}=e;return t.spacing[48]}))},59595:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});r(67294);var i=r(63536),n=r(70290),o=r(52204),a=r(37797),s=r(29250);const l=a.default.a.withConfig({displayName:"PromoGridItemstyles__Root",componentId:"sc-wphed9-0"})(["grid-column:span 2;height:100%;position:relative;"]),d=a.default.div.withConfig({displayName:"PromoGridItemstyles__Wrapper",componentId:"sc-wphed9-1"})(["display:flex;flex-direction:column;justify-content:space-between;transition:opacity 1s "," 0ms;height:100%;"],(e=>{let{theme:t}=e;return t.movement.easing})),u=(0,a.default)(s.I).withConfig({displayName:"PromoGridItemstyles__StyledImage",componentId:"sc-wphed9-2"})(["border:none;border-top-left-radius:",";border-top-right-radius:",";border:1px solid ",";border-bottom:0;img{aspect-ratio:16 / 9;}transition:transform "," "," ",";@media (hover:hover) and (pointer:fine){&:hover{transform:translateY(-1rem);}}@media (prefers-reduced-motion){transition:none;@media (hover:hover) and (pointer:fine){&:hover{transform:translateY(0);}}}"],(e=>{let{theme:t}=e;return t.borderRadius}),(e=>{let{theme:t}=e;return t.borderRadius}),(e=>{let{theme:t}=e;return t.color.lightGray2}),(e=>{let{theme:t}=e;return t.movement.duration}),(e=>{let{theme:t}=e;return t.movement.easing}),(e=>{let{theme:t}=e;return t.movement.delay})),c=a.default.div.withConfig({displayName:"PromoGridItemstyles__Content",componentId:"sc-wphed9-3"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:",";width:100%;flex-grow:1;border:1px solid ",";border-top:0;border-bottom-left-radius:",";border-bottom-right-radius:",";position:relative;> * + *{margin-left:",";}&:after,&:before{content:'';height:16px;background:",";position:absolute;width:1px;top:-16px;}&:after{left:-1px;}&:before{right:-1px;}"],(e=>{let{theme:t}=e;return t.spacing[20]}),(e=>{let{theme:t}=e;return t.color.lightGray2}),(e=>{let{theme:t}=e;return t.borderRadius}),(e=>{let{theme:t}=e;return t.borderRadius}),(e=>{let{theme:t}=e;return t.spacing[24]}),(e=>{let{theme:t}=e;return t.color.lightGray2}));a.default.div.withConfig({displayName:"PromoGridItemstyles__Placeholder",componentId:"sc-wphed9-4"})(["height:100%;width:100%;position:absolute;top:0;left:0;z-index:",";opacity:",";transition:opacity 1s "," 0ms;"],(e=>{let{loaded:t}=e;return t?-1:1}),(e=>{let{loaded:t}=e;return t?0:1}),(e=>{let{theme:t}=e;return t.movement.easing}));var m=r(85893);var p=e=>{let{asset:t,cta:r,heading:a}=e;return(0,m.jsx)(l,{href:null===r||void 0===r?void 0:r.url,children:(0,m.jsxs)(d,{children:[(0,m.jsx)(u,{assetPath:t,crop:"pad",backgroundFillColor:i.uHP.color.black}),(0,m.jsxs)(c,{children:[(0,m.jsx)(n.H,{variant:"h3",children:a}),r&&(0,m.jsx)(o.B,{size:"small",children:r.title})]})]})})}},60572:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});var i=r(67294),n=r(26899);var o=()=>{const{updateScroll:e}=(0,n.lP)();(0,i.useEffect)((()=>{e()}),[])}},9303:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/store/games/[slug]",function(){return r(18142)}])}},function(e){e.O(0,[4231,4118,4894,9774,2888,179],(function(){return t=9303,e(e.s=t);var t}));var t=e.O();_N_E=t}]);