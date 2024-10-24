import{p as u,a as i,aG as x,e as k,g as d,$ as Q,aH as T,q as c,v as n,a9 as X,aK as $,X as g,ac as B,F as A,R as p,V as S,as as f,m as z,b as J,aL as U,aM as W,aN as Y,d as Z,ae as ee,f as ae,a8 as te,ag as ne,h as le,i as se,ai as ie,aj as de,j as ce,aO as re,aP as ue,aQ as oe,k as ve,an as me,n as h,ao as ye,ap as ge,O as ke,aR as be,aq as Ce,aa as Ve}from"./index-BqiOlJ2y.js";const fe=u({fluid:{type:Boolean,default:!1},...i(),...x(),...k()},"VContainer"),Ne=d()({name:"VContainer",props:fe(),setup(e,l){let{slots:t}=l;const{rtlClasses:a}=Q(),{dimensionStyles:r}=T(e);return c(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[r.value,e.style]},t)),{}}}),Ie=d()({name:"VCardActions",props:i(),setup(e,l){let{slots:t}=l;return X({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Pe=u({opacity:[Number,String],...i(),...k()},"VCardSubtitle"),Ae=d()({name:"VCardSubtitle",props:Pe(),setup(e,l){let{slots:t}=l;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),pe=$("v-card-title"),Se=u({appendAvatar:String,appendIcon:g,prependAvatar:String,prependIcon:g,subtitle:[String,Number],title:[String,Number],...i(),...B()},"VCardItem"),he=d()({name:"VCardItem",props:Se(),setup(e,l){let{slots:t}=l;return c(()=>{var v;const a=!!(e.prependAvatar||e.prependIcon),r=!!(a||t.prepend),o=!!(e.appendAvatar||e.appendIcon),b=!!(o||t.append),C=!!(e.title!=null||t.title),V=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[r&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(f,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(p,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[C&&n(pe,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??e.title]}}),V&&n(Ae,{key:"subtitle"},{default:()=>{var s;return[((s=t.subtitle)==null?void 0:s.call(t))??e.subtitle]}}),(v=t.default)==null?void 0:v.call(t)]),b&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(f,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(p,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),xe=u({opacity:[Number,String],...i(),...k()},"VCardText"),Te=d()({name:"VCardText",props:xe(),setup(e,l){let{slots:t}=l;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Be=u({appendAvatar:String,appendIcon:g,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:g,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...z(),...i(),...B(),...x(),...J(),...U(),...W(),...Y(),...Z(),...ee(),...k(),...ae(),...te({variant:"elevated"})},"VCard"),De=d()({name:"VCard",directives:{Ripple:ne},props:Be(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:r}=le(e),{borderClasses:o}=se(e),{colorClasses:b,colorStyles:C,variantClasses:V}=ie(e),{densityClasses:v}=de(e),{dimensionStyles:s}=T(e),{elevationClasses:L}=ce(e),{loaderClasses:N}=re(e),{locationStyles:D}=ue(e),{positionClasses:R}=oe(e),{roundedClasses:_}=ve(e),m=me(e,t),F=h(()=>e.link!==!1&&m.isLink.value),y=h(()=>!e.disabled&&e.link!==!1&&(e.link||m.isClickable.value));return c(()=>{const O=F.value?"a":e.tag,j=!!(a.title||e.title!=null),M=!!(a.subtitle||e.subtitle!=null),q=j||M,E=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),G=q||H||E,K=!!(a.text||e.text!=null);return ye(n(O,Ve({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},r.value,o.value,b.value,v.value,L.value,N.value,R.value,_.value,V.value,e.class],style:[C.value,s.value,D.value,e.style],onClick:y.value&&m.navigate,tabindex:e.disabled?-1:void 0},m.linkProps),{default:()=>{var I;return[w&&n("div",{key:"image",class:"v-card__image"},[a.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ke,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),G&&n(he,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),K&&n(Te,{key:"text"},{default:()=>{var P;return[((P=a.text)==null?void 0:P.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ie,null,{default:a.actions}),Ce(y.value,"v-card")]}}),[[ge("ripple"),y.value&&e.ripple]])}),{}}});export{De as V,Te as a,Ne as b,pe as c,Ae as d,Ie as e};