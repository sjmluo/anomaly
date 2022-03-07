(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[290],{65761:function(e,t,n){"use strict";var r=n(95318);t.Z=function(e,t){var n=e.raw,r=e.references;void 0===t&&(t={});var a=JSON.parse(n);if(!r||!r.length)return(0,o.documentToReactComponents)(a,t);var u={items:[{sys:{type:"Entry"},richText:a}],includes:{Entry:r.filter((function(e){return"ContentfulAsset"!==e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Entry",id:e.contentful_id}})})),Asset:r.filter((function(e){return"ContentfulAsset"===e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Asset",id:e.contentful_id}})}))}},c=(0,i.default)(u,{removeUnresolved:!0});return(0,o.documentToReactComponents)(c[0].richText,t)};var o=n(20374),i=r(n(51927))},92596:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r=n(67294),o=n(45697),i=n.n(o),a=n(11855),u=n(24550),c=n(64163),l=n(6326),f=n(86810),s=n(28339),p=n(3772),d=n(65761),E=n(33945),y=n(6125),m=n(11699);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=(0,r.memo)((function(e){var t=e.children,n=e.math,o=e.block,i=e.errorColor,a=e.renderError,u=e.settings,c=e.as,l=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e,["children","math","block","errorColor","renderError","settings","as"]),f=c||(o?"div":"span"),s=null!=t?t:n,p=(0,r.useState)({innerHtml:""}),d=p[0],E=p[1];return(0,r.useEffect)((function(){try{var e=m.Z.renderToString(s,v({displayMode:!!o,errorColor:i,throwOnError:!!a},u));E({innerHtml:e})}catch(e){if(!(e instanceof m.Z.ParseError||e instanceof TypeError))throw e;E(a?{errorElement:a(e)}:{innerHtml:e.message})}}),[o,s,i,a,u]),"errorElement"in d?d.errorElement:r.createElement(f,Object.assign({},l,{dangerouslySetInnerHTML:{__html:d.innerHtml}}))}));const g=e=>{let{data:t}=e;const n=(0,u.Z)(),o={renderMark:{[E.oN.BOLD]:e=>r.createElement("b",null,r.createElement("font",{color:n.palette.primary.main},e)),[E.oN.ITALIC]:e=>r.createElement("i",null,r.createElement("font",{color:n.palette.primary.main},e)),[E.oN.UNDERLINE]:e=>r.createElement("u",null,e),[E.oN.CODE]:e=>r.createElement(h,{math:e})},renderNode:{[E.Ev.HYPERLINK]:(e,t)=>r.createElement("a",{href:e.data.uri,target:"_blank",rel:"noreferrer"},t),[E.RG.HEADING_1]:(e,t)=>r.createElement("h1",null,t),[E.RG.HEADING_2]:(e,t)=>r.createElement("h2",null,t),[E.RG.HEADING_3]:(e,t)=>r.createElement("h3",null,t),[E.RG.HEADING_4]:(e,t)=>r.createElement("h4",null,t),[E.RG.HEADING_5]:(e,t)=>r.createElement("h5",null,t),[E.RG.HEADING_6]:(e,t)=>r.createElement("h6",null,t),[E.RG.OL_LIST]:(e,t)=>r.createElement("ol",null,t),[E.RG.UL_LIST]:(e,t)=>r.createElement("ul",null,t),[E.RG.LIST_ITEM]:(e,t)=>r.createElement("li",null,t),[E.RG.PARAGRAPH]:(e,t)=>""===e.content[0].value?r.createElement("br",null):r.createElement("p",null,t),[E.RG.QUOTE]:e=>r.createElement("blockquote",null,r.createElement(r.Fragment,null,'"',e.content[0].content[0].value,'"')),[E.RG.EMBEDDED_ASSET]:e=>{const{gatsbyImageData:t,description:n}=e.data.target;return r.createElement(y.G,{image:(0,y.d)(t),alt:n})}}};return r.createElement(a.Z,null,r.createElement(a.Z,{paddingX:{xs:0,sm:4,md:6}},(0,d.Z)(t.body,o)),r.createElement(a.Z,{paddingY:4},r.createElement(p.Z,null)),r.createElement(a.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},r.createElement(a.Z,{display:"flex",alignItems:"center"},r.createElement(a.Z,null,r.createElement(s.Z,{fontWeight:600},t.author.name),r.createElement(s.Z,{color:"text.secondary"},t.createdAt)))))};g.propTypes={data:i().shape({body:i().string,author:i().shape({name:i().string}),createdAt:i().string})};var b=g,T=n(52831),_=n(4942),A=n(63366),O=n(87462),I=n(38685),S=n(72372),D=n(48399),L=n(68893),N=n(26640),w=n(68913);function R(e){return(0,w.Z)("MuiListItemText",e)}var P=(0,n(2162).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),j=n(85893),H=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],M=(0,N.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,_.Z)({},"& .".concat(P.primary),t.primary),(0,_.Z)({},"& .".concat(P.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,O.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),G=r.forwardRef((function(e,t){var n=(0,L.Z)({props:e,name:"MuiListItemText"}),o=n.children,i=n.className,a=n.disableTypography,u=void 0!==a&&a,c=n.inset,l=void 0!==c&&c,f=n.primary,p=n.primaryTypographyProps,d=n.secondary,E=n.secondaryTypographyProps,y=(0,A.Z)(n,H),m=r.useContext(D.Z).dense,v=null!=f?f:o,h=d,g=(0,O.Z)({},n,{disableTypography:u,inset:l,primary:!!v,secondary:!!h,dense:m}),b=function(e){var t=e.classes,n=e.inset,r=e.primary,o=e.secondary,i={root:["root",n&&"inset",e.dense&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,S.Z)(i,R,t)}(g);return null==v||v.type===s.Z||u||(v=(0,j.jsx)(s.Z,(0,O.Z)({variant:m?"body2":"body1",className:b.primary,component:"span",display:"block"},p,{children:v}))),null==h||h.type===s.Z||u||(h=(0,j.jsx)(s.Z,(0,O.Z)({variant:"body2",className:b.secondary,color:"text.secondary",display:"block"},E,{children:h}))),(0,j.jsxs)(M,(0,O.Z)({className:(0,I.Z)(b.root,i),ownerState:g,ref:t},y,{children:[v,h]}))}));const x=e=>{let{data:t}=e;return(0,r.useEffect)((()=>{(async()=>{const e=document.querySelectorAll(".jarallax");if(!e||e&&0===e.length)return;const{jarallax:t}=await n.e(850).then(n.t.bind(n,43850,23));t(e,{speed:.2})})()})),r.createElement(a.Z,{className:"jarallax","data-jarallax":!0,"data-speed":"0.2",position:"relative",minHeight:{xs:400,sm:500,md:600},display:"flex",marginTop:-13,paddingTop:13,alignItems:"center",id:"agency__portfolio-item--js-scroll"},r.createElement(a.Z,{className:"jarallax-img",sx:{position:"absolute",objectFit:"cover",fontFamily:"object-fit: cover;",top:0,left:0,width:"100%",height:"100%",zIndex:-1,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}),r.createElement(a.Z,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,width:1,height:1,background:(0,T.Fq)("#161c2d",.6),zIndex:1}}),r.createElement(f.Z,{position:"relative",zIndex:2},r.createElement(a.Z,null,r.createElement(s.Z,{variant:"h3",sx:{fontWeight:400,color:"common.white",marginBottom:2}},t.title),r.createElement(a.Z,{display:"flex",alignItems:"center"},r.createElement(G,{sx:{margin:0},primary:t.author.name,secondary:t.createdAt,primaryTypographyProps:{variant:"h6",sx:{color:"common.white"}},secondaryTypographyProps:{sx:{color:(0,T.Fq)("#ffffff",.8)}}})))))};x.propTypes={data:i().shape({title:i().string,author:i().shape({name:i().string}),createdAt:i().string})};var B=x;const k=e=>{let{data:t}=e;const n=(0,u.Z)();return r.createElement(l.Z,{colorInvert:!0},r.createElement(a.Z,null,r.createElement(B,{data:t}),r.createElement(f.Z,null,r.createElement(c.ZP,{container:!0,spacing:4},r.createElement(b,{data:t}))),r.createElement(a.Z,{component:"svg",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1920 100.1",sx:{marginBottom:-1,width:1}},r.createElement("path",{fill:n.palette.alternate.main,d:"M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"}))))};k.propTypes={data:i().object};var C=k;const Z=e=>{let{data:t}=e;return r.createElement(C,{data:t.contentfulBlogPost})};Z.propTypes={data:i().shape({contentfulBlogPost:i().object})};var Y=Z},20374:function(e,t,n){"use strict";n(4477),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(67294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var c,l,f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),a=function(e){try{return!!e()}catch(t){return!0}},c=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!l.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:l},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,E=function(e){return d.call(e).slice(8,-1)},y="".split,m=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==E(e)?y.call(e,""):Object(e)}:Object,v=function(e){return m(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},h=function(e){return"object"==typeof e?null!==e:"function"==typeof e},g=function(e,t){if(!h(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!h(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!h(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!h(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,T=function(e,t){return b.call(e,t)},_=i.document,A=h(_)&&h(_.createElement),O=function(e){return A?_.createElement(e):{}},I=!c&&!a((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),S=Object.getOwnPropertyDescriptor,D={f:c?S:function(e,t){if(e=v(e),t=g(t,!0),I)try{return S(e,t)}catch(n){}if(T(e,t))return p(!s.f.call(e,t),e[t])}},L=function(e){if(!h(e))throw TypeError(String(e)+" is not an object");return e},N=Object.defineProperty,w={f:c?N:function(e,t,n){if(L(e),t=g(t,!0),L(n),I)try{return N(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=c?function(e,t,n){return w.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},P=function(e,t){try{R(i,e,t)}catch(n){i[e]=t}return t},j="__core-js_shared__",H=i[j]||P(j,{}),M=Function.toString;"function"!=typeof H.inspectSource&&(H.inspectSource=function(e){return M.call(e)});var G,x,B,k=H.inspectSource,C=i.WeakMap,Z="function"==typeof C&&/native code/.test(k(C)),Y=r((function(e){(e.exports=function(e,t){return H[e]||(H[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),U=0,F=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+F).toString(36)},W=Y("keys"),z=function(e){return W[e]||(W[e]=K(e))},Q={},q=i.WeakMap;if(Z){var V=H.state||(H.state=new q),X=V.get,J=V.has,$=V.set;G=function(e,t){return t.facade=e,$.call(V,e,t),t},x=function(e){return X.call(V,e)||{}},B=function(e){return J.call(V,e)}}else{var ee=z("state");Q[ee]=!0,G=function(e,t){return t.facade=e,R(e,ee,t),t},x=function(e){return T(e,ee)?e[ee]:{}},B=function(e){return T(e,ee)}}var te={set:G,get:x,has:B,enforce:function(e){return B(e)?x(e):G(e,{})},getterFor:function(e){return function(t){var n;if(!h(t)||(n=x(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=r((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,o,a){var u,c=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof t||T(o,"name")||R(o,"name",t),(u=n(o)).source||(u.source=r.join("string"==typeof t?t:""))),e!==i?(c?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=o:R(e,t,o)):l?e[t]=o:P(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||k(this)}))})),re=i,oe=function(e){return"function"==typeof e?e:void 0},ie=function(e,t){return arguments.length<2?oe(re[e])||oe(i[e]):re[e]&&re[e][t]||i[e]&&i[e][t]},ae=Math.ceil,ue=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?ue:ae)(e)},le=Math.min,fe=Math.max,se=Math.min,pe=function(e){return function(t,n,r){var o,i,a=v(t),u=(o=a.length)>0?le(ce(o),9007199254740991):0,c=function(e,t){var n=ce(e);return n<0?fe(n+t,0):se(n,t)}(r,u);if(e&&n!=n){for(;u>c;)if((i=a[c++])!=i)return!0}else for(;u>c;c++)if((e||c in a)&&a[c]===n)return e||c||0;return!e&&-1}},de={includes:pe(!0),indexOf:pe(!1)},Ee=de.indexOf,ye=function(e,t){var n,r=v(e),o=0,i=[];for(n in r)!T(Q,n)&&T(r,n)&&i.push(n);for(;t.length>o;)T(r,n=t[o++])&&(~Ee(i,n)||i.push(n));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=me.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return ye(e,ve)}},ge={f:Object.getOwnPropertySymbols},be=ie("Reflect","ownKeys")||function(e){var t=he.f(L(e)),n=ge.f;return n?t.concat(n(e)):t},Te=function(e,t){for(var n=be(t),r=w.f,o=D.f,i=0;i<n.length;i++){var a=n[i];T(e,a)||r(e,a,o(t,a))}},_e=/#|\.prototype\./,Ae=function(e,t){var n=Ie[Oe(e)];return n==De||n!=Se&&("function"==typeof t?a(t):!!t)},Oe=Ae.normalize=function(e){return String(e).replace(_e,".").toLowerCase()},Ie=Ae.data={},Se=Ae.NATIVE="N",De=Ae.POLYFILL="P",Le=Ae,Ne=D.f,we=function(e,t){var n,r,o,a,u,c=e.target,l=e.global,f=e.stat;if(n=l?i:f?i[c]||P(c,{}):(i[c]||{}).prototype)for(r in t){if(a=t[r],o=e.noTargetGet?(u=Ne(n,r))&&u.value:n[r],!Le(l?r:c+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;Te(a,o)}(e.sham||o&&o.sham)&&R(a,"sham",!0),ne(n,r,a,e)}},Re=Object.keys||function(e){return ye(e,me)},Pe=s.f,je=function(e){return function(t){for(var n,r=v(t),o=Re(r),i=o.length,a=0,u=[];i>a;)n=o[a++],c&&!Pe.call(r,n)||u.push(e?[n,r[n]]:r[n]);return u}},He=(je(!0),je(!1));we({target:"Object",stat:!0},{values:function(e){return He(e)}}),re.Object.values;var Me,Ge,xe="process"==E(i.process),Be=ie("navigator","userAgent")||"",ke=i.process,Ce=ke&&ke.versions,Ze=Ce&&Ce.v8;Ze?Ge=(Me=Ze.split("."))[0]+Me[1]:Be&&(!(Me=Be.match(/Edge\/(\d+)/))||Me[1]>=74)&&(Me=Be.match(/Chrome\/(\d+)/))&&(Ge=Me[1]);var Ye,Ue=Ge&&+Ge,Fe=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(xe?38===Ue:Ue>37&&Ue<41)})),Ke=Fe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,We=Y("wks"),ze=i.Symbol,Qe=Ke?ze:ze&&ze.withoutSetter||K,qe=c?Object.defineProperties:function(e,t){L(e);for(var n,r=Re(t),o=r.length,i=0;o>i;)w.f(e,n=r[i++],t[n]);return e},Ve=ie("document","documentElement"),Xe=z("IE_PROTO"),Je=function(){},$e=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ye=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ye?function(e){e.write($e("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ye):((t=O("iframe")).style.display="none",Ve.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write($e("document.F=Object")),e.close(),e.F);for(var n=me.length;n--;)delete et.prototype[me[n]];return et()};Q[Xe]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?(Je.prototype=L(e),n=new Je,Je.prototype=null,n[Xe]=e):n=et(),void 0===t?n:qe(n,t)},rt=(T(We,tt="unscopables")&&(Fe||"string"==typeof We[tt])||(Fe&&T(ze,tt)?We[tt]=ze[tt]:We[tt]=Qe("Symbol."+tt)),We[tt]),ot=Array.prototype;null==ot[rt]&&w.f(ot,rt,{configurable:!0,value:nt(null)});var it,at=de.includes;we({target:"Array",proto:!0},{includes:function(e){return at(this,e,arguments.length>1?arguments[1]:void 0)}}),it="includes",ot[rt][it]=!0;var ut,ct,lt,ft=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},st=Function.call;ut="includes",ft(st,i.Array.prototype[ut],ct),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(lt||(lt={}));var pt,dt=lt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(pt||(pt={}));var Et,yt=pt,mt=[dt.PARAGRAPH,dt.HEADING_1,dt.HEADING_2,dt.HEADING_3,dt.HEADING_4,dt.HEADING_5,dt.HEADING_6,dt.OL_LIST,dt.UL_LIST,dt.HR,dt.QUOTE,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],vt=[dt.HR,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],ht=((Et={})[dt.OL_LIST]=[dt.LIST_ITEM],Et[dt.UL_LIST]=[dt.LIST_ITEM],Et[dt.LIST_ITEM]=mt.slice(),Et[dt.QUOTE]=[dt.PARAGRAPH],Et),gt={nodeType:dt.DOCUMENT,data:{},content:[{nodeType:dt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},bt=Object.freeze({isInline:function(e){return Object.values(yt).includes(e.nodeType)},isBlock:function(e){return Object.values(dt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=dt,t.CONTAINERS=ht,t.EMPTY_DOCUMENT=gt,t.INLINES=yt,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=mt,t.VOID_BLOCKS=vt,t.helpers=bt}(c={exports:{}},c.exports),c.exports);(l=f)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var s,p,d=f.BLOCKS,E=(f.CONTAINERS,f.EMPTY_DOCUMENT,f.INLINES),y=f.MARKS,m=(f.TOP_LEVEL_BLOCKS,f.VOID_BLOCKS,f.helpers);function v(e,t){return e.map((function(e,n){return r=h(e,t),i=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:i}):r;var r,i}))}function h(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(m.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var a=v(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,a):i.createElement(i.Fragment,null,a)}var g=((s={})[d.DOCUMENT]=function(e,t){return t},s[d.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},s[d.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},s[d.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},s[d.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},s[d.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},s[d.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},s[d.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},s[d.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},s[d.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},s[d.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},s[d.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},s[d.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},s[d.HR]=function(){return i.createElement("hr",null)},s[E.ASSET_HYPERLINK]=function(e){return T(E.ASSET_HYPERLINK,e)},s[E.ENTRY_HYPERLINK]=function(e){return T(E.ENTRY_HYPERLINK,e)},s[E.EMBEDDED_ENTRY]=function(e){return T(E.EMBEDDED_ENTRY,e)},s[E.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},s),b=((p={})[y.BOLD]=function(e){return i.createElement("b",null,e)},p[y.ITALIC]=function(e){return i.createElement("i",null,e)},p[y.UNDERLINE]=function(e){return i.createElement("u",null,e)},p[y.CODE]=function(e){return i.createElement("code",null,e)},p);function T(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?h(e,{renderNode:a({},g,t.renderNode),renderMark:a({},b,t.renderMark),renderText:t.renderText}):null}},33945:function(e,t,n){"use strict";n(4477);var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var i,a,u=function(e){return e&&e.Math==Math&&e},c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof r&&r)||function(){return this}()||Function("return this")(),l=function(e){try{return!!e()}catch(t){return!0}},f=!l((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s=Function.prototype.call,p=s.bind?s.bind(s):function(){return s.apply(s,arguments)},d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,y={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},m=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},v=Function.prototype,h=v.bind,g=v.call,b=h&&h.bind(g),T=h?function(e){return e&&b(g,e)}:function(e){return e&&function(){return g.apply(e,arguments)}},_=T({}.toString),A=T("".slice),O=c.Object,I=T("".split),S=l((function(){return!O("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return A(_(e),8,-1)}(e)?I(e,""):O(e)}:O,D=c.TypeError,L=function(e){if(null==e)throw D("Can't call method on "+e);return e},N=function(e){return S(L(e))},w=function(e){return"function"==typeof e},R=function(e){return"object"==typeof e?null!==e:w(e)},P=function(e){return w(e)?e:void 0},j=function(e,t){return arguments.length<2?P(c[e]):c[e]&&c[e][t]},H=T({}.isPrototypeOf),M=j("navigator","userAgent")||"",G=c.process,x=c.Deno,B=G&&G.versions||x&&x.version,k=B&&B.v8;k&&(a=(i=k.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&M&&(!(i=M.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=M.match(/Chrome\/(\d+)/))&&(a=+i[1]);var C=a,Z=!!Object.getOwnPropertySymbols&&!l((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&C&&C<41})),Y=Z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,U=c.Object,F=Y?function(e){return"symbol"==typeof e}:function(e){var t=j("Symbol");return w(t)&&H(t.prototype,U(e))},K=c.String,W=c.TypeError,z=function(e){if(w(e))return e;throw W(function(e){try{return K(e)}catch(t){return"Object"}}(e)+" is not a function")},Q=c.TypeError,q=Object.defineProperty,V=function(e,t){try{q(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t},X="__core-js_shared__",J=c[X]||V(X,{}),$=o((function(e){(e.exports=function(e,t){return J[e]||(J[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),ee=c.Object,te=T({}.hasOwnProperty),ne=Object.hasOwn||function(e,t){return te(ee(L(e)),t)},re=0,oe=Math.random(),ie=T(1..toString),ae=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ie(++re+oe,36)},ue=$("wks"),ce=c.Symbol,le=ce&&ce.for,fe=Y?ce:ce&&ce.withoutSetter||ae,se=function(e){if(!ne(ue,e)||!Z&&"string"!=typeof ue[e]){var t="Symbol."+e;Z&&ne(ce,e)?ue[e]=ce[e]:ue[e]=Y&&le?le(t):fe(t)}return ue[e]},pe=c.TypeError,de=se("toPrimitive"),Ee=function(e,t){if(!R(e)||F(e))return e;var n,r,o=null==(n=e[de])?void 0:z(n);if(o){if(void 0===t&&(t="default"),r=p(o,e,t),!R(r)||F(r))return r;throw pe("Can't convert object to primitive value")}return void 0===t&&(t="number"),function(e,t){var n,r;if("string"===t&&w(n=e.toString)&&!R(r=p(n,e)))return r;if(w(n=e.valueOf)&&!R(r=p(n,e)))return r;if("string"!==t&&w(n=e.toString)&&!R(r=p(n,e)))return r;throw Q("Can't convert object to primitive value")}(e,t)},ye=function(e){var t=Ee(e,"string");return F(t)?t:t+""},me=c.document,ve=R(me)&&R(me.createElement),he=function(e){return ve?me.createElement(e):{}},ge=!f&&!l((function(){return 7!=Object.defineProperty(he("div"),"a",{get:function(){return 7}}).a})),be=Object.getOwnPropertyDescriptor,Te={f:f?be:function(e,t){if(e=N(e),t=ye(t),ge)try{return be(e,t)}catch(n){}if(ne(e,t))return m(!p(y.f,e,t),e[t])}},_e=c.String,Ae=c.TypeError,Oe=function(e){if(R(e))return e;throw Ae(_e(e)+" is not an object")},Ie=c.TypeError,Se=Object.defineProperty,De={f:f?Se:function(e,t,n){if(Oe(e),t=ye(t),Oe(n),ge)try{return Se(e,t,n)}catch(r){}if("get"in n||"set"in n)throw Ie("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},Le=f?function(e,t,n){return De.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},Ne=T(Function.toString);w(J.inspectSource)||(J.inspectSource=function(e){return Ne(e)});var we,Re,Pe,je=J.inspectSource,He=c.WeakMap,Me=w(He)&&/native code/.test(je(He)),Ge=$("keys"),xe=function(e){return Ge[e]||(Ge[e]=ae(e))},Be={},ke="Object already initialized",Ce=c.TypeError,Ze=c.WeakMap;if(Me||J.state){var Ye=J.state||(J.state=new Ze),Ue=T(Ye.get),Fe=T(Ye.has),Ke=T(Ye.set);we=function(e,t){if(Fe(Ye,e))throw new Ce(ke);return t.facade=e,Ke(Ye,e,t),t},Re=function(e){return Ue(Ye,e)||{}},Pe=function(e){return Fe(Ye,e)}}else{var We=xe("state");Be[We]=!0,we=function(e,t){if(ne(e,We))throw new Ce(ke);return t.facade=e,Le(e,We,t),t},Re=function(e){return ne(e,We)?e[We]:{}},Pe=function(e){return ne(e,We)}}var ze={set:we,get:Re,has:Pe,enforce:function(e){return Pe(e)?Re(e):we(e,{})},getterFor:function(e){return function(t){var n;if(!R(t)||(n=Re(t)).type!==e)throw Ce("Incompatible receiver, "+e+" required");return n}}},Qe=Function.prototype,qe=f&&Object.getOwnPropertyDescriptor,Ve=ne(Qe,"name"),Xe={EXISTS:Ve,PROPER:Ve&&"something"===function(){}.name,CONFIGURABLE:Ve&&(!f||f&&qe(Qe,"name").configurable)},Je=o((function(e){var t=Xe.CONFIGURABLE,n=ze.get,r=ze.enforce,o=String(String).split("String");(e.exports=function(e,n,i,a){var u,l=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,s=!!a&&!!a.noTargetGet,p=a&&void 0!==a.name?a.name:n;w(i)&&("Symbol("===String(p).slice(0,7)&&(p="["+String(p).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ne(i,"name")||t&&i.name!==p)&&Le(i,"name",p),(u=r(i)).source||(u.source=o.join("string"==typeof p?p:""))),e!==c?(l?!s&&e[n]&&(f=!0):delete e[n],f?e[n]=i:Le(e,n,i)):f?e[n]=i:V(n,i)})(Function.prototype,"toString",(function(){return w(this)&&n(this).source||je(this)}))})),$e=Math.ceil,et=Math.floor,tt=function(e){var t=+e;return t!=t||0===t?0:(t>0?et:$e)(t)},nt=Math.max,rt=Math.min,ot=Math.min,it=function(e){return(t=e.length)>0?ot(tt(t),9007199254740991):0;var t},at=function(e){return function(t,n,r){var o,i=N(t),a=it(i),u=function(e,t){var n=tt(e);return n<0?nt(n+t,0):rt(n,t)}(r,a);if(e&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((e||u in i)&&i[u]===n)return e||u||0;return!e&&-1}},ut={includes:at(!0),indexOf:at(!1)},ct=ut.indexOf,lt=T([].push),ft=function(e,t){var n,r=N(e),o=0,i=[];for(n in r)!ne(Be,n)&&ne(r,n)&&lt(i,n);for(;t.length>o;)ne(r,n=t[o++])&&(~ct(i,n)||lt(i,n));return i},st=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],pt=st.concat("length","prototype"),dt={f:Object.getOwnPropertyNames||function(e){return ft(e,pt)}},Et={f:Object.getOwnPropertySymbols},yt=T([].concat),mt=j("Reflect","ownKeys")||function(e){var t=dt.f(Oe(e)),n=Et.f;return n?yt(t,n(e)):t},vt=function(e,t){for(var n=mt(t),r=De.f,o=Te.f,i=0;i<n.length;i++){var a=n[i];ne(e,a)||r(e,a,o(t,a))}},ht=/#|\.prototype\./,gt=function(e,t){var n=Tt[bt(e)];return n==At||n!=_t&&(w(t)?l(t):!!t)},bt=gt.normalize=function(e){return String(e).replace(ht,".").toLowerCase()},Tt=gt.data={},_t=gt.NATIVE="N",At=gt.POLYFILL="P",Ot=gt,It=Te.f,St=function(e,t){var n,r,o,i,a,u=e.target,l=e.global,f=e.stat;if(n=l?c:f?c[u]||V(u,{}):(c[u]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(a=It(n,r))&&a.value:n[r],!Ot(l?r:u+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;vt(i,o)}(e.sham||o&&o.sham)&&Le(i,"sham",!0),Je(n,r,i,e)}},Dt=Object.keys||function(e){return ft(e,st)},Lt=T(y.f),Nt=T([].push),wt=function(e){return function(t){for(var n,r=N(t),o=Dt(r),i=o.length,a=0,u=[];i>a;)n=o[a++],f&&!Lt(r,n)||Nt(u,e?[n,r[n]]:r[n]);return u}},Rt={entries:wt(!0),values:wt(!1)}.values;St({target:"Object",stat:!0},{values:function(e){return Rt(e)}});c.Object.values;var Pt,jt=f?Object.defineProperties:function(e,t){Oe(e);for(var n,r=N(t),o=Dt(t),i=o.length,a=0;i>a;)De.f(e,n=o[a++],r[n]);return e},Ht=j("document","documentElement"),Mt=xe("IE_PROTO"),Gt=function(){},xt=function(e){return"<script>"+e+"</"+"script>"},Bt=function(e){e.write(xt("")),e.close();var t=e.parentWindow.Object;return e=null,t},kt=function(){try{Pt=new ActiveXObject("htmlfile")}catch(r){}var e,t;kt="undefined"!=typeof document?document.domain&&Pt?Bt(Pt):((t=he("iframe")).style.display="none",Ht.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(xt("document.F=Object")),e.close(),e.F):Bt(Pt);for(var n=st.length;n--;)delete kt.prototype[st[n]];return kt()};Be[Mt]=!0;var Ct=Object.create||function(e,t){var n;return null!==e?(Gt.prototype=Oe(e),n=new Gt,Gt.prototype=null,n[Mt]=e):n=kt(),void 0===t?n:jt(n,t)},Zt=se("unscopables"),Yt=Array.prototype;null==Yt[Zt]&&De.f(Yt,Zt,{configurable:!0,value:Ct(null)});var Ut,Ft=ut.includes;St({target:"Array",proto:!0},{includes:function(e){return Ft(this,e,arguments.length>1?arguments[1]:void 0)}}),Ut="includes",Yt[Zt][Ut]=!0;var Kt,Wt;Kt="includes",T(c["Array"].prototype[Kt]);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(Wt||(Wt={}));var zt,Qt=Wt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(zt||(zt={}));var qt,Vt=zt;!function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(qt||(qt={}));var Xt,Jt=qt,$t=[Qt.PARAGRAPH,Qt.HEADING_1,Qt.HEADING_2,Qt.HEADING_3,Qt.HEADING_4,Qt.HEADING_5,Qt.HEADING_6,Qt.OL_LIST,Qt.UL_LIST,Qt.HR,Qt.QUOTE,Qt.EMBEDDED_ENTRY,Qt.EMBEDDED_ASSET,Qt.TABLE],en=[Qt.PARAGRAPH,Qt.HEADING_1,Qt.HEADING_2,Qt.HEADING_3,Qt.HEADING_4,Qt.HEADING_5,Qt.HEADING_6,Qt.OL_LIST,Qt.UL_LIST,Qt.HR,Qt.QUOTE,Qt.EMBEDDED_ENTRY,Qt.EMBEDDED_ASSET],tn=[Qt.TABLE,Qt.TABLE_ROW,Qt.TABLE_CELL,Qt.TABLE_HEADER_CELL],nn=[Qt.HR,Qt.EMBEDDED_ENTRY,Qt.EMBEDDED_ASSET],rn=((Xt={})[Qt.OL_LIST]=[Qt.LIST_ITEM],Xt[Qt.UL_LIST]=[Qt.LIST_ITEM],Xt[Qt.LIST_ITEM]=en,Xt[Qt.QUOTE]=[Qt.PARAGRAPH],Xt[Qt.TABLE]=[Qt.TABLE_ROW],Xt[Qt.TABLE_ROW]=[Qt.TABLE_CELL,Qt.TABLE_HEADER_CELL],Xt[Qt.TABLE_CELL]=[Qt.PARAGRAPH],Xt[Qt.TABLE_HEADER_CELL]=[Qt.PARAGRAPH],Xt),on=[Qt.PARAGRAPH,Qt.HEADING_1,Qt.HEADING_2,Qt.HEADING_3,Qt.HEADING_4,Qt.HEADING_5,Qt.HEADING_6],an=[Qt.DOCUMENT,Qt.PARAGRAPH,Qt.HEADING_1,Qt.HEADING_2,Qt.HEADING_3,Qt.HEADING_4,Qt.HEADING_5,Qt.HEADING_6,Qt.OL_LIST,Qt.UL_LIST,Qt.LIST_ITEM,Qt.HR,Qt.QUOTE,Qt.EMBEDDED_ENTRY,Qt.EMBEDDED_ASSET,Vt.HYPERLINK,Vt.ENTRY_HYPERLINK,Vt.ASSET_HYPERLINK,Vt.EMBEDDED_ENTRY,"text"],un={nodeType:Qt.DOCUMENT,data:{},content:[{nodeType:Qt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var cn=Object.freeze({__proto__:null,isInline:function(e){return Object.values(Vt).includes(e.nodeType)},isBlock:function(e){return Object.values(Qt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.RG=Qt,t.Ev=Vt,t.oN=Jt},51927:function(e,t,n){"use strict";n.r(t);var r=n(18301),o=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u={},c=function(e){return e&&e.sys&&"Link"===e.sys.type},l=function(e){return e.type+"!"+e.id},f=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":i(t))){for(var a in t)t.hasOwnProperty(a)&&(t[a]=e(t[a],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==u}));for(var t in e)e[t]===u&&delete e[t];return e}(t))}return t},s=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,i=l({type:r,id:o});return e.get(i)||u}(e,t);return r===u?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(a(t),a(e.includes[n]))}),[]),i=[].concat(a(n.items),a(r)),u=new Map(i.map((function(e){return[l(e.sys),e]})));return i.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,f(n,c,(function(e){return s(u,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},18301:function(e,t,n){n(4477),e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,u=Object.getPrototypeOf,c=Object.prototype,l=c.hasOwnProperty,f=c.propertyIsEnumerable,s={SYMBOL_PROPERTIES:"function"==typeof a,WEAKMAP:"function"==typeof WeakMap},p=function(){if(s.WEAKMAP)return new WeakMap;var e=t({has:function(t){return!!~e._keys.indexOf(t)},set:function(t,n){e._keys.push(t),e._values.push(n)},get:function(t){return e._values[e._keys.indexOf(t)]}});return e._keys=[],e._values=[],e},d=function(n,r){if(!n.constructor)return t(null);var o=n.constructor,i=n.__proto__||u(n);if(o===r.Object)return i===r.Object.prototype?{}:t(i);if(~e.call(o).indexOf("[native code]"))try{return new o}catch(c){}return t(i)},E=function(e,t,n,r){var o=d(e,t);for(var i in r.set(e,o),e)l.call(e,i)&&(o[i]=n(e[i],r));if(s.SYMBOL_PROPERTIES){var u=a(e),c=u.length;if(c)for(var p=0,E=void 0;p<c;p++)E=u[p],f.call(e,E)&&(o[E]=n(e[E],r))}return o},y=function(e,t,n,u){var c=d(e,t);u.set(e,c);var l=s.SYMBOL_PROPERTIES?i(e).concat(a(e)):i(e),f=l.length;if(f)for(var p=0,E=void 0,y=void 0;p<f;p++)if("callee"!==(E=l[p])&&"caller"!==E)if(y=o(e,E)){y.get||y.set||(y.value=n(e[E],u));try{r(c,E,y)}catch(m){c[E]=y.value}}else c[E]=n(e[E],u);return c},m=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},v=Array.isArray,h="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:void(console&&console.error&&console.error('Unable to locate global object, returning "this".'));function g(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||h,o=n?y:E;return function e(t,i){if(!t||"object"!=typeof t)return t;if(i.has(t))return i.get(t);var a,u=t.constructor;if(u===r.Object)return o(t,r,e,i);if(v(t)){if(n)return y(t,r,e,i);var c=t.length;a=new u,i.set(t,a);for(var l=0;l<c;l++)a[l]=e(t[l],i);return a}if(t instanceof r.Date)return new u(t.getTime());if(t instanceof r.RegExp)return(a=new u(t.source,t.flags||m(t))).lastIndex=t.lastIndex,a;if(r.Map&&t instanceof r.Map)return a=new u,i.set(t,a),t.forEach((function(t,n){a.set(n,e(t,i))})),a;if(r.Set&&t instanceof r.Set)return a=new u,i.set(t,a),t.forEach((function(t){a.add(e(t,i))})),a;if(r.Blob&&t instanceof r.Blob)return t.slice(0,t.size,t.type);if(r.Buffer&&r.Buffer.isBuffer(t))return a=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(t.length):new u(t.length),i.set(t,a),t.copy(a),a;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(t))return a=new u(t.buffer.slice(0)),i.set(t,a),a;if(t instanceof r.ArrayBuffer)return a=t.slice(0),i.set(t,a),a}return"function"==typeof t.then||t instanceof Error||r.WeakMap&&t instanceof r.WeakMap||r.WeakSet&&t instanceof r.WeakSet?t:o(t,r,e,i)}(e,p())}return g.default=g,g.strict=function(e,t){return g(e,{isStrict:!0,realm:t?t.realm:void 0})},g}()}}]);
//# sourceMappingURL=component---src-pages-blog-contentful-blog-post-title-js-7c033a05ee0622fbbc5b.js.map