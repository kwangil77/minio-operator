"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[415],{7403:(e,n,s)=>{s.d(n,{U:()=>l,_:()=>t});const t={label:{color:"#07193E",fontSize:13,alignSelf:"center",whiteSpace:"nowrap","&:not(:first-of-type)":{marginLeft:10}},actionsTray:{display:"flex",justifyContent:"space-between",marginBottom:"1rem",alignItems:"center","& button":{flexGrow:0,marginLeft:8}}},l={modalButtonBar:{marginTop:15,display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginRight:10},"& button:last-child":{marginRight:0}},modalFormScrollable:{maxHeight:"calc(100vh - 300px)",overflowY:"auto",paddingTop:10}}},4681:(e,n,s)=>{s.d(n,{A:()=>o});s(5043);var t=s(9923),l=s(579);const o=e=>{let{placeholder:n="",onChange:s,overrideClass:o,value:r,id:a="search-resource",label:i="",sx:d}=e;return(0,l.jsx)(t.cl_,{placeholder:n,className:o||"",id:a,label:i,onChange:e=>{s(e.target.value)},value:r,startIcon:(0,l.jsx)(t.WIv,{}),sx:d})}},2415:(e,n,s)=>{s.r(n),s.d(n,{default:()=>j});var t=s(5043),l=s(9923),o=s(9456),r=s(3216),a=s(2961),i=s(9607),d=s(7403),u=s(6483),c=s(6681),x=s(4681),m=s(579);const p=e=>{let{setPoolDetailsView:n}=e;const s=(0,a.jL)(),p=(0,r.Zp)(),v=(0,o.d4)((e=>e.tenants.loadingTenant)),f=(0,o.d4)((e=>e.tenants.tenantInfo)),[j,h]=(0,t.useState)([]),[g,y]=(0,t.useState)("");(0,t.useEffect)((()=>{if(f){const e=f.pools?f.pools:[];h(e)}}),[f]);const C=j.filter((e=>{var n;return!(null===(n=e.name)||void 0===n||!n.toLowerCase().includes(g.toLowerCase()))})),b=[{type:"view",onClick:e=>{s((0,i.mw)(e.name)),n()}}];return(0,m.jsxs)(t.Fragment,{children:[(0,m.jsxs)(l.xA9,{item:!0,xs:12,sx:d._.actionsTray,children:[(0,m.jsx)(x.A,{value:g,onChange:e=>{y(e)},placeholder:"Filter",id:"search-resource"}),(0,m.jsx)(c.A,{tooltip:"Expand Tenant",children:(0,m.jsx)(l.$nd,{id:"expand-tenant",label:"Expand Tenant",onClick:()=>{p("/namespaces/".concat((null===f||void 0===f?void 0:f.namespace)||"","/tenants/").concat((null===f||void 0===f?void 0:f.name)||"","/add-pool"))},icon:(0,m.jsx)(l.REV,{}),variant:"callAction"})})]}),(0,m.jsx)(l.xA9,{item:!0,xs:12,children:(0,m.jsx)(l.bQt,{itemActions:b,columns:[{label:"Name",elementKey:"name"},{label:"Total Capacity",elementKey:"capacity",renderFullObject:!0,renderFunction:e=>(0,u.qO)(e.volumes_per_server*e.servers*e.volume_configuration.size)},{label:"Servers",elementKey:"servers"},{label:"Volumes/Server",elementKey:"volumes_per_server"}],isLoading:v,records:C,entityName:"Servers",idField:"name",customEmptyMessage:"No Pools found",customPaperHeight:"calc(100vh - 400px)"})})]})},v={display:"grid",gridTemplateColumns:"2fr 1fr",gridAutoFlow:"row",gap:2,padding:"15px",["@media (max-width: ".concat(l.nmC.sm,"px)")]:{gridTemplateColumns:"1fr",gridAutoFlow:"dense"}},f=()=>{var e,n,s,a,i,d,c,x,p,f,j;const h=(0,r.Zp)(),g=(0,o.d4)((e=>e.tenants.tenantInfo)),y=(0,o.d4)((e=>e.tenants.selectedPool));if(null===g)return(0,m.jsx)(t.Fragment,{});const C=(null===(e=g.pools)||void 0===e?void 0:e.find((e=>e.name===y)))||null;if(null===C)return null;let b="None";return C.affinity&&(b=C.affinity.nodeAffinity?"Node Selector":"Default (Pod Anti-Affinity)"),(0,m.jsx)(t.Fragment,{children:(0,m.jsxs)(l.azJ,{withBorders:!0,customBorderPadding:"0px",sx:{width:"100%"},children:[(0,m.jsx)(l._xt,{separator:!0,actions:(0,m.jsx)(l.$nd,{icon:(0,m.jsx)(l.qI7,{}),onClick:()=>{h("/namespaces/".concat((null===g||void 0===g?void 0:g.namespace)||"","/tenants/").concat((null===g||void 0===g?void 0:g.name)||"","/edit-pool"))},label:"Edit Pool",id:"editPool"}),children:"Pool Configuration"}),(0,m.jsxs)(l.azJ,{sx:{...v},children:[(0,m.jsx)(l.mZW,{label:"Pool Name",value:C.name}),(0,m.jsx)(l.mZW,{label:"Total Volumes",value:C.volumes_per_server}),(0,m.jsx)(l.mZW,{label:"Volumes per server",value:C.volumes_per_server}),(0,m.jsx)(l.mZW,{label:"Capacity",value:(0,u.qO)(C.volumes_per_server*C.servers*C.volume_configuration.size)}),(0,m.jsx)(l.mZW,{label:"Runtime Class Name",value:C.runtimeClassName})]}),(0,m.jsx)(l._xt,{separator:!0,children:"Resources"}),(0,m.jsxs)(l.azJ,{sx:{...v},children:[C.resources&&(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)(l.mZW,{label:"CPU",value:null===(n=C.resources)||void 0===n||null===(s=n.requests)||void 0===s?void 0:s.cpu}),(0,m.jsx)(l.mZW,{label:"Memory",value:(0,u.qO)(null===(a=C.resources)||void 0===a||null===(i=a.requests)||void 0===i?void 0:i.memory)})]}),(0,m.jsx)(l.mZW,{label:"Volume Size",value:(0,u.qO)(C.volume_configuration.size)}),(0,m.jsx)(l.mZW,{label:"Storage Class Name",value:C.volume_configuration.storage_class_name})]}),C.securityContext&&(C.securityContext.runAsNonRoot||C.securityContext.runAsUser||C.securityContext.runAsGroup||C.securityContext.fsGroup)&&(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)(l._xt,{separator:!0,children:"Security Context"}),(0,m.jsxs)(l.azJ,{children:[null!==C.securityContext.runAsNonRoot&&(0,m.jsx)(l.azJ,{sx:{...v},children:(0,m.jsx)(l.mZW,{label:"Run as Non Root",value:C.securityContext.runAsNonRoot?"Yes":"No"})}),(0,m.jsxs)(l.azJ,{sx:{display:"grid",gridTemplateColumns:"2fr 1fr",gridAutoFlow:"row",gap:2,padding:"15px",["@media (max-width: ".concat(l.nmC.sm,"px)")]:{gridTemplateColumns:"1fr",gridAutoFlow:"dense"},["@media (max-width: ".concat(l.nmC.md,"px)")]:{gridTemplateColumns:"2fr 1fr"},["@media (max-width: ".concat(l.nmC.lg,"px)")]:{gridTemplateColumns:"1fr 1fr 1fr"}},children:[C.securityContext.runAsUser&&(0,m.jsx)(l.mZW,{label:"Run as User",value:C.securityContext.runAsUser}),C.securityContext.runAsGroup&&(0,m.jsx)(l.mZW,{label:"Run as Group",value:C.securityContext.runAsGroup}),C.securityContext.fsGroup&&(0,m.jsx)(l.mZW,{label:"FsGroup",value:C.securityContext.fsGroup})]})]})]}),(0,m.jsx)(l._xt,{separator:!0,children:"Affinity"}),(0,m.jsxs)(l.azJ,{children:[(0,m.jsxs)(l.azJ,{sx:{...v},children:[(0,m.jsx)(l.mZW,{label:"Type",value:b}),null!==(d=C.affinity)&&void 0!==d&&d.nodeAffinity&&null!==(c=C.affinity)&&void 0!==c&&c.podAntiAffinity?(0,m.jsx)(l.mZW,{label:"With Pod Anti affinity",value:"Yes"}):(0,m.jsx)("span",{})]}),(null===(x=C.affinity)||void 0===x?void 0:x.nodeAffinity)&&(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)(l._xt,{separator:!0,children:"Labels"}),(0,m.jsx)("ul",{children:null===(p=C.affinity)||void 0===p||null===(f=p.nodeAffinity)||void 0===f||null===(j=f.requiredDuringSchedulingIgnoredDuringExecution)||void 0===j?void 0:j.nodeSelectorTerms.map((e=>{var n;return null===(n=e.matchExpressions)||void 0===n?void 0:n.map((e=>{var n;return(0,m.jsxs)("li",{children:[e.key," - ",null===(n=e.values)||void 0===n?void 0:n.join(", ")]})}))}))})]})]}),C.tolerations&&C.tolerations.length>0&&(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)(l._xt,{separator:!0,children:"Tolerations"}),(0,m.jsx)(l.azJ,{children:(0,m.jsx)("ul",{children:C.tolerations.map((e=>{var n,s;return(0,m.jsx)("li",{children:"Equal"===e.operator?(0,m.jsxs)(t.Fragment,{children:["If ",(0,m.jsx)("strong",{children:e.key})," is equal to"," ",(0,m.jsx)("strong",{children:e.value})," then"," ",(0,m.jsx)("strong",{children:e.effect})," after"," ",(0,m.jsx)("strong",{children:(null===(n=e.tolerationSeconds)||void 0===n?void 0:n.seconds)||0})," ","seconds"]}):(0,m.jsxs)(t.Fragment,{children:["If ",(0,m.jsx)("strong",{children:e.key})," exists then"," ",(0,m.jsx)("strong",{children:e.effect})," after"," ",(0,m.jsx)("strong",{children:(null===(s=e.tolerationSeconds)||void 0===s?void 0:s.seconds)||0})," ","seconds"]})})}))})})]})]})})},j=()=>{const e=(0,a.jL)(),n=(0,r.Zp)(),{pathname:s=""}=(0,r.zy)(),d=(0,o.d4)((e=>e.tenants.selectedPool)),u=(0,o.d4)((e=>e.tenants.poolDetailsOpen));return(0,m.jsxs)(t.Fragment,{children:[u&&(0,m.jsx)(l.azJ,{children:(0,m.jsx)(l.EGL,{label:"Pools list",onClick:()=>{n(s),e((0,i.VG)(!1))}})}),(0,m.jsx)(l._xt,{separator:!0,sx:{marginBottom:15},children:u?"Pool Details - ".concat(d||""):"Pools"}),(0,m.jsx)(l.azJ,{children:u?(0,m.jsx)(f,{}):(0,m.jsx)(p,{setPoolDetailsView:()=>{e((0,i.VG)(!0))}})})]})}}}]);
//# sourceMappingURL=415.6349f8fe.chunk.js.map