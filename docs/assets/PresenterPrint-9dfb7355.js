import{h as _,j as d,k as p,al as h,c as m,am as u,m as n,an as t,ao as o,A as s,F as f,ap as g,aq as v,ar as x,s as r,as as y,at as b,q as k,au as N,av as P,_ as w}from"./nav-74c0cee8.js";import{N as S}from"./NoteDisplay-65565b60.js";import{u as V}from"./index-fc653180.js";import"./_commonjsHelpers-725317a4.js";const j={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},q=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=_({__name:"PresenterPrint",setup(F){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,i)=>(r(),n("div",{id:"page-root",style:v(s(P))},[t("div",j,[t("div",D,[t("h1",L,o(s(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),q])]),k(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(r(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),$=w(A,[["__file","/home/herman/Documents/Workspace/github/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{$ as default};
