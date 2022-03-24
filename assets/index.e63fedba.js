var Oe=Object.defineProperty,Me=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var M=(e,t,r)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&M(e,r,t[r]);if(L)for(var r of L(t))ae.call(t,r)&&M(e,r,t[r]);return e},v=(e,t)=>Me(e,$e(t));var C=(e,t)=>{var r={};for(var a in e)re.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&L)for(var a of L(e))t.indexOf(a)<0&&ae.call(e,a)&&(r[a]=e[a]);return r};var se=(e,t,r)=>(M(e,typeof t!="symbol"?t+"":t,r),r);import{n as g,B as b,D as ce,T as le,S as z,r as i,R as n,u as V,l as Ue,a as w,b as I,c as q,P as _e,L as $,d as ie,e as me,C as H,I as y,M as F,f as Y,g as U,h as P,F as Ke,i as f,j as _,k as de,m as x,N as Ee,o as Qe,p as ze,q as Ve,s as qe,t as He,Q as Ye,v as Je,w as Ge,x as We}from"./vendor.8490a3d0.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};Xe();const D=g.div`
display: flex;
align-items: center;
justify-content: ${e=>e.between?"space-between":void 0};
> * {
  margin-top: 0 !important;
  margin-bottom: ${e=>typeof e.marginBottom=="number"?e.marginBottom+"rem":0} ;
  margin-right: ${e=>typeof e.gap=="number"?e.gap+"rem":e.gap?"2rem":"0"}
}`,pe=g.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`,Ze=()=>React.createElement(pe,null,React.createElement(z,{size:"large"})),ge=({error:e})=>React.createElement(pe,null,React.createElement(N,{error:e}),React.createElement(ce,null)),fe=g(b)`
  padding: 0px;
`,et=e=>e==null?void 0:e.message,N=function({error:e}){return et(e)?React.createElement(le.Text,{type:"danger"},e.message):null},tt=g.div`
  padding: 3.2rem;
  width: 100%;
  display: flex;
  flex-direction: column; 
`,J="__auth_provider_token__",nt=()=>window.localStorage.getItem(J),he=({user:e})=>(window.localStorage.setItem(J,e.token||""),e),ye="http://localhost:3001",rt=e=>fetch(`${ye}/login`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(async t=>t.ok?he(await t.json()):Promise.reject(await t.json())),at=e=>fetch(`${ye}/register`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(async t=>t.ok?he(await t.json()):Promise.reject(await t.json())),be=async()=>{window.localStorage.removeItem(J)},st=e=>e==null||e==="",G=e=>{const t=E({},e);return Object.keys(t).forEach(r=>{const a=t[r];st(a)&&delete t[r]}),t},ot=e=>{i.exports.useEffect(()=>{e()},[])};function Fe(e,t){const[r,a]=i.exports.useState(e);return i.exports.useEffect(()=>{const s=setTimeout(()=>a(e),t);return()=>{clearTimeout(s)}},[e,t]),r}function ke(e,t=!0){const r=i.exports.useRef(document.title).current;i.exports.useEffect(()=>{document.title=e},[e]),i.exports.useEffect(()=>()=>{document.title=r},[r,t])}const ut=()=>{const e=i.exports.useRef(!1);return i.exports.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),e},ct=(e,t)=>{const r=Object.entries(e).filter(([a])=>t.includes(a));return Object.fromEntries(r)},lt={error:null,data:null,stat:"idle"},it=e=>{const t=ut();return i.exports.useCallback((...r)=>t.current?e(...r):void 0,[t,e])},O=e=>{const[t,r]=i.exports.useReducer((m,l)=>E(E({},m),l),E(E({},lt),e)),[a,s]=i.exports.useState(()=>()=>{}),o=it(r),u=i.exports.useCallback(m=>{o({error:null,data:m,stat:"success"})},[o]),c=i.exports.useCallback(m=>{o({error:m,stat:"error",data:null})},[o]),p=i.exports.useCallback((m,l)=>{if(!m||!m.then)throw new Error("\u8BF7\u4F20\u5165 Promise \u7C7B\u578B\u6570\u636E ");return s(()=>()=>{l!=null&&l.retry&&p(l==null?void 0:l.retry(),l)}),o({stat:"loading",data:null,error:null}),m.then(d=>(u(d),d)).catch(d=>(c(d),Promise.reject(d)))},[u,c,o]);return E({isIdle:t.stat==="idle",isLoading:t.stat==="loading",isError:t.stat==="error",isSuccess:t.stat==="success",run:p,setData:u,setError:c,retry:a},t)},mt=async()=>{let e=null;const t=nt();return t&&(e=(await ve("me",{token:t})).user),e},W=n.createContext(void 0);W.displayName="AuthContext";const dt=({children:e})=>{const t=V(),{isLoading:r,isError:a,run:s,isIdle:o,data:u,setData:c,error:p}=O();if(ot(()=>{s(mt())}),o||r)return n.createElement(Ze,null);if(a)return n.createElement(ge,{error:p});const m=k=>rt(k).then(A=>{c(A)}),l=k=>at(k).then(A=>c(A)),d=()=>be().then(()=>{c(null),t.clear()});return n.createElement(W.Provider,{value:{user:u,login:m,register:l,logout:d}},e)},j=()=>{const e=n.useContext(W);if(!e)throw new Error("useAuth\u5FC5\u987B\u518DAuthProvider \u4E2D\u4F7F\u7528");return e},Et="http://localhost:3001",ve=async(e,o={})=>{var u=o,{data:t,token:r,headers:a}=u,s=C(u,["data","token","headers"]);const c=E({method:"GET",headers:{Authorization:r?`Bearer ${r}`:"","Content-Type":"application/json"}},s);return c.method.toUpperCase()==="GET"?e+=`?${Ue.stringify(t)}`:c.body=JSON.stringify(t||{}),window.fetch(`${Et}/${e}`,c).then(async p=>{if(p.status===401)return await be(),window.location.reload(),Promise.reject({message:"\u8BF7\u91CD\u65B0\u767B\u5F55"});const m=await p.json();return p!=null&&p.ok?m:Promise.reject(m)})},h=()=>{const{user:e}=j();return(...[t,r])=>ve(t,v(E({},r),{token:e==null?void 0:e.token}))},X=(e,t)=>{const r=V();return{onSuccess:()=>r.invalidateQueries(e),async onMutate(a){const s=r.getQueryData(e);return r.setQueryData(e,o=>t(a,o)),{previousItems:s}},onError(a,s,o){r.setQueryData(e,o.previousItems)}}},Z=e=>X(e,(t,r)=>(r==null?void 0:r.filter(a=>a.id!==t.id))||[]),Ie=e=>X(e,(t,r)=>(r==null?void 0:r.map(a=>a.id===t.id?E(E({},a),t):a))||[]),ee=e=>X(e,(t,r)=>r?[...r,t]:[]),Ce=e=>{const t=h();return w(["projects",G(e)],()=>t("projects",{data:e}))},Pe=e=>{const t=h();return I(r=>t(`projects/${r.id}`,{method:"PATCH",data:r}),Ie(e))},pt=e=>{const t=h();return I(r=>t("projects",{data:r,method:"POST"}),ee(e))},gt=e=>{const t=h();return I(({id:r})=>t(`projects/${r}`,{method:"DELETE"}),Z(e))},xe=e=>{const t=h();return w(["project",{id:e}],()=>t(`projects/${e}`),{enabled:Boolean(e)})},B=e=>{const[t]=q(),r=te(),[a]=i.exports.useState(e);return[i.exports.useMemo(()=>ct(Object.fromEntries(t),a),[t,a]),s=>r(s)]},te=()=>{const[e,t]=q();return r=>{const a=G(E(E({},Object.fromEntries(e)),r));return t(a)}},T=function(){const[{projectCreate:e},t]=B(["projectCreate"]),[{editingProjectId:r},a]=B(["editingProjectId"]);q();const{data:s,isLoading:o}=xe(r),u=te(),c=()=>{t({projectCreate:!0})},p=()=>{u({projectCreate:"",editingProjectId:""})},m=l=>a({editingProjectId:l});return{projectModalOpen:e==="true"||Boolean(r),open:c,close:p,startEdit:m,editingProject:s,isLoading:o}},ft=()=>{const[e,t]=B(["name","personId"]);return[i.exports.useMemo(()=>v(E({},e),{personId:e.personId||void 0}),[e]),t]},K=()=>{const[e]=ft();return["projects",e]};function ht(){const{data:e,isLoading:t}=Ce(),r=e==null?void 0:e.filter(u=>u.pin),{open:a}=T(),s=function(){return n.createElement(o,null,n.createElement(le.Text,{type:"secondary"},"\u6536\u85CF\u9879\u76EE"),n.createElement($,null,r==null?void 0:r.map(u=>n.createElement($.Item,{key:u.id},n.createElement($.Item.Meta,{title:u.name})))),n.createElement(ie,null),n.createElement(fe,{type:"link",onClick:()=>a()},"\u521B\u5EFA\u9879\u76EE"))},o=g.div`
    min-width:15rem;
  `;return n.createElement(_e,{placement:"bottom",content:s},n.createElement("h2",null,"\u9879\u76EE"))}function yt(){return n.createElement("div",null,"Epic")}const bt=e=>{const t=h();return w(["kanbans",e],()=>t("kanbans",{data:e}))},Ft=e=>{const t=h();return V(),I(r=>t("kanbans",{data:r,method:"POST"}),ee(e))},kt=e=>{const t=h();return I(({id:r})=>t(`kanbans/${r}`,{method:"DELETE"}),Z(e))},vt=e=>{const t=h();return I(r=>t("tasks",{data:r,method:"POST"}),ee(e))},Be=e=>{const t=h(),r=v(E({},e),{name:Fe(e==null?void 0:e.name,200)});return w(["tasks",r],()=>t("tasks",{data:r}))},It=e=>{const t=h();return w(["task",{id:e}],()=>t(`tasks/${e}`),{enabled:Boolean(e)})},Ct=e=>{const t=h();return I(r=>t(`tasks/${r.id}`,{data:r,method:"PATCH"}),Ie(e))},Pt=e=>{const t=h();return I(({id:r})=>t(`tasks/${r}`,{method:"DELETE"}),Z(e))},we=()=>{const e=h();return w(["tasksType"],()=>e("taskTypes"))},R=()=>{var r;const{pathname:e}=me(),t=(r=e.match(/projects\/(\d+)/))==null?void 0:r[1];return Number(t)},xt=()=>xe(R()),Ae=()=>({projectId:R()}),Te=()=>["kanbans",Ae()],S=()=>{const e=R(),[t,r]=B(["name","typeId","processorId","tagId"]);return i.exports.useMemo(()=>({projectId:e,typeId:Number(t.typeId)||void 0,processorId:Number(t.processorId)||void 0,tagId:Number(t.tagId)||void 0,name:t.name||void 0}),[e,t])},Q=()=>["tasks",S()],De=()=>{const[{editingTaskId:e},t]=B(["editingTaskId"]),{data:r,isLoading:a}=It(Number(e)),s=i.exports.useCallback(u=>{console.log("test"),t({editingTaskId:u})},[t]),o=i.exports.useCallback(()=>{t({editingTaskId:""})},[t]);return{editingTask:r,editingTaskId:e,startEdit:s,close:o,isLoading:a}};var Bt="/assets/task.e5ad6607.svg",wt="/assets/bug.5ca02341.svg";function At({kanbanId:e}){const[t,r]=i.exports.useState(""),{mutateAsync:a}=vt(Q()),s=R(),[o,u]=i.exports.useState(!1),c=async()=>{await a({name:t,kanbanId:e,projectId:s}),r(""),u(!1)},p=()=>u(m=>!m);return i.exports.useEffect(()=>{o||r("")},[o]),o?n.createElement(H,null,n.createElement(y,{onBlur:p,placeholder:"\u9700\u8981\u505A\u4E9B\u4EC0\u4E48",autoFocus:!0,onPressEnter:c,value:t,onChange:m=>r(m.target.value)})):n.createElement("div",{onClick:p},"+\u521B\u5EFA\u4E8B\u52A1")}const Tt=({name:e,keyword:t})=>{if(!t)return n.createElement(n.Fragment,null,e);const r=e.split(t);return n.createElement(n.Fragment,null,r.map((a,s)=>n.createElement("span",{key:s},a,s===r.length-1?null:n.createElement("span",{style:{color:"#257AFD"}},t))))},Dt=({id:e})=>{const{data:t}=we(),r=t==null?void 0:t.find(a=>a.id===e);return r!=null&&r.name?React.createElement("img",{alt:"task-icon",src:r.name==="task"?Bt:wt}):null},jt=({task:e})=>{const{startEdit:t}=De(),{name:r}=S();return React.createElement(H,{onClick:()=>{t(e.id)},style:{marginBottom:"0.5rem",cursor:"pointer "},key:e.id},React.createElement("p",null," ",React.createElement(Tt,{name:e.name,keyword:r||""})),React.createElement(Dt,{id:e.typeId}))},Rt=({kanban:e})=>{const{data:t}=Be(S()),r=t==null?void 0:t.filter(a=>a.kanbanId===e.id);return React.createElement(je,null,React.createElement(D,{between:!0}," ",React.createElement("h3",null,e.name)," ",React.createElement(St,{kanban:e})),React.createElement(Lt,null,r==null?void 0:r.map(a=>React.createElement(jt,{task:a})),React.createElement(At,{kanbanId:e.id})))},St=({kanban:e})=>{const{mutateAsync:t}=kt(Te()),r=()=>{U.confirm({okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",title:"\u786E\u5B9A\u5220\u9664\u770B\u677F\u5417",onOk(){return t({id:e.id})}})},a=React.createElement(F,null,React.createElement(F.Item,null,React.createElement(b,{onClick:r,type:"link"},"\u5220\u9664")));return React.createElement(Y,{overlay:a},React.createElement(b,{type:"link"},"..."))},je=g.div`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  min-width: 27rem;
  background-color: rgb(244, 245, 247);
  padding: 0.7rem 0.7rem 1rem;
  /* border: 1px solid red */
  margin-right: 1.5rem;
`,Lt=g.div`
  overflow: scroll;
  flex: 1;
  ::-webkit-scrollbar {
    display: none;
  }
`,Nt=()=>{const[e,t]=i.exports.useState(""),r=R(),{mutateAsync:a}=Ft(Te()),s=async()=>{await a({name:e,projectId:r}),t("")};return n.createElement(je,null,n.createElement(y,{size:"large",placeholder:"\u65B0\u5EFA\u770B\u677F\u540D\u79F0",onPressEnter:s,value:e,onChange:o=>t(o.target.value)}))},Re=e=>{const u=e,{value:t,onChange:r,defaultOptionName:a,options:s}=u,o=C(u,["value","onChange","defaultOptionName","options"]);return n.createElement(P,E({value:s!=null&&s.length?oe(t):0,onChange:c=>r==null?void 0:r(oe(c)||void 0)},o),a?n.createElement(P.Option,{value:0},a):null,s==null?void 0:s.map(c=>n.createElement(P.Option,{key:c.id,value:c.id},c.name)))},oe=e=>isNaN(Number(e))?0:Number(e),Se=e=>{const{data:t}=we();return n.createElement(Re,E({options:t||[]},e))},Le=function(e){const s=O(),{run:t}=s,r=C(s,["run"]),a=h();return i.exports.useEffect(()=>{t(a("users",{data:G(e||{})}))},[e]),r},ne=e=>{const{data:t}=Le();return n.createElement(Re,E({options:t||[]},e))},Ot=()=>{const e=S(),t=te(),r=()=>{t({typeId:void 0,processorId:void 0,tagId:void 0,name:void 0})};return n.createElement(D,{marginBottom:2,gap:!0},n.createElement(y,{style:{width:"20rem"},placeholder:"\u9879\u76EE\u540D",value:e.name,onChange:a=>{t({name:a.target.value})}}),n.createElement(ne,{defaultOptionName:"\u7ECF\u529E\u4EBA",value:e.processorId,onChange:a=>{t({processorId:a})}}),n.createElement(Se,{defaultOptionName:"\u7C7B\u578B",value:e.typeId,onChange:a=>t({typeId:a})}),n.createElement(b,{onClick:()=>r()},"\u6E05\u9664\u7B5B\u9009\u5668"))},Mt={labelCol:{span:8},wrapperCol:{span:16}};function $t(){const[e]=Ke.useForm(),{editingTaskId:t,editingTask:r,close:a}=De(),{mutateAsync:s,isLoading:o}=Ct(Q()),u=()=>{a(),e.resetFields()},c=async()=>{await s(E(E({},r),e.getFieldsValue())),a()},{mutateAsync:p}=Pt(Q());i.exports.useEffect(()=>{e.setFieldsValue(r)},[e,r]);const m=()=>{a(),U.confirm({title:"\u786E\u5B9A\u5220\u9664\u4EFB\u52A1\u5417",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:()=>p({id:Number(t)})})};return n.createElement(U,{forceRender:!0,onCancel:u,onOk:c,okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",confirmLoading:o,title:"\u7F16\u8F91\u4EFB\u52A1",visible:!!t},n.createElement(f,v(E({form:e},Mt),{initialValues:r}),n.createElement(f.Item,{name:"name",label:"\u4EFB\u52A1\u540D"},n.createElement(y,null)),n.createElement(f.Item,{label:"\u7ECF\u529E\u4EBA",name:"processorId"},n.createElement(ne,{defaultOptionName:"\u7ECF\u529E\u4EBA"})),n.createElement(f.Item,{label:"\u7C7B\u578B",name:"typeId"},n.createElement(Se,null)),n.createElement("div",{style:{textAlign:"right"}},n.createElement(b,{type:"link",onClick:m},"\u5220\u9664"))))}function Ut(){ke("\u770B\u677F\u5217\u8868");const{data:e}=xt(),{data:t,isLoading:r}=bt(Ae()),{isLoading:a}=Be(S()),s=a||r;return n.createElement(tt,null,n.createElement("h1",null,e==null?void 0:e.name,"\u770B\u677F"),n.createElement(Ot,null),s?n.createElement(z,{size:"large"}):n.createElement(_t,null,t==null?void 0:t.map(o=>n.createElement(Rt,{kanban:o})),n.createElement(Nt,null)),n.createElement($t,null))}const _t=g.div`
  display: flex;
  /* overflow: scroll; */
  flex: 1;
  overflow-x: scroll;
`,Kt=()=>{const e=me().pathname.split("/");return e[e.length-1]};function Qt(){const e=Kt();return n.createElement(qt,null,n.createElement(zt,null,n.createElement(F,{mode:"inline",selectedKeys:[e]},n.createElement(F.Item,{key:"kanban"},n.createElement(_,{to:"kanban"},"\u770B\u677F")),n.createElement(F.Item,{key:"epic"},n.createElement(_,{to:"epic"},"\u4EFB\u52A1\u7EC4")))),n.createElement(Vt,null,n.createElement(de,null,n.createElement(x,{path:"/kanban",element:n.createElement(Ut,null)}),n.createElement(x,{path:"/epic",element:n.createElement(yt,null)}),n.createElement(x,{path:"/*",element:n.createElement(Ee,{to:"kanban",replace:!0})}))))}const zt=g.aside`
  background-color: rgb(244, 245, 247);
  display: flex;
`,Vt=g.div`
  box-shadow: -5px 0 5px -5px rgba(0,0,0, 0.1);
  display: flex;
  overflow: hidden;
`,qt=g.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  /* height: 100vh; */
  grid-template-rows: 1fr ;
  overflow: hidden;
`,ue=a=>{var s=a,{checked:e,onCheckedChange:t}=s,r=C(s,["checked","onCheckedChange"]);return n.createElement(Qe,E({count:1,value:e?1:0,onChange:o=>t==null?void 0:t(!!o)},r))};function Ht(r){var a=r,{users:e}=a,t=C(a,["users"]);const{mutate:s}=Pe(K()),{startEdit:o}=T(),u=l=>d=>{s({id:l,pin:d})},{mutate:c}=gt(K()),p=l=>()=>o(l),m=l=>()=>c(String(l));return T(),n.createElement(ze,v(E({},t),{columns:[{title:n.createElement(ue,{checked:!0,disabled:!0}),render(l,d){return n.createElement(ue,{checked:d.pin,onCheckedChange:u(d.id)})}},{title:"\u540D\u79F0",sorter:(l,d)=>l.name.localeCompare(d.name),render(l,d){return n.createElement(_,{to:String(d.id)},d.name)}},{title:"\u90E8\u95E8",dataIndex:"organization"},{title:"\u521B\u5EFA\u65F6\u95F4",render(l,d){return n.createElement("span",null,d.created?Ve(d.created).format("YYYY-MM-DD"):"\u65E0")}},{title:"\u8D1F\u8D23\u4EBA",render(l,d){var k;return n.createElement("span",null,((k=e.find(A=>A.id===d.personId))==null?void 0:k.name)||"\u672A\u77E5")}},{render(l,d){return n.createElement(Y,{overlay:n.createElement(F,null,n.createElement(F.Item,{key:"edit",onClick:p(d.id)},"\u7F16\u8F91"),n.createElement(F.Item,{key:"delete",onClick:m(d.id)},"\u5220\u9664"))},n.createElement(fe,{type:"link"},"..."))}}]}))}function Yt({param:e,setParam:t,users:r}){h();let[a,s]=i.exports.useState("");i.exports.useEffect(()=>{var u;r.length>0&&s((u=r.find(c=>c.id==e.personId))==null?void 0:u.name)},[r]);const o=i.exports.useMemo(()=>function(){return n.createElement(P,{labelInValue:!0,defaultValue:{value:a||"\u8D1F\u8D23\u4EBA",key:e.personId},onChange:u=>{t(v(E({},e),{personId:u.key}))}},n.createElement(P.Option,{value:""},"\u8D1F\u8D23\u4EBA"),r.map(u=>n.createElement(P.Option,{value:u.name,key:u.id},u.name)))},[a]);return n.createElement(Jt,{action:""},n.createElement(Gt,{placeholder:"\u9879\u76EE\u540D\u79F0",type:"text",size:"middle",value:e.name,onChange:u=>t(v(E({},e),{name:u.target.value}))}),n.createElement(o,null))}const Jt=g(f)`
  // display: flex;
  // justify-content: space-between;
  // margin-left: 1vw;
  // margin-right: 1vw;
`,Gt=g(y)`
  width: 30vw;
  margin-right: 2vw; 
`;function Wt(){h(),ke("\u9879\u76EE\u5217\u8868");const[e,t]=B(["name","personId"]),r=Fe(e,200),{isLoading:a,error:s,data:o}=Ce(r),{data:u}=Le(),{open:c}=T();return n.createElement(Xt,null,n.createElement(D,{between:!0},n.createElement("h1",null,"\u9879\u76EE\u5217\u8868"),n.createElement(b,{onClick:()=>{c()}},"\u521B\u5EFA\u9879\u76EE")),n.createElement(N,{error:s}),n.createElement(Yt,{param:e,setParam:t,users:u||[]}),n.createElement(Ht,{users:u||[],dataSource:o||void 0,loading:a}))}const Xt=g.div`
  padding:0 3rem 0 3rem;
  flex: 1
`,Zt=()=>{const{projectModalOpen:e,close:t,editingProject:r,isLoading:a}=T(),s=r?Pe:pt,{mutateAsync:o,error:u,isLoading:c}=s(K()),[p]=f.useForm(),m=k=>{console.log("Received values of form: ",k),o(E(E({},r),k)).then(()=>{p.resetFields(),t()})},l=()=>{p.resetFields(),t()},d=r?"\u7F16\u8F91\u9879\u76EE":"\u521B\u5EFA\u9879\u76EE";return i.exports.useEffect(()=>{p.setFieldsValue(r)},[r,p]),n.createElement(qe,{forceRender:!0,onClose:l,visible:e,width:"100%"},n.createElement(en,null,a?n.createElement(z,{size:"large"}):n.createElement(n.Fragment,null,n.createElement("h1",null,d),n.createElement(N,{error:u}),n.createElement(f,{form:p,layout:"vertical",style:{width:"40rem"},onFinish:m},n.createElement(f.Item,{label:"\u540D\u79F0",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D"}]},n.createElement(y,{placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"})),n.createElement(f.Item,{label:"\u90E8\u95E8",name:"organization",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D"}]},n.createElement(y,{placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D"})),n.createElement(f.Item,{label:"\u8D1F\u8D23\u4EBA",name:"personId"},n.createElement(ne,{defaultOptionName:"\u8D1F\u8D23\u4EBA"})),n.createElement(f.Item,{style:{textAlign:"right"}},n.createElement(b,{loading:c,type:"primary",htmlType:"submit"},"\u63D0\u4EA4"))))))},en=g.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function tn(){return n.createElement(He,null,n.createElement(an,null,n.createElement(nn,null),n.createElement(cn,null,n.createElement(de,null,n.createElement(x,{path:"/projects",element:n.createElement(Wt,null)}),n.createElement(x,{path:"/projects/:projectId/*",element:n.createElement(Qt,null)}),n.createElement(x,{path:"*",element:n.createElement(Ee,{to:"projects"})}))),n.createElement(Zt,null)))}const nn=()=>n.createElement(sn,{between:!0},n.createElement(on,{gap:!0},n.createElement(b,{type:"link",onClick:()=>{window.location.href=window.location.origin}},"Logo"),n.createElement(ht,null),n.createElement("h2",null,"\u7528\u6237")),n.createElement(un,null,n.createElement(rn,null))),rn=()=>{const{logout:e,user:t}=j();return n.createElement(Y,{overlay:n.createElement(F,null,n.createElement(F.Item,null,n.createElement(b,{type:"link",onClick:e},"\u9000\u51FA")))},n.createElement(b,{type:"link",onClick:r=>r.preventDefault()},"Hi, ",t==null?void 0:t.name))},an=g.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`,sn=g(D)`
  padding: 0 3rem 0 3rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`,on=g(D)``,un=g.div``,cn=g.main`
  display: flex;
  /* overflow: hidden; */
`;function ln({onError:e}){const{login:t,user:r}=j(),{run:a,isLoading:s}=O(),o=u=>{e(null),a(t(u).catch(e))};return n.createElement(f,{onFinish:o},n.createElement(f.Item,{name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},n.createElement(y,{placeholder:"\u7528\u6237\u540D",type:"text",id:"username"})),n.createElement(f.Item,{name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},n.createElement(y,{placeholder:"\u5BC6\u7801",id:"password"})),n.createElement(Ne,{type:"primary",htmlType:"submit",loading:s}," \u767B\u5F55"))}function mn({onError:e}){const{run:t,isLoading:r}=O(),{register:a,user:s}=j(),o=p=>{var m=p,{cpassword:u}=m,c=C(m,["cpassword"]);if(e(null),u!==c.password){e(new Error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"));return}t(a(c).catch(l=>{e(l)}))};return n.createElement(f,{onFinish:o},n.createElement(f.Item,{name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]},n.createElement(y,{placeholder:"\u7528\u6237\u540D",type:"text",id:"username"})),n.createElement(f.Item,{name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},n.createElement(y,{placeholder:"\u5BC6\u7801",id:"password"})),n.createElement(f.Item,{name:"cpassword",rules:[{required:!0,message:"\u8BF7\u786E\u8BA4\u5BC6\u7801"}]},n.createElement(y,{placeholder:"\u5BC6\u7801",id:"cpassword"})),n.createElement(Ne,{type:"primary",htmlType:"submit",loading:r}," \u6CE8\u518C"))}function dn(){const[e,t]=n.useState(!1),[r,a]=n.useState(null);return n.createElement(pn,null,n.createElement(gn,null,n.createElement(En,null,e?"\u8BF7\u6CE8\u518C":"\u8BF7\u767B\u5F55"),n.createElement(N,{error:r}),e?n.createElement(mn,{onError:a}):n.createElement(ln,{onError:a}),n.createElement(ie,null),n.createElement("a",{onClick:()=>{a(null),t(!e)}},e?"\u5DF2\u7ECF\u6709\u8D26\u53F7\u4E86\uFF1F\u76F4\u63A5\u767B\u5F55":"\u6CA1\u6709\u8D26\u53F7?\u6CE8\u518C\u65B0\u8D26\u53F7 ")))}const En=g.h1`
  margin-bottom : 2.4rem;
  color: rgb(94, 108, 132)
`,Ne=g(b)`
  width: 100%;
  `,pn=g.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
`,gn=g(H)`
  width: 40rem;
  min-height: 56rem;
  padding:3.2rem 4rem;
  box-sizing: border-box;
  box-shadow: rgba(0,0,0,0,0.1) 0 0 10px;
  text-align: center;
`;class fn extends n.Component{constructor(){super(...arguments);se(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){const{error:t}=this.state,{fallbackRender:r,children:a}=this.props;return t?r({error:t}):a}}function hn(){const{user:e}=j();return document.addEventListener("error",t=>{alert(t)}),React.createElement("div",{className:"App"},React.createElement(fn,{fallbackRender:ge},e?React.createElement(tn,null):React.createElement(dn,null)))}function yn({children:e}){return n.createElement(Ye,{client:new Je},n.createElement(dt,null,e))}Ge(()=>{We.render(n.createElement(n.StrictMode,null,n.createElement(yn,null,n.createElement(ce,null),n.createElement(hn,null))),document.getElementById("root"))});