import{r as c,u,c as x,i as j,j as s,S as m}from"./index-DS3f5kjc.js";import{u as p,S as b}from"./StyledButton-B5I-gKTI.js";import{C as f}from"./Container-BDdAzZ9R.js";import{T as g,a as S,B as C,S as F,b as T}from"./OrdersTable.styled-DxDHnO6w.js";import{e as y,H as B,b as n,F as w}from"./RecentCustomTable.styled-I-HKkEBc.js";import{n as E}from"./noImg-2kaSk84E.js";const P=()=>{var d;const[e,o]=c.useState(1),a=u(),i=x(y),t=Math.ceil(i.total/5),l=()=>e===1?void 0:o(e-1),h=()=>e===t?void 0:o(e+1);return c.useEffect(()=>{a(j({page:e}))},[a,e]),s.jsxs(s.Fragment,{children:[s.jsx(g,{children:s.jsxs(S,{children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(B,{colSpan:"6",children:"Customers Data"})})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx(n,{children:"User Info"}),s.jsx(n,{children:"Email"}),s.jsx(n,{children:"Address"}),s.jsx(n,{children:"Phone"}),s.jsx(n,{children:"Register date"})]}),(d=i.result)==null?void 0:d.map(r=>s.jsxs("tr",{children:[s.jsxs(w,{children:[s.jsx("img",{src:r.image?r.image:E,alt:"user"}),s.jsx("span",{children:r.name})]}),s.jsx("td",{children:r.email}),s.jsx("td",{children:r.address}),s.jsx("td",{children:r.phone}),s.jsx("td",{children:r.register_date})]},r._id))]})]})}),s.jsxs(C,{children:[s.jsx("button",{type:"button",onClick:l,disabled:e===1,children:"🔼"}),s.jsxs("p",{children:[s.jsx("span",{children:e})," / ",t]}),s.jsx("button",{type:"button",onClick:h,disabled:e===t,children:"🔽"})]})]})},k=()=>{const e=window.innerWidth,{reset:o,register:a,handleSubmit:i}=p({mode:"onBlur"}),t=l=>{console.log(l),o()};return s.jsxs(f,{children:[e>1439&&s.jsx(m,{}),s.jsxs(F,{onSubmit:i(t),children:[s.jsx(T,{...a("filter",{autoComplete:"off"}),placeholder:"User Name"}),s.jsx(b,{prop:"Filter",$variant:"filter"})]}),s.jsx(P,{})]})};function M(){return s.jsx(k,{})}export{M as default};