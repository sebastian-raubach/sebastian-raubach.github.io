import{p as de,X as O,a as fe,Y as Oe,e as ve,Z as Pe,g as pe,$ as He,a0 as We,a1 as _e,s as M,n as k,l as he,a2 as Le,a3 as ge,a4 as $e,q as Ae,v as a,a5 as me,V as T,a6 as Ne,a7 as Ue,f as Ee,a8 as Re,h as Te,a9 as qe,t as U,aa as ce,ab as be,m as Ke,ac as Xe,b as Je,ad as Qe,d as Ye,ae as Ze,af as je,ag as et,ah as tt,i as at,ai as lt,aj as st,j as ot,k as it,ak as nt,al as rt,am as ct,an as ut,ao as ue,ap as dt,aq as ft,ar as vt,as as q,at as Be,F as H,R as ye,z as pt,r as oe,A as C,B as R,C as m,G as K,au as ke,D as ie,E as ne,P as I,av as ht,H as X,I as J,O as gt,aw as Q,ax as mt,ay as bt,az as yt,aA as kt,aB as wt,aC as we,J as Ct}from"./index-C4HFaxTS.js";import{V as Ce,a as re}from"./VRow-Do6Mxh72.js";import{d as St,V as xt,b as Vt,e as zt,c as Se,f as It}from"./VCard-DG-D87m5.js";function Pt(e){let{selectedElement:o,containerElement:i,isRtl:c,isHorizontal:u}=e;const p=W(u,i),n=Ge(u,c,i),r=W(u,o),t=De(u,o),h=r*.4;return n>t?t-h:n+p<t+r?t-p+r+h:n}function _t(e){let{selectedElement:o,containerElement:i,isHorizontal:c}=e;const u=W(c,i),p=De(c,o),n=W(c,o);return p-u/2+n/2}function xe(e,o){const i=e?"scrollWidth":"scrollHeight";return(o==null?void 0:o[i])||0}function At(e,o){const i=e?"clientWidth":"clientHeight";return(o==null?void 0:o[i])||0}function Ge(e,o,i){if(!i)return 0;const{scrollLeft:c,offsetWidth:u,scrollWidth:p}=i;return e?o?p-u+c:c:i.scrollTop}function W(e,o){const i=e?"offsetWidth":"offsetHeight";return(o==null?void 0:o[i])||0}function De(e,o){const i=e?"offsetLeft":"offsetTop";return(o==null?void 0:o[i])||0}const Et=Symbol.for("vuetify:v-slide-group"),Fe=de({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Et},nextIcon:{type:O,default:"$next"},prevIcon:{type:O,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...fe(),...Oe({mobile:null}),...ve(),...Pe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Ve=pe()({name:"VSlideGroup",props:Fe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:i}=o;const{isRtl:c}=He(),{displayClasses:u,mobile:p}=We(e),n=_e(e,e.symbol),r=M(!1),t=M(0),h=M(0),V=M(0),v=k(()=>e.direction==="horizontal"),{resizeRef:g,contentRect:B}=he(),{resizeRef:b,contentRect:P}=he(),d=Le(),w=k(()=>({container:g.el,duration:200,easing:"easeOutQuart"})),Y=k(()=>n.selected.value.length?n.items.value.findIndex(l=>l.id===n.selected.value[0]):-1),S=k(()=>n.selected.value.length?n.items.value.findIndex(l=>l.id===n.selected.value[n.selected.value.length-1]):-1);if(ge){let l=-1;$e(()=>[n.selected.value,B.value,P.value,v.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(B.value&&P.value){const s=v.value?"width":"height";h.value=B.value[s],V.value=P.value[s],r.value=h.value+1<V.value}if(Y.value>=0&&b.el){const s=b.el.children[S.value];G(s,e.centerActive)}})})}const _=M(!1);function G(l,s){let f=0;s?f=_t({containerElement:g.el,isHorizontal:v.value,selectedElement:l}):f=Pt({containerElement:g.el,isHorizontal:v.value,isRtl:c.value,selectedElement:l}),L(f)}function L(l){if(!ge||!g.el)return;const s=W(v.value,g.el),f=Ge(v.value,c.value,g.el);if(!(xe(v.value,g.el)<=s||Math.abs(l-f)<16)){if(v.value&&c.value&&g.el){const{scrollWidth:N,offsetWidth:se}=g.el;l=N-se-l}v.value?d.horizontal(l,w.value):d(l,w.value)}}function y(l){const{scrollTop:s,scrollLeft:f}=l.target;t.value=v.value?f:s}function z(l){if(_.value=!0,!(!r.value||!b.el)){for(const s of l.composedPath())for(const f of b.el.children)if(f===s){G(f);return}}}function Z(l){_.value=!1}let D=!1;function $(l){var s;!D&&!_.value&&!(l.relatedTarget&&((s=b.el)!=null&&s.contains(l.relatedTarget)))&&x(),D=!1}function F(){D=!0}function j(l){if(!b.el)return;function s(f){l.preventDefault(),x(f)}v.value?l.key==="ArrowRight"?s(c.value?"prev":"next"):l.key==="ArrowLeft"&&s(c.value?"next":"prev"):l.key==="ArrowDown"?s("next"):l.key==="ArrowUp"&&s("prev"),l.key==="Home"?s("first"):l.key==="End"&&s("last")}function x(l){var f,E;if(!b.el)return;let s;if(!l)s=Ne(b.el)[0];else if(l==="next"){if(s=(f=b.el.querySelector(":focus"))==null?void 0:f.nextElementSibling,!s)return x("first")}else if(l==="prev"){if(s=(E=b.el.querySelector(":focus"))==null?void 0:E.previousElementSibling,!s)return x("last")}else l==="first"?s=b.el.firstElementChild:l==="last"&&(s=b.el.lastElementChild);s&&s.focus({preventScroll:!0})}function A(l){const s=v.value&&c.value?-1:1,f=(l==="prev"?-s:s)*h.value;let E=t.value+f;if(v.value&&c.value&&g.el){const{scrollWidth:N,offsetWidth:se}=g.el;E+=N-se}L(E)}const ee=k(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),te=k(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!p.value;case!0:return r.value||Math.abs(t.value)>0;case"mobile":return p.value||r.value||Math.abs(t.value)>0;default:return!p.value&&(r.value||Math.abs(t.value)>0)}}),ae=k(()=>Math.abs(t.value)>1),le=k(()=>{if(!g.value)return!1;const l=xe(v.value,g.el),s=At(v.value,g.el);return l-s-Math.abs(t.value)>1});return Ae(()=>a(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":te.value,"v-slide-group--is-overflowing":r.value},u.value,e.class],style:e.style,tabindex:_.value||n.selected.value.length?-1:0,onFocus:$},{default:()=>{var l,s,f;return[te.value&&a("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ae.value}],onMousedown:F,onClick:()=>ae.value&&A("prev")},[((l=i.prev)==null?void 0:l.call(i,ee.value))??a(me,null,{default:()=>[a(T,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),a("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:y},[a("div",{ref:b,class:"v-slide-group__content",onFocusin:z,onFocusout:Z,onKeydown:j},[(s=i.default)==null?void 0:s.call(i,ee.value)])]),te.value&&a("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!le.value}],onMousedown:F,onClick:()=>le.value&&A("next")},[((f=i.next)==null?void 0:f.call(i,ee.value))??a(me,null,{default:()=>[a(T,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:n.selected,scrollTo:A,scrollOffset:t,focus:x,hasPrev:ae,hasNext:le}}}),Me=Symbol.for("vuetify:v-chip-group"),Rt=de({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ue},...Fe(),...fe(),...Pe({selectedClass:"v-chip--selected"}),...ve(),...Ee(),...Re({variant:"tonal"})},"VChipGroup"),ze=pe()({name:"VChipGroup",props:Rt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:i}=o;const{themeClasses:c}=Te(e),{isSelected:u,select:p,next:n,prev:r,selected:t}=_e(e,Me);return qe({VChip:{color:U(e,"color"),disabled:U(e,"disabled"),filter:U(e,"filter"),variant:U(e,"variant")}}),Ae(()=>{const h=Ve.filterProps(e);return a(Ve,ce(h,{class:["v-chip-group",{"v-chip-group--column":e.column},c.value,e.class],style:e.style}),{default:()=>{var V;return[(V=i.default)==null?void 0:V.call(i,{isSelected:u,select:p,next:n,prev:r,selected:t.value})]}})}),{}}}),Tt=de({activeClass:String,appendAvatar:String,appendIcon:O,closable:Boolean,closeIcon:{type:O,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:be(),onClickOnce:be(),...Ke(),...fe(),...Xe(),...Je(),...Qe(),...Ye(),...Ze(),...je(),...ve({tag:"span"}),...Ee(),...Re({variant:"tonal"})},"VChip"),Ie=pe()({name:"VChip",directives:{Ripple:et},props:Tt(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,o){let{attrs:i,emit:c,slots:u}=o;const{t:p}=tt(),{borderClasses:n}=at(e),{colorClasses:r,colorStyles:t,variantClasses:h}=lt(e),{densityClasses:V}=st(e),{elevationClasses:v}=ot(e),{roundedClasses:g}=it(e),{sizeClasses:B}=nt(e),{themeClasses:b}=Te(e),P=rt(e,"modelValue"),d=ct(e,Me,!1),w=ut(e,i),Y=k(()=>e.link!==!1&&w.isLink.value),S=k(()=>!e.disabled&&e.link!==!1&&(!!d||e.link||w.isClickable.value)),_=k(()=>({"aria-label":p(e.closeLabel),onClick(y){y.preventDefault(),y.stopPropagation(),P.value=!1,c("click:close",y)}}));function G(y){var z;c("click",y),S.value&&((z=w.navigate)==null||z.call(w,y),d==null||d.toggle())}function L(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),G(y))}return()=>{const y=w.isLink.value?"a":e.tag,z=!!(e.appendIcon||e.appendAvatar),Z=!!(z||u.append),D=!!(u.close||e.closable),$=!!(u.filter||e.filter)&&d,F=!!(e.prependIcon||e.prependAvatar),j=!!(F||u.prepend),x=!d||d.isSelected.value;return P.value&&ue(a(y,ce({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":$,"v-chip--pill":e.pill},b.value,n.value,x?r.value:void 0,V.value,v.value,g.value,B.value,h.value,d==null?void 0:d.selectedClass.value,e.class],style:[x?t.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:S.value?0:void 0,onClick:G,onKeydown:S.value&&!Y.value&&L},w.linkProps),{default:()=>{var A;return[ft(S.value,"v-chip"),$&&a(vt,{key:"filter"},{default:()=>[ue(a("div",{class:"v-chip__filter"},[u.filter?a(q,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},u.filter):a(T,{key:"filter-icon",icon:e.filterIcon},null)]),[[Be,d.isSelected.value]])]}),j&&a("div",{key:"prepend",class:"v-chip__prepend"},[u.prepend?a(q,{key:"prepend-defaults",disabled:!F,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},u.prepend):a(H,null,[e.prependIcon&&a(T,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&a(ye,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),a("div",{class:"v-chip__content","data-no-activator":""},[((A=u.default)==null?void 0:A.call(u,{isSelected:d==null?void 0:d.isSelected.value,selectedClass:d==null?void 0:d.selectedClass.value,select:d==null?void 0:d.select,toggle:d==null?void 0:d.toggle,value:d==null?void 0:d.value.value,disabled:e.disabled}))??e.text]),Z&&a("div",{key:"append",class:"v-chip__append"},[u.append?a(q,{key:"append-defaults",disabled:!z,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},u.append):a(H,null,[e.appendIcon&&a(T,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&a(ye,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),D&&a("button",ce({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},_.value),[u.close?a(q,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},u.close):a(T,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[dt("ripple"),S.value&&e.ripple,null]])}}}),Ft=pt({__name:"index",setup(e){const o=oe([{name:"Germinate",description:"Plant genetic resources database",categories:["work","app","phenotyping","genotyping","germplasm","database","pedigree"],website:"https://germinate.hutton.ac.uk",repository:"https://github.com/germinateplatform",logo:"germinate.svg",show:!1},{name:"GridScore NEXT",description:"Modern phenotyping app",categories:["work","phenotyping","app","pwa"],website:"https://gridscore.hutton.ac.uk",repository:"https://github.com/cropgeeks/gridscore-next-client",logo:"gridscore.svg",show:!1},{name:"Helium",description:"Pedigree visualization tool",categories:["work","app","pedigree"],website:"https://helium.hutton.ac.uk",repository:void 0,logo:"helium.svg",show:!1},{name:"Pick-a-Mix",description:"Intercropping data visualization tool",categories:["work","app","database","intercropping","visualization"],website:"https://ics.hutton.ac.uk/pick-a-mix/",repository:"https://github.com/cropgeeks/pick-a-mix-client",logo:"pickamix.svg",show:!1},{name:"Humbug",description:"Barcode generation tool",categories:["work","app","barcode"],website:"https://cropgeeks.github.io/humbug/",repository:"https://github.com/cropgeeks/humbug",logo:"humbug.svg",show:!1},{name:"SGONE",description:"Easily identify potential duplicates in your data",categories:["work","app","duplicate"],website:"https://cropgeeks.github.io/sgone/",repository:"https://github.com/cropgeeks/sgone",logo:"sgone.svg",show:!1},{name:"DIVERSiplotter",description:"A tool for field data visualization based on the intercropping trials",categories:["work","app","database","intercropping","visualization"],website:"https://ics.hutton.ac.uk/diversify/",repository:"https://github.com/cropgeeks/diversify-web",logo:"diversiplotter.svg",show:!1},{name:"Frickl",description:"Self-hosted photo library",categories:["hobby","app","database","photo","library"],website:"https://sebastian-raubach.github.io/frickl-web/",repository:"https://github.com/sebastian-raubach/frickl-web",logo:"frickl.svg",show:!1},{name:"UNICON",description:"Universal unit converter",categories:["hobby","app","pwa"],website:"https://unicon.pages.dev/",repository:"https://github.com/sebastian-raubach/unicon",logo:"unicon.svg",show:!1},{name:"ClosestHillMap",description:"Map interactively showing the closest x locations to a position on the map",categories:["hobby","app","pwa","geography"],website:"https://sebastian-raubach.github.io/closest-hill-map/",repository:"https://github.com/sebastian-raubach/closest-hill-map",logo:"chm.svg",show:!1},{name:"SGUD",description:"A tool to rate anything, coffee, beers, parking spaces",categories:["hobby","app","rating"],website:void 0,repository:"https://github.com/sebastian-raubach/sgud-client",logo:"sgud.svg",show:!1},{name:"HikeTime",description:"Hike time estimator based on flat walking speed and climbing speed",categories:["hobby","app","pwa","hiking"],website:"https://sebastian-raubach.github.io/hiketime/",repository:"https://github.com/sebastian-raubach/hiketime",logo:"hiketime.svg",show:!1},{name:"WeatherMatrix",description:"Tool to display weather data on an LED matrix",categories:["hobby","led-matrix","raspberry-pi"],website:void 0,repository:"https://github.com/sebastian-raubach/rpi-led-weather/",logo:"weathermatrix.svg",show:!1}]);o.value.forEach(n=>{n.categories.sort((r,t)=>r.localeCompare(t))});const i=oe(),c=oe([]),u=k(()=>o.value&&o.value.length>0?o.value.filter(n=>{if(!i.value&&c.value.length<1||i.value&&n.name.includes(i.value))return!0;if(c.value.length>0){const r=p.value.filter((t,h)=>c.value.includes(h));for(const t of n.categories)if(r.includes(t))return!0}return!1}):o.value),p=k(()=>{const n=new Set;return o.value.forEach(r=>{r.categories.forEach(t=>n.add(t))}),[...n].sort((r,t)=>r.localeCompare(t))});return(n,r)=>(C(),R(St,null,{default:m(()=>[r[1]||(r[1]=K("h1",{class:"text-h4"},"Portfolio",-1)),a(ke,{class:"my-4"}),r[2]||(r[2]=K("h4",null,"Categories",-1)),r[3]||(r[3]=K("p",null,"Select categories to filter down the portfolio.",-1)),a(ze,{modelValue:I(c),"onUpdate:modelValue":r[0]||(r[0]=t=>ht(c)?c.value=t:null),class:"mb-4",column:"",multiple:""},{default:m(()=>[(C(!0),ie(H,null,ne(I(p),t=>(C(),R(Ie,{key:`allcats-${t}`,class:"text-capitalize",filter:""},{default:m(()=>[X(J(t),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]),a(Ce,null,{default:m(()=>[(C(!0),ie(H,null,ne(I(u),t=>(C(),R(re,{key:`project-card-${t.name}`,class:"mb-3",cols:"12",lg:"3",md:"4",sm:"6",xl:"2"},{default:m(()=>[a(xt,{class:"mx-auto fill-height d-flex flex-column"},{default:m(()=>[a(gt,{class:"ma-5",contain:"","max-height":"200px",src:`/img/projects/${t.logo}`},null,8,["src"]),a(Vt,null,{default:m(()=>[X(J(t.name),1)]),_:2},1024),a(zt,{class:"text-wrap"},{default:m(()=>[X(J(t.description),1)]),_:2},1024),a(Se,null,{default:m(()=>[a(ze,{column:""},{default:m(()=>[(C(!0),ie(H,null,ne(t.categories,h=>(C(),R(Ie,{key:`project-card-${t.name}-${h}`,class:"text-capitalize"},{default:m(()=>[X(J(h),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),a(It,{class:"mt-auto"},{default:m(()=>[a(Q,{color:"primary",text:"More information",onClick:h=>t.show=!t.show},null,8,["onClick"]),a(mt),a(Q,{icon:t.show?I(bt):I(yt),onClick:h=>t.show=!t.show},null,8,["icon","onClick"])]),_:2},1024),a(kt,null,{default:m(()=>[ue(K("div",null,[a(ke),a(Se,null,{default:m(()=>[a(Ce,null,{default:m(()=>[t.website?(C(),R(re,{key:0,cols:"auto"},{default:m(()=>[a(Q,{color:"primary",href:t.website,icon:I(wt)},null,8,["href","icon"])]),_:2},1024)):we("",!0),t.repository?(C(),R(re,{key:1,cols:"auto"},{default:m(()=>[a(Q,{color:"secondary",href:t.repository,icon:I(Ct)},null,8,["href","icon"])]),_:2},1024)):we("",!0)]),_:2},1024)]),_:2},1024)],512),[[Be,t.show]])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}});export{Ft as default};