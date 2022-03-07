"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[290],{8309:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var r=a(67294),n=a(45697),o=a.n(n),s=a(11855),l=a(24550),i=a(64163),c=a(6326),m=a(86810),p=a(28339),d=a(3772);const y=e=>{let{data:t}=e;return r.createElement(s.Z,null,r.createElement(s.Z,{paddingX:{xs:0,sm:4,md:6}},r.createElement("div",{dangerouslySetInnerHTML:{__html:t.text.childMarkdownRemark.html}})),r.createElement(s.Z,{paddingY:4},r.createElement(d.Z,null)),r.createElement(s.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},r.createElement(s.Z,{display:"flex",alignItems:"center"},r.createElement(s.Z,null,r.createElement(p.Z,{fontWeight:600},t.author.name),r.createElement(p.Z,{color:"text.secondary"},t.createdAt)))))};y.propTypes={data:o().shape({text:o().shape({childMarkdownRemark:o().shape({html:o().element})}),author:o().shape({name:o().string}),createdAt:o().string})};var u=y,h=a(52831),g=a(4942),Z=a(63366),f=a(87462),x=a(38685),v=a(72372),E=a(48399),b=a(68893),T=a(26640),w=a(68913);function j(e){return(0,w.Z)("MuiListItemText",e)}var k=(0,a(2162).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),I=a(85893),P=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],M=(0,T.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,g.Z)({},"& .".concat(k.primary),t.primary),(0,g.Z)({},"& .".concat(k.secondary),t.secondary),t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,f.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),B=r.forwardRef((function(e,t){var a=(0,b.Z)({props:e,name:"MuiListItemText"}),n=a.children,o=a.className,s=a.disableTypography,l=void 0!==s&&s,i=a.inset,c=void 0!==i&&i,m=a.primary,d=a.primaryTypographyProps,y=a.secondary,u=a.secondaryTypographyProps,h=(0,Z.Z)(a,P),g=r.useContext(E.Z).dense,T=null!=m?m:n,w=y,k=(0,f.Z)({},a,{disableTypography:l,inset:c,primary:!!T,secondary:!!w,dense:g}),B=function(e){var t=e.classes,a=e.inset,r=e.primary,n=e.secondary,o={root:["root",a&&"inset",e.dense&&"dense",r&&n&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,v.Z)(o,j,t)}(k);return null==T||T.type===p.Z||l||(T=(0,I.jsx)(p.Z,(0,f.Z)({variant:g?"body2":"body1",className:B.primary,component:"span",display:"block"},d,{children:T}))),null==w||w.type===p.Z||l||(w=(0,I.jsx)(p.Z,(0,f.Z)({variant:"body2",className:B.secondary,color:"text.secondary",display:"block"},u,{children:w}))),(0,I.jsxs)(M,(0,f.Z)({className:(0,x.Z)(B.root,o),ownerState:k,ref:t},h,{children:[T,w]}))}));const L=e=>{let{data:t}=e;return(0,r.useEffect)((()=>{(async()=>{const e=document.querySelectorAll(".jarallax");if(!e||e&&0===e.length)return;const{jarallax:t}=await a.e(850).then(a.t.bind(a,43850,23));t(e,{speed:.2})})()})),r.createElement(s.Z,{className:"jarallax","data-jarallax":!0,"data-speed":"0.2",position:"relative",minHeight:{xs:400,sm:500,md:600},display:"flex",marginTop:-13,paddingTop:13,alignItems:"center",id:"agency__portfolio-item--js-scroll"},r.createElement(s.Z,{className:"jarallax-img",sx:{position:"absolute",objectFit:"cover",fontFamily:"object-fit: cover;",top:0,left:0,width:"100%",height:"100%",zIndex:-1,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}),r.createElement(s.Z,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,width:1,height:1,background:(0,h.Fq)("#161c2d",.6),zIndex:1}}),r.createElement(m.Z,{position:"relative",zIndex:2},r.createElement(s.Z,null,r.createElement(p.Z,{variant:"h3",sx:{fontWeight:400,color:"common.white",marginBottom:2}},t.title),r.createElement(s.Z,{display:"flex",alignItems:"center"},r.createElement(B,{sx:{margin:0},primary:t.author.name,secondary:t.createdAt,primaryTypographyProps:{variant:"h6",sx:{color:"common.white"}},secondaryTypographyProps:{sx:{color:(0,h.Fq)("#ffffff",.8)}}})))))};L.propTypes={data:o().shape({title:o().string,author:o().shape({name:o().string}),createdAt:o().string})};var N=L;const R=e=>{let{data:t}=e;const a=(0,l.Z)();return r.createElement(c.Z,{colorInvert:!0},r.createElement(s.Z,null,r.createElement(N,{data:t}),r.createElement(m.Z,null,r.createElement(i.ZP,{container:!0,spacing:4},r.createElement(u,{data:t}))),r.createElement(s.Z,{component:"svg",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1920 100.1",sx:{marginBottom:-1,width:1}},r.createElement("path",{fill:a.palette.alternate.main,d:"M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"}))))};R.propTypes={data:o().object};var A=R;const S=e=>{let{data:t}=e;return r.createElement(A,{data:t.contentfulBlogPost})};S.propTypes={data:o().shape({contentfulBlogPost:o().object})};var z=S}}]);
//# sourceMappingURL=component---src-pages-blog-contentful-blog-post-title-js-14a4ac53c268e46fae3d.js.map