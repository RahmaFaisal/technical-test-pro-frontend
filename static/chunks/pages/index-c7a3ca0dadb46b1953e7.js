_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},QeBL:function(e,t,n){"use strict";n.r(t);var o=n("nKUr"),r=n("hlie"),a=n("nrjT"),i=n("YFqc"),c=n.n(i),s=function(){return Object(o.jsxs)("div",{className:"home page",children:[Object(o.jsx)("h1",{children:"Maiia's technical test"}),Object(o.jsxs)(a.a,{name:"instructions",title:"Instructions",children:[Object(o.jsxs)("p",{children:["You have just joined the Maiia Pro team as a front-end developper, your first mission is to implement two crucial features for the success of the company."," "]}),Object(o.jsx)("p",{children:"Here are the features to implement:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Appointments creation form"}),Object(o.jsx)("li",{children:"List of appointments"})]}),Object(o.jsx)("p",{children:"First, visit the time slots page where you will find an exemple of implementation, explanations about the libraries used in this project and informations about the file structure."}),Object(o.jsx)("p",{children:"Then, you can start working on the appointment page where you will find all specifications and the tasks to achieve as well as the components to implement."})]}),Object(o.jsx)(a.a,{name:"timeslots",title:"Time slots",children:Object(o.jsx)(c.a,{href:"/timeslots",children:Object(o.jsx)("div",{className:"cta",children:Object(o.jsx)("p",{children:Object(o.jsx)(r.a,{children:"Let's take a look at the time slots page"})})})})}),Object(o.jsx)(a.a,{name:"appointments",title:"Appointments",children:Object(o.jsx)(c.a,{href:"/appointments",children:Object(o.jsx)("div",{className:"cta",children:Object(o.jsx)("p",{children:Object(o.jsx)(r.a,{children:"Let's work on appointments"})})})})})]})};s.pageTitle="Test technique Maiia",t.default=s},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var a=r(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,o){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",p=a.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),n=o(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(r,e.as):c||a}}),[r,e.href,e.as]),h=p.href,d=p.as,f=e.children,b=e.replace,m=e.shallow,y=e.scroll,v=e.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var j=a.Children.only(f),g=j&&"object"===typeof j&&j.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),O=o(x,2),w=O[0],N=O[1],E=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,a.useEffect)((function(){var e=N&&t&&(0,i.isLocalURL)(h),o="undefined"!==typeof v?v:n&&n.locale,r=l[h+"%"+d+(o?"%"+o:"")];e&&!r&&u(n,h,d,{locale:o})}),[d,h,N,v,t,n]);var T={ref:E,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,h,d,b,m,y,v)},onMouseEnter:function(e){(0,i.isLocalURL)(h)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(n,h,d,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var L="undefined"!==typeof v?v:n&&n.locale,M=(0,i.getDomainLocale)(d,L,n&&n.locales,n&&n.domainLocales);T.href=M||(0,i.addBasePath)((0,i.addLocale)(d,L,n&&n.defaultLocale))}return a.default.cloneElement(j,T)};t.default=p},hlie:function(e,t,n){"use strict";var o=n("wx14"),r=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("NqtD"),s=n("H2TA"),l=n("G7As"),u=n("bfFb"),p=n("ofer"),h=a.forwardRef((function(e,t){var n=e.classes,s=e.className,h=e.color,d=void 0===h?"primary":h,f=e.component,b=void 0===f?"a":f,m=e.onBlur,y=e.onFocus,v=e.TypographyClasses,j=e.underline,g=void 0===j?"hover":j,x=e.variant,O=void 0===x?"inherit":x,w=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=Object(l.a)(),E=N.isFocusVisible,T=N.onBlurVisible,L=N.ref,M=a.useState(!1),k=M[0],_=M[1],A=Object(u.a)(t,L);return a.createElement(p.a,Object(o.a)({className:Object(i.a)(n.root,n["underline".concat(Object(c.a)(g))],s,k&&n.focusVisible,"button"===b&&n.button),classes:v,color:d,component:b,onBlur:function(e){k&&(T(),_(!1)),m&&m(e)},onFocus:function(e){E(e)&&_(!0),y&&y(e)},ref:A,variant:O},w))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(h)},nrjT:function(e,t,n){"use strict";var o=n("nKUr");t.a=function(e){var t=e.name,n=e.title,r=e.subtitle,a=e.children,i=e.className;return Object(o.jsxs)("section",{datacy:t,className:i,children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h2",{children:n}),r&&Object(o.jsx)("h3",{children:r})]}),Object(o.jsx)("article",{children:a})]})}},ofer:function(e,t,n){"use strict";var o=n("wx14"),r=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),s=n("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=a.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,u=e.classes,p=e.className,h=e.color,d=void 0===h?"initial":h,f=e.component,b=e.display,m=void 0===b?"initial":b,y=e.gutterBottom,v=void 0!==y&&y,j=e.noWrap,g=void 0!==j&&j,x=e.paragraph,O=void 0!==x&&x,w=e.variant,N=void 0===w?"body1":w,E=e.variantMapping,T=void 0===E?l:E,L=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),M=f||(O?"p":T[N]||l[N])||"span";return a.createElement(M,Object(o.a)({className:Object(i.a)(u.root,p,"inherit"!==N&&u[N],"initial"!==d&&u["color".concat(Object(s.a)(d))],g&&u.noWrap,v&&u.gutterBottom,O&&u.paragraph,"inherit"!==c&&u["align".concat(Object(s.a)(c))],"initial"!==m&&u["display".concat(Object(s.a)(m))]),ref:t},L))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},vNVm:function(e,t,n){"use strict";var o=n("zoAU"),r=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,r=(0,a.useRef)(),l=(0,a.useState)(!1),u=o(l,2),p=u[0],h=u[1],d=(0,a.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),n||p||e&&e.tagName&&(r.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,p]);return(0,a.useEffect)((function(){c||p||(0,i.default)((function(){return h(!0)}))}),[p]),[d,p]};var a=n("q1tI"),i=r(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map}},[["/EDR",0,2,1,3,4]]]);