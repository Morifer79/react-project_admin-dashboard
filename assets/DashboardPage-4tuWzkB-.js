import{b as c,t as r,u as $,c as m,r as y,g as z,j as s,N as t,s as a,d,P as j,S as v}from"./index-aiNyUlUS.js";import{s as k,W as E,T as u,a as b,H as g,b as l,F as f,S}from"./RecentCustomTable.styled-H926uf3G.js";import{C as T}from"./Container-BfbsDr_R.js";import{n as C}from"./noImg-2kaSk84E.js";const D=c.ul`
  margin-block-start: ${r.spacing(10)};
  display: flex;
  flex-wrap: wrap;
  gap: ${r.spacing(10)};
  @media (width > 1439px) {
    margin-inline-start: ${r.spacing(40)};
  }
  li {
    padding: ${r.spacing(7)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    inline-size: 157px;
    block-size: 98px;

    cursor: pointer;
    border: 1px solid ${r.colors.alfablue};
    border-radius: ${r.radii.l};
    background-color: ${r.colors.light};
    transition: border-color ${r.transition};

    @media (width > 767px) {
      padding: ${r.spacing(7)} ${r.spacing(9)};
      inline-size: 221px;
      block-size: 108px;
    }
    @media (width > 1439px) {
      inline-size: 240px;
      block-size: 108px;
    }

    &:is(:hover, :focus, .active) {
      border-color: ${r.colors.primary};
    }
  }

  li svg {
    inline-size: 18px;
    block-size: 18px;
    stroke: ${r.colors.main};
    fill: none;
    @media (width > 767px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }
`,x=c.div`
  display: flex;
  align-items: center;
  gap: ${r.spacing(4)};
`,h=c.h2`
  color: ${r.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`,p=c.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,A=()=>{const i=$(),{productsCount:n,suppliersCount:o,customersCount:e}=m(k);return y.useEffect(()=>{i(z())},[i]),s.jsxs(D,{children:[s.jsx("li",{children:s.jsxs(t,{to:"/products",children:[s.jsxs(x,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${a}#icon-db`})}),s.jsx(h,{children:"All products"})]}),s.jsx(p,{children:n})]})}),s.jsx("li",{children:s.jsxs(t,{to:"/suppliers",children:[s.jsxs(x,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${a}#icon-db`})}),s.jsx(h,{children:"All suppliers"})]}),s.jsx(p,{children:o})]})}),s.jsx("li",{children:s.jsxs(t,{to:"/customers",children:[s.jsxs(x,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${a}#icon-users`})}),s.jsx(h,{children:"All Customers "})]}),s.jsx(p,{children:e})]})})]})},L=c.div`
  inline-size: 80px;
  block-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:i})=>i==="Expense"&&d`
      color: ${r.colors.accent};
      background-color: #e8505019;
    `};
  ${({$variant:i})=>i==="Income"&&d`
      color: ${r.colors.primary};
      background-color: #59b17a19;
    `};
  ${({$variant:i})=>i==="Error"&&d`
      color: ${r.colors.main};
      background-color: ${r.colors.alfablue};
    `};
`,w=({$variant:i,prop:n})=>s.jsx(L,{$variant:i,children:n});w.propTypes={prop:j.any,$variant:j.string};const R=()=>{const i=$(),{recentCustomers:n,incomeExpenses:o}=m(k);return y.useEffect(()=>{i(z())},[i]),s.jsxs(E,{children:[s.jsx(u,{children:s.jsxs(b,{className:"first",children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(g,{colSpan:"6",children:"Recent Customers"})})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx(l,{children:"Name"}),s.jsx(l,{children:"Email"}),s.jsx(l,{children:"Spent"}),s.jsx(l,{children:"Phone"}),s.jsx(l,{children:"Address"}),s.jsx(l,{children:"Register Date"})]}),n==null?void 0:n.map(e=>s.jsxs("tr",{children:[s.jsxs(f,{children:[s.jsx("img",{src:e.photo?e.photo:C,alt:"user"}),s.jsx("span",{children:e.name})]}),s.jsx("td",{children:e.email}),s.jsx("td",{children:e.spent}),s.jsx("td",{children:e.phone}),s.jsx("td",{children:e.address}),s.jsx("td",{children:e.register_date})]},e._id))]})]})}),s.jsx(u,{children:s.jsxs(b,{children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(g,{colSpan:"3",children:"Income/Expenses"})})}),s.jsxs("tbody",{children:[s.jsx("tr",{children:s.jsx(l,{colSpan:"3",children:"Today"})}),o==null?void 0:o.map(e=>s.jsxs("tr",{children:[s.jsx(f,{children:s.jsx(w,{prop:e.type,$variant:e.type})}),s.jsx(S,{children:e.name}),s.jsx("td",{style:{color:`${e.type}`=="Expense"?"#E85050":`${e.type}`=="Income"?"#59B17A":"#1D1E21",textDecoration:`${e.type}`=="Error"&&"line-through"},children:e.amount})]},e._id))]})]})})]})},I=()=>{const i=window.innerWidth;return s.jsxs(T,{children:[i>1439&&s.jsx(v,{}),s.jsx(A,{}),s.jsx(R,{})]})};function F(){return s.jsx(I,{})}export{F as default};
