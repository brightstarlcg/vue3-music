import{j as s,c as p,g as o,h as c,i as l,G as k,k as _,u as n,m as x,n as F,C as y,o as b,a2 as B,a3 as V,a4 as S,H as $,F as L,q as E,r as C,e as j,I as D,l as M,B as W,Y as H,Z as T}from"./vendor.b54c9bc6.js";/* empty css                    */import{m as N,n as I,o as P,p as q,q as O}from"./index.a2012c11.js";import{I as z,_ as w}from"./number.0a52e3ef.js";import{F as U}from"./Fm.479d4029.js";import{M as Z,S as G}from"./SongListItem.3f9a0783.js";import{P as R}from"./PlayOne.1578a022.js";import{_ as A}from"./CoverPlay.006fbce0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./PlayTwo.f3906c9f.js";/* empty css                        */import"./Play.699331c8.js";var Y=z("download",!1,function(t){return s("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M6 24.0083V42H42V24",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M33 23L24 32L15 23",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M23.9917 6V32",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),J=z("full-selection",!0,function(t){return s("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M34 5H8C6.34315 5 5 6.34315 5 8V34C5 35.6569 6.34315 37 8 37H34C35.6569 37 37 35.6569 37 34V8C37 6.34315 35.6569 5 34 5Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M43.9998 13.002V42.0001C43.9998 43.1046 43.1044 44.0001 41.9998 44.0001H13.0034",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M13 20.4858L18.9997 26.0109L29 15.7192",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),K=z("plus",!1,function(t){return s("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M24.0607 10L24.024 38",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),s("path",{d:"M10 24L38 24",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])});const Q={class:"flex items-stretch"},X=["src"],tt={class:"pl-5 flex flex-col justify-between py-1 flex-1"},et={class:"flex flex-col justify-between flex-1"},st={class:"text-2xl font-bold"},lt={class:"text-xs text-gray-500 leading-normal mt-2"},it={class:"flex text-xs gap-x-5 text-slate-500 mt-2"},at=x("\u5355\u66F2\u6570\uFF1A"),nt=x("\u4E13\u8F91\u6570\uFF1A"),ot=x("MV\u6570\uFF1A"),rt={class:"justify-self-stretch mt-5 gap-x-2 flex items-center"},ct=l("span",null,"\u5173\u6CE8",-1),ut=l("span",null,"\u6B4C\u624B\u7535\u53F0",-1),dt=p({props:{artistDetail:null},setup(t){return(h,i)=>{const e=F;return o(),c("div",Q,[l("img",{src:t.artistDetail.artist.cover,alt:"",class:"w-44 h-44 object-cover rounded-full flex-shrink-0"},null,8,X),l("div",tt,[l("div",et,[l("div",st,k(t.artistDetail.artist.name),1),l("div",lt,k(t.artistDetail.artist.briefDesc.substring(0,90))+"... ",1),l("div",it,[l("div",null,[at,l("span",null,k(t.artistDetail.artist.musicSize),1)]),l("div",null,[nt,l("span",null,k(t.artistDetail.artist.albumSize),1)]),l("div",null,[ot,l("span",null,k(t.artistDetail.artist.mvSize),1)])])]),l("div",rt,[s(e,{class:"w-32 bg-emerald-500 border-0 text-white",round:"",type:"primary"},{default:_(()=>[s(w,{icon:n(K),size:"18",class:"mr-1"},null,8,["icon"]),ct]),_:1}),s(e,{class:"w-32 bg-gray-100",secondary:"",round:""},{default:_(()=>[s(w,{icon:n(U),size:"18",class:"mr-1"},null,8,["icon"]),ut]),_:1}),s(e,{circle:"",class:"bg-gray-100",secondary:"",icon:n(Z)},null,8,["icon"])])])])}}});const _t={style:{"min-height":"200px"}},mt={class:"py-5 font-bold text-sm"},ht=["innerHTML"],ft=p({props:{id:null},setup(t){const h=t,i=y();return b(async()=>{i.value=await N(h.id)}),(e,g)=>{var a,u,d;const m=B,f=V;return S((o(),c("div",_t,[i.value&&((u=(a=i.value)==null?void 0:a.introduction)==null?void 0:u.length)>0?(o(!0),c($,{key:0},L((d=i.value)==null?void 0:d.introduction,r=>(o(),c("div",null,[l("div",mt,k(r.ti),1),l("div",{class:"text-xs text-slate-500 leading-7",style:{"white-space":"pre-wrap"},innerHTML:r.txt},null,8,ht)]))),256)):(o(),E(m,{key:1,description:"\u6682\u65E0\u6570\u636E"}))])),[[f,!i.value]])}}}),vt={class:"mt-5 flex items-center justify-between"},gt=x(" \u64AD\u653E\u5168\u90E8 "),kt=x(" \u4E0B\u8F7D "),xt=x(" \u6279\u91CF\u64CD\u4F5C "),yt={class:"gap-x-5 flex mr-10 text-xs"},pt={class:"mt-2"},wt=l("div",{class:"flex text-xs text-gray-400 py-2"},[l("div",{class:"flex-auto"},"\u6B4C\u66F2"),l("div",{class:"w-1/3"},"\u4E13\u8F91"),l("div",{class:"w-20"},"\u65F6\u957F")],-1),$t={class:"text-sm"},bt={key:0,class:"flex justify-center py-5"},Dt=x("\u52A0\u8F7D\u66F4\u591A"),Ft=p({props:{id:null},setup(t){const h=t,i=y([]),e=C({order:"hot",limit:20,page:1,loading:!1,noMore:!1}),g=j(()=>e.page===1?0:i.value.length+e.limit),m=async()=>{try{e.loading=!0;const{songs:u}=await I(h.id,e.order,e.limit,g.value);e.page===1?i.value=u:i.value.push(...u),u.length<e.limit&&(e.noMore=!0)}catch{e.page--}e.loading=!1},f=()=>{e.page++,m()},a=u=>{e.page=1,e.order=u,m()};return b(async()=>{await m()}),(u,d)=>{const r=F;return o(),c($,null,[l("div",vt,[l("div",null,[s(r,{round:"",class:"w-28"},{default:_(()=>[s(w,{icon:n(R),class:"mr-1",size:"16"},null,8,["icon"]),gt]),_:1}),s(r,{round:"",class:"w-28"},{default:_(()=>[s(w,{icon:n(Y),class:"mr-1",size:"16"},null,8,["icon"]),kt]),_:1}),s(r,{round:"",class:"w-28"},{default:_(()=>[s(w,{icon:n(J),class:"mr-1",size:"16"},null,8,["icon"]),xt]),_:1})]),l("div",yt,[l("div",{class:D(["hover-text",{"text-emerald-400":n(e).order==="hot"}]),onClick:d[0]||(d[0]=v=>a("hot"))},"\u6700\u70ED",2),l("div",{class:D(["hover-text",{"text-emerald-400":n(e).order==="time"}]),onClick:d[1]||(d[1]=v=>a("time"))},"\u6700\u65B0",2)])]),l("div",pt,[wt,l("div",$t,[(o(!0),c($,null,L(i.value,v=>(o(),E(G,{key:v.id,"show-ar-name":!1,"show-al-name":"",song:v},null,8,["song"]))),128))]),i.value.length>0&&!n(e).noMore?(o(),c("div",bt,[s(r,{loading:n(e).loading,type:"text",class:"text-center w-full",onClick:f},{default:_(()=>[Dt]),_:1},8,["loading"])])):M("",!0)])],64)}}}),Lt={class:"mt-5"},Mt={class:"grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-8"},Ct={class:"mt-2 text-xs truncate"},jt={class:"mt-1 text-xs text-slate-400 truncate"},zt={key:0,class:"flex justify-center py-5"},Et=x("\u52A0\u8F7D\u66F4\u591A"),At=p({props:{id:null},setup(t){const h=t,i=y([]),e=C({limit:40,page:1,loading:!1,noMore:!1}),g=j(()=>e.page===1?0:i.value.length+e.limit),m=async()=>{try{e.loading=!0;const{hotAlbums:a}=await P(h.id,e.limit,g.value);e.page===1?i.value=a:i.value.push(...a),a.length<e.limit&&(e.noMore=!0)}catch{e.page--}e.loading=!1},f=()=>{e.page++,m()};return b(async()=>{await m()}),(a,u)=>{const d=F;return o(),c("div",Lt,[l("div",Mt,[(o(!0),c($,null,L(i.value,(r,v)=>(o(),c("div",{key:v,class:D({"item-1":v===0})},[s(A,{name:r.name,"pic-url":r.picUrl,"play-count":0},null,8,["name","pic-url"]),l("div",Ct,k(r.name),1),l("div",jt,k(r.publishTime.toDate()),1)],2))),128))]),i.value.length>0&&!n(e).noMore?(o(),c("div",zt,[s(d,{loading:n(e).loading,type:"text",class:"text-center w-full",onClick:f},{default:_(()=>[Et]),_:1},8,["loading"])])):M("",!0)])}}}),Bt={class:"mt-5"},Vt={class:"grid grid-flow-row gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},St={class:"mt-2 text-xs truncate hover-text"},Wt={key:0,class:"flex justify-center py-5"},Ht=x("\u52A0\u8F7D\u66F4\u591A"),Tt=p({props:{id:null},setup(t){const h=t,i=y([]),e=C({limit:40,page:1,loading:!1,noMore:!1}),g=j(()=>e.page===1?0:i.value.length+e.limit),m=async()=>{try{e.loading=!0;const{mvs:a}=await q(h.id,e.limit,g.value);e.page===1?i.value=a:i.value.push(...a),a.length<e.limit&&(e.noMore=!0)}catch{e.page--}e.loading=!1},f=()=>{e.page++,m()};return b(async()=>{await m()}),(a,u)=>{const d=F;return o(),c("div",Bt,[l("div",Vt,[(o(!0),c($,null,L(i.value,(r,v)=>(o(),c("div",{key:v,class:D({"item-1":v===0})},[s(A,{name:r.name,"pic-url":r.imgurl16v9,video:"","play-count":r.playCount,"show-play-count":""},null,8,["name","pic-url","play-count"]),l("div",St,k(r.name),1)],2))),128))]),i.value.length>0&&!n(e).noMore?(o(),c("div",Wt,[s(d,{loading:n(e).loading,type:"text",class:"text-center w-full",onClick:f},{default:_(()=>[Ht]),_:1},8,["loading"])])):M("",!0)])}}});const Nt={key:0,class:"artist-detail p-5"},Xt=p({setup(t){const h=W(),i=Number(h.query.id),e=y(),g=y("music");return b(async()=>{e.value=await O(i)}),(m,f)=>{const a=H,u=T;return e.value?(o(),c("div",Nt,[s(dt,{"artist-detail":e.value},null,8,["artist-detail"]),s(u,{class:"mt-3",modelValue:g.value,"onUpdate:modelValue":f[0]||(f[0]=d=>g.value=d)},{default:_(()=>[s(a,{lazy:"",label:"\u7CBE\u9009",name:"choice"}),s(a,{lazy:"",label:`\u6B4C\u66F2 ${e.value.artist.musicSize}`,name:"music"},{default:_(()=>[s(Ft,{id:n(i)},null,8,["id"])]),_:1},8,["label"]),s(a,{lazy:"",label:`\u4E13\u8F91 ${e.value.artist.albumSize}`,name:"album"},{default:_(()=>[s(At,{id:n(i)},null,8,["id"])]),_:1},8,["label"]),s(a,{lazy:"",label:`\u89C6\u9891 ${e.value.artist.mvSize}`,name:"mv"},{default:_(()=>[s(Tt,{id:n(i)},null,8,["id"])]),_:1},8,["label"]),s(a,{lazy:"",label:"\u8BE6\u60C5",name:"desc"},{default:_(()=>[s(ft,{id:n(i)},null,8,["id"])]),_:1})]),_:1},8,["modelValue"])])):M("",!0)}}});export{Xt as default};
