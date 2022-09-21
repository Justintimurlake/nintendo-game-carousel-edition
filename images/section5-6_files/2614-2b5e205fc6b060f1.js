"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2614],{76468:function(e,t,r){r.d(t,{Z:function(){return a}});r(67294);var i=r(45697),o=r.n(i),n=r(85893);const a=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",className:e.className,width:e.size,role:"presentation",alt:"","data-testid":"PlusIcon",...e,children:(0,n.jsx)("path",{fill:e.color,fillRule:"evenodd",d:"M32.04 12h-12V0h-8v12h-12v8h12v12h8V20h12v-8z"})});a.propTypes={className:o().string,color:o().string,size:o().oneOfType([o().number,o().string])},a.defaultProps={color:"currentColor",size:24}},88311:function(e,t,r){r.d(t,{VH:function(){return s},VR:function(){return a},zB:function(){return n}});var i=r(37797),o=r(90042);const n=(0,i.default)(o.S).withConfig({displayName:"PLPstyles__StyledSortContainer",componentId:"sc-qsladu-0"})(["justify-content:",";","{align-items:",";}"],(e=>{let{breadcrumbs:t}=e;return t?"space-between":"flex-end"}),(e=>{let{theme:t}=e;return t.mediaQuery.desktop}),(e=>{let{breadcrumbs:t}=e;return t?"center":"unset"})),a=i.default.div.withConfig({displayName:"PLPstyles__ButtonRow",componentId:"sc-qsladu-1"})(["display:flex;justify-content:center;margin-top:",";"],(e=>{let{theme:t}=e;return t.spacing[32]})),s=i.default.div.withConfig({displayName:"PLPstyles__LegalText",componentId:"sc-qsladu-2"})(["margin-top:",";text-align:center;","{margin-top:",";}"],(e=>{let{theme:t}=e;return t.spacing[32]}),(e=>{let{theme:t}=e;return t.mediaQuery.tablet}),(e=>{let{theme:t}=e;return t.spacing[48]}))},12614:function(e,t,r){r.d(t,{Z:function(){return Y}});var i=r(59499),o=r(4730),n=r(67294),a=r(11163),s=r(8540),l=r(35201),c=r(3794),d=r(72854),u=r(37884),p=r(69050),m=r(95695),h=r(90042),g=r(45697),f=r.n(g),y=r(66134),b=r(33783),v=r(64877),x=r(85893);const P=e=>{const{artPath:t,padImage:r,productLink:i,productTitle:o,productPlatform:a,platformCode:s,platformColor:l,platinumPoints:c,priceProps:d,productCategory:p,productId:m,publishDate:h,manufacturer:g,softwarePublisher:f,lang:P,imageProps:j,releaseDateDisplay:w,sku:C,nsuid:k,flagProps:I,analytics:N}=e,L=(0,n.useMemo)((()=>({sku:C,nsuid:k,platformCode:s})),[C,k,s]),S=(0,n.useMemo)((()=>({name:o,sku:C,publishDate:h,platform:{label:a},prices:{minimum:{currency:null===d||void 0===d?void 0:d.currency,finalPrice:null===d||void 0===d?void 0:d.finalPrice}},manufacturer:g,softwarePublisher:f})),[C,o,h,d,a,f,g]),M=(0,n.useRef)(),{wishlistConfig:O}=(0,b.u)({lang:P,product:L}),{itemClicked:_}=(0,v.u)(),{trackResultClick:D}=(0,u.u)(),R=(0,n.useCallback)((async e=>{const t=e.target.closest("a");M.current.contains(t)&&(D({result:S,...N}),await _(C,{...N||{}}))}),[_,D,S,N,C]);return(0,x.jsx)("div",{ref:M,onClick:R,children:(0,x.jsx)(y.P,{artPath:t,padImage:r,productLink:i,productTitle:o,productPlatform:a,priceProps:w?null:d,productCategory:p,platformColor:l,platinumPoints:c,productId:m,lang:P,imageProps:j,wishlistProps:O,flagProps:I})})};P.propTypes={artPath:f().string,padImage:f().bool,productLink:f().string,productTitle:f().string,productPlatform:f().string,platformCode:f().string,platformColor:f().string,platinumPoints:f().number,priceProps:f().shape({currency:f().string,regPrice:f().string,finalPrice:f().string,salePrice:f().string}),productCategory:f().string,publishDate:f().string,productId:f().string,lang:f().string,manufacturer:f().string,releaseDateDisplay:f().number,sku:f().string,softwarePublisher:f().string,nsuid:f().string,imageProps:f().shape({showPlaceholder:f().bool,lazyLoad:f().bool}),flagProps:f().shape({bgColor:f().string,children:f().oneOfType([f().string,f().node])}),analytics:f().shape({searchId:f().string,eventName:f().string,position:f().number,locale:f().string,pageName:f().string,itemListDetails:f().shape({id:f().string.isRequired,name:f().string.isRequired}),query:f().string,categoryName:f().string})};var j=P,w=r(48042),C=r(37797),k=r(52204),I=r(76468);const N=e=>{const{className:t,children:r,isLoading:i,onClick:o}=e,a=(0,n.useCallback)((()=>{o&&o()}),[o]);return(0,x.jsx)(k.B,{className:t,icon:I.Z,isLoading:i,onClick:a,variant:"tertiary",children:r})};N.propTypes={className:f().string,isLoading:f().bool,onClick:f().func,children:f().node};var L=N;const S=(0,C.default)(L).withConfig({displayName:"LoadMoreSectionstyles__StyledLoadMoreButton",componentId:"sc-y6xsxn-0"})(["display:flex;margin-left:auto;margin-right:auto;"]),M=e=>{const{hasMore:t,isLoading:r,onLoadMoreClick:i}=e,{text:o}=(0,s.i1)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w.S,{axis:"vertical",size:24}),t&&(0,x.jsx)(S,{isLoading:r,onClick:i,children:o("Load more results")})]})};M.propTypes={isLoading:f().bool,hasMore:f().bool,onLoadMoreClick:f().func.isRequired};var O=M,_=r(82585),D=r(76734),R=r(68636),B=r(69323),F=r(60572),Z=r(32377),T=r(84826),z=(r(45967),r(72516)),G=r(87166);var q=r(59595),E=r(88311);const V=["p"],A=["title","attribute"],H=["objectID"],$=["objectID"];function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Q="nintendo.plp.cache";var Y=function(e){var t,r,i,g;let{page:f,pageIcon:y,filterSections:b,breadcrumbLinks:v,analytics:P,cachePrefix:C}=e;const{pageHeader:N,ctaCollection:L,merchandisedGrid:S}=f,{state:{isSearching:M,searchHits:J,hasMore:Y,sortBy:K,sortByOptions:U,activeFilters:X},actions:{loadMore:ee,applySortBy:te}}=(0,c.u)();(0,F.r)();const{isFilterModalOpen:re,selectedSortByOption:ie,toggleModalFiltersMenu:oe,handleSortByChange:ne}=(0,d.sI)({sortBy:K,sortByOptions:U,applySortBy:te,analytics:{pageName:P.pageName}}),ae=(0,a.useRouter)(),{text:se}=(0,s.i1)(),{trackLoadMoreProducts:le}=(0,u.u)(),ce=(0,n.useCallback)((()=>{const{pageName:e}=P||{};e&&le(e),ee&&ee()}),[ee,le,P]),de=(0,n.useMemo)((()=>U.map((e=>{let{value:t,label:r}=e;return{value:t,label:se(r)}}))),[U,se]),ue=(0,n.useRef)(),pe=(0,n.useRef)(),me=(0,n.useMemo)((()=>{var e;const t=ae.query,{p:r}=t,i=(0,o.Z)(t,V),n=((e,t)=>{try{return JSON.parse(sessionStorage.getItem(e))||t}catch{return t}})(Q,{}),a=null===J||void 0===J||null===(e=J[0])||void 0===e?void 0:e.searchId,s=`${C}_${JSON.stringify(i)}`,l=pe.current&&a!==pe.current?{}:n[s]||{};return J.forEach((e=>{l[e.objectID]=W({},e)})),((e,t)=>{try{sessionStorage.setItem(e,JSON.stringify(t))}catch{return null}})(Q,{[s]:l}),pe.current=a,Object.values(l).sort(((e,t)=>e.resultsPosition-t.resultsPosition))}),[J,C,ae]),he=(0,n.useMemo)((()=>({value:ie.value,label:se(ie.label)})),[ie,se]),ge=(0,n.useMemo)((()=>ae.locale===z.bA||ae.locale===z.oV?b.map((e=>e.attribute===p.F.ESRB_RATING?ae.locale===z.bA?p.w:p.v:e)):b),[ae.locale,b]),{0:fe,1:ye}=(0,n.useState)(),be="1"===(null===ae||void 0===ae||null===(t=ae.query)||void 0===t?void 0:t.show),ve=(null===P||void 0===P?void 0:P.eventPrefix)&&`${null===P||void 0===P?void 0:P.eventPrefix} PLP: Product Clicked`,xe=(0,Z.Z)(Z.o.DESKTOP),Pe=(0,n.useCallback)((()=>{const{pageName:e}=P;le(e),ae.push({query:W(W({},ae.query),{},{show:1})},void 0,{shallow:!0})}),[ae,P,le]),je=(0,n.useMemo)((()=>ge.map(((e,t)=>{let{title:r,attribute:i}=e,n=(0,o.Z)(e,A);return(0,x.jsx)(m.C,W({title:r&&se(r),attribute:i,startCollapsed:0!==t,showMoreLabel:se("Show more"),showLessLabel:se("Show less"),collapsible:!0,limit:5,showMore:!0,analytics:{pageName:P.pageName}},n),i)}))),[ge,se,P]),we=(0,n.useMemo)((()=>!(null!==X&&void 0!==X&&X.length)&&(null===ie||void 0===ie?void 0:ie.value)===p.a.DEFAULT&&(null===S||void 0===S?void 0:S.length)>0),[X,ie,S]),Ce=(0,n.useMemo)((()=>we?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(h.c,{children:[S.map(((e,t)=>Array.isArray(e)?e.map(((e,t)=>(0,x.jsx)(T.I8,W(W({},e),{},{constrain:!1}),e.sku+t))):(0,x.jsx)(q.Z,{cta:e.cta,heading:e.heading,asset:e.asset.primary.assetPath},e.heading+t))),be&&me.map((e=>{let{objectID:t}=e,r=(0,o.Z)(e,H);return(0,x.jsx)(j,W(W({},r),{},{analytics:{eventName:ve,searchId:r.searchId,position:r.resultsPosition,locale:ae.locale,pageName:P.pageName,itemListDetails:{id:`plp-${(0,G.GL)(P.pageName)}`,name:P.pageName}}}),t)}))]}),be?(0,x.jsx)(O,{isLoading:M,hasMore:Y,onLoadMoreClick:ce}):(0,x.jsx)(E.VR,{children:(0,x.jsx)(k.B,{variant:"tertiary",icon:I.Z,onClick:Pe,children:se("See all")})})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.c,{children:me.map((e=>{let{objectID:t}=e,r=(0,o.Z)(e,$);return(0,x.jsx)(j,W(W({},r),{},{analytics:{eventName:ve,searchId:r.searchId,position:r.resultsPosition,locale:ae.locale,pageName:P.pageName,itemListDetails:{id:`plp-${(0,G.GL)(P.pageName)}`,name:P.pageName}}}),t)}))}),(0,x.jsx)(O,{isLoading:M,hasMore:Y,onLoadMoreClick:ce})]})),[be,ve,se,we,M,Y,ce,me,S,ae.locale,Pe,P]);(0,n.useEffect)((()=>{ye(window.innerWidth)}),[xe]),(0,n.useEffect)((()=>{ue.current&&ue.current.scrollIntoView()}),[X.length]);const ke=()=>(0,x.jsx)(R.B,{currentPage:ae.pathname,children:v.map(((e,t)=>(0,x.jsx)(l.Z,{href:e.href,children:(0,x.jsx)("a",{children:se(e.title)})},e.title+t)))});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(T.JL,{children:v&&ke()}),(0,x.jsx)(T.tm,{iconName:y,content:{assetPath:null===(r=N.asset)||void 0===r||null===(i=r.primary)||void 0===i?void 0:i.assetPath,assetPathAlt:null===(g=N.asset)||void 0===g?void 0:g.alt,background:N.background,cta:N.cta,description:N.description,heading:N.heading,modifiers:N.modifiers}}),L.list.length>0&&(0,x.jsx)(T.$0,{constrained:!0,small:!0,divider:["bottom"],children:(0,x.jsx)(T.l6,{center:!0,items:L.list})}),(0,x.jsx)("span",{ref:ue}),(0,x.jsx)(w.S,{size:48,axis:"vertical"}),(0,x.jsxs)(T.He,{children:[(0,x.jsxs)(E.zB,{breadcrumbs:!!v,children:[(0,x.jsx)(h.D,{children:v&&ke()}),(0,x.jsx)(_.S,{label:se("Sort by"),onSelect:ne,options:de,dropdownValue:he}),(0,x.jsx)(h.M,{children:(0,x.jsx)(D.F,{icon:B.Z,variant:"tertiary",onClick:oe,children:se("Filter")})})]}),(0,x.jsx)(w.S,{size:32,axis:"vertical"}),(0,x.jsx)(c.F,{enableStickyFilterPanel:!0,isFilterModalOpen:re,toggleModalFiltersMenu:oe,attributeFilterSets:je,screenWidth:fe,children:Ce})]}),(0,x.jsx)(T.y4,{})]})}},59595:function(e,t,r){r.d(t,{Z:function(){return m}});r(67294);var i=r(63536),o=r(70290),n=r(52204),a=r(37797),s=r(29250);const l=a.default.a.withConfig({displayName:"PromoGridItemstyles__Root",componentId:"sc-wphed9-0"})(["grid-column:span 2;height:100%;position:relative;"]),c=a.default.div.withConfig({displayName:"PromoGridItemstyles__Wrapper",componentId:"sc-wphed9-1"})(["display:flex;flex-direction:column;justify-content:space-between;transition:opacity 1s "," 0ms;height:100%;"],(e=>{let{theme:t}=e;return t.movement.easing})),d=(0,a.default)(s.I).withConfig({displayName:"PromoGridItemstyles__StyledImage",componentId:"sc-wphed9-2"})(["border:none;border-top-left-radius:",";border-top-right-radius:",";border:1px solid ",";border-bottom:0;img{aspect-ratio:16 / 9;}transition:transform "," "," ",";@media (hover:hover) and (pointer:fine){&:hover{transform:translateY(-1rem);}}@media (prefers-reduced-motion){transition:none;@media (hover:hover) and (pointer:fine){&:hover{transform:translateY(0);}}}"],(e=>{let{theme:t}=e;return t.borderRadius}),(e=>{let{theme:t}=e;return t.borderRadius}),(e=>{let{theme:t}=e;return t.color.lightGray2}),(e=>{let{theme:t}=e;return t.movement.duration}),(e=>{let{theme:t}=e;return t.movement.easing}),(e=>{let{theme:t}=e;return t.movement.delay})),u=a.default.div.withConfig({displayName:"PromoGridItemstyles__Content",componentId:"sc-wphed9-3"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:",";width:100%;flex-grow:1;border:1px solid ",";border-top:0;border-bottom-left-radius:",";border-bottom-right-radius:",";position:relative;> * + *{margin-left:",";}&:after,&:before{content:'';height:16px;background:",";position:absolute;width:1px;top:-16px;}&:after{left:-1px;}&:before{right:-1px;}"],(e=>{let{theme:t}=e;return t.spacing[20]}),(e=>{let{theme:t}=e;return t.color.lightGray2}),(e=>{let{theme:t}=e;return t.borderRadius}),(e=>{let{theme:t}=e;return t.borderRadius}),(e=>{let{theme:t}=e;return t.spacing[24]}),(e=>{let{theme:t}=e;return t.color.lightGray2}));a.default.div.withConfig({displayName:"PromoGridItemstyles__Placeholder",componentId:"sc-wphed9-4"})(["height:100%;width:100%;position:absolute;top:0;left:0;z-index:",";opacity:",";transition:opacity 1s "," 0ms;"],(e=>{let{loaded:t}=e;return t?-1:1}),(e=>{let{loaded:t}=e;return t?0:1}),(e=>{let{theme:t}=e;return t.movement.easing}));var p=r(85893);var m=e=>{let{asset:t,cta:r,heading:a}=e;return(0,p.jsx)(l,{href:null===r||void 0===r?void 0:r.url,children:(0,p.jsxs)(c,{children:[(0,p.jsx)(d,{assetPath:t,crop:"pad",backgroundFillColor:i.uHP.color.black}),(0,p.jsxs)(u,{children:[(0,p.jsx)(o.H,{variant:"h3",children:a}),r&&(0,p.jsx)(n.B,{size:"small",children:r.title})]})]})})}},60572:function(e,t,r){r.d(t,{r:function(){return n}});var i=r(67294),o=r(26899);var n=()=>{const{updateScroll:e}=(0,o.lP)();(0,i.useEffect)((()=>{e()}),[])}}}]);