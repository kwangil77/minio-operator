"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[732],{7403:(e,t,a)=>{a.d(t,{U:()=>s,_:()=>n});const n={label:{color:"#07193E",fontSize:13,alignSelf:"center",whiteSpace:"nowrap","&:not(:first-of-type)":{marginLeft:10}},actionsTray:{display:"flex",justifyContent:"space-between",marginBottom:"1rem",alignItems:"center","& button":{flexGrow:0,marginLeft:8}}},s={modalButtonBar:{marginTop:15,display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginRight:10},"& button:last-child":{marginRight:0}},modalFormScrollable:{maxHeight:"calc(100vh - 300px)",overflowY:"auto",paddingTop:10}}},4681:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var n=a(9923),s=a(579);const l=e=>{let{placeholder:t="",onChange:a,overrideClass:l,value:c,id:o="search-resource",label:r="",sx:i}=e;return(0,s.jsx)(n.cl_,{placeholder:t,className:l||"",id:o,label:r,onChange:e=>{a(e.target.value)},value:c,startIcon:(0,s.jsx)(n.WIv,{}),sx:i})}},732:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(5043),s=a(9923),l=a(9456),c=a(3097),o=a.n(c),r=a(7403),i=a(2961),m=a(4159),d=a(3216),p=a(649),u=a(2237),h=a(4681),x=a(579);const g=(0,u.A)(n.lazy((()=>a.e(729).then(a.bind(a,1729))))),f=()=>{const e=(0,i.jL)(),t=(0,d.Zp)(),{tenantName:a,tenantNamespace:c}=(0,d.g)(),u=(0,l.d4)((e=>e.tenants.loadingTenant)),[f,C]=(0,n.useState)([]),[b,v]=(0,n.useState)(""),[y,w]=(0,n.useState)(!0),[j,S]=(0,n.useState)(null),[A,k]=(0,n.useState)(!1);(0,n.useEffect)((()=>{y&&p.A.invoke("GET","/api/v1/namespaces/".concat(c,"/tenants/").concat(a,"/pvcs")).then((e=>{let t=o()(e,"pvcs",[]);C(t||[]),w(!1)})).catch((t=>{w(!1),e((0,m.C9)(t))}))}),[y,e,a,c]);const L=f.filter((e=>e.name.toLowerCase().includes(b.toLowerCase())));return(0,n.useEffect)((()=>{u&&w(!0)}),[u]),(0,x.jsxs)(n.Fragment,{children:[A&&(0,x.jsx)(g,{deleteOpen:A,selectedPVC:j,closeDeleteModalAndRefresh:e=>{k(!1),w(!0)}}),(0,x.jsxs)(s.azJ,{children:[(0,x.jsx)(s._xt,{separator:!0,sx:{marginBottom:15},children:"Volumes"}),(0,x.jsx)(s.xA9,{item:!0,xs:12,sx:r._.actionsTray,children:(0,x.jsx)(h.A,{value:b,onChange:e=>{v(e)},placeholder:"Search Volumes (PVCs)",id:"search-resource"})}),(0,x.jsx)(s.xA9,{item:!0,xs:12,children:(0,x.jsx)(s.bQt,{itemActions:[{type:"view",onClick:e=>{t("/namespaces/".concat(c||"","/tenants/").concat(a||"","/pvcs/").concat(e.name))}},{type:"delete",onClick:e=>{const t={...e,tenant:a,namespace:c};S(t),k(!0)}}],columns:[{label:"Name",elementKey:"name"},{label:"Status",elementKey:"status",width:120},{label:"Capacity",elementKey:"capacity",width:120},{label:"Storage Class",elementKey:"storageClass"}],isLoading:y,records:L,entityName:"PVCs",idField:"name",customPaperHeight:"calc(100vh - 400px)"})})]})]})}}}]);
//# sourceMappingURL=732.33ddca24.chunk.js.map