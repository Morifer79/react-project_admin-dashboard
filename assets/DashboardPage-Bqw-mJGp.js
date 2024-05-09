import{b as l,t as i,u as m,c as $,r as y,g as z,j as s,N as t,s as d,d as a,P as j,S as v}from"./index-C1SJzE97.js";import{s as k,W as E,T as u,a as g,H as b,b as o,F as f,S}from"./RecentCustomTable.styled-bb2BtTdg.js";import{C as T}from"./Container-B8E9jT4v.js";import{n as C}from"./noImg-2kaSk84E.js";const D=l.ul`
  margin-block-start: ${i.spacing(10)};
  display: flex;
  flex-wrap: wrap;
  gap: ${i.spacing(10)};
  @media (width > 1439px) {
    margin-inline-start: ${i.spacing(40)};
  }
  li {
    padding: ${i.spacing(7)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    inline-size: 157px;
    block-size: 98px;

    cursor: pointer;
    border: 1px solid #1d1e2119;
    border-radius: ${i.radii.l};
    background-color: ${i.colors.light};
    transition: border-color ${i.transition};

    @media (width > 767px) {
      padding: ${i.spacing(7)} ${i.spacing(9)};
      inline-size: 221px;
      block-size: 108px;
    }
    @media (width > 1439px) {
      inline-size: 240px;
      block-size: 108px;
    }

    &:is(:hover, :focus, .active) {
      border-color: ${i.colors.primary};
    }
  }

  li svg {
    inline-size: 18px;
    block-size: 18px;
    stroke: ${i.colors.main};
    fill: none;
    @media (width > 767px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }
`,x=l.div`
  display: flex;
  align-items: center;
  gap: ${i.spacing(4)};
`,h=l.h2`
  color: #1d1e2166;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`,p=l.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,A=()=>{const r=m(),{productsCount:n,suppliersCount:c,customersCount:e}=$(k);return y.useEffect(()=>{r(z())},[r]),s.jsxs(D,{children:[s.jsx("li",{children:s.jsxs(t,{to:"/products",children:[s.jsxs(x,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${d}#icon-db`})}),s.jsx(h,{children:"All products"})]}),s.jsx(p,{children:n})]})}),s.jsx("li",{children:s.jsxs(t,{to:"/suppliers",children:[s.jsxs(x,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${d}#icon-db`})}),s.jsx(h,{children:"All suppliers"})]}),s.jsx(p,{children:c})]})}),s.jsx("li",{children:s.jsxs(t,{to:"/customers",children:[s.jsxs(x,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${d}#icon-users`})}),s.jsx(h,{children:"All Customers "})]}),s.jsx(p,{children:e})]})})]})},L=l.div`
  inline-size: 80px;
  block-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:r})=>r==="Expense"&&a`
      color: ${i.colors.accent};
      background-color: #e8505019;
    `};
  ${({$variant:r})=>r==="Income"&&a`
      color: ${i.colors.primary};
      background-color: #59b17a19;
    `};
  ${({$variant:r})=>r==="Error"&&a`
      color: ${i.colors.main};
      background-color: #1d1e2119;
    `};
`,w=({$variant:r,prop:n})=>s.jsx(L,{$variant:r,children:n});w.propTypes={prop:j.any,$variant:j.string};const R=()=>{const r=m(),{recentCustomers:n,incomeExpenses:c}=$(k);return y.useEffect(()=>{r(z())},[r]),s.jsxs(E,{children:[s.jsx(u,{children:s.jsxs(g,{className:"first",children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(b,{colSpan:"6",children:"Recent Customers"})})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx(o,{children:"Name"}),s.jsx(o,{children:"Email"}),s.jsx(o,{children:"Spent"}),s.jsx(o,{children:"Phone"}),s.jsx(o,{children:"Address"}),s.jsx(o,{children:"Register Date"})]}),n==null?void 0:n.map(e=>s.jsxs("tr",{children:[s.jsxs(f,{children:[s.jsx("img",{src:e.photo?e.photo:C,alt:"user"}),s.jsx("span",{children:e.name})]}),s.jsx("td",{children:e.email}),s.jsx("td",{children:e.spent}),s.jsx("td",{children:e.phone}),s.jsx("td",{children:e.address}),s.jsx("td",{children:e.register_date})]},e._id))]})]})}),s.jsx(u,{children:s.jsxs(g,{children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(b,{colSpan:"3",children:"Income/Expenses"})})}),s.jsxs("tbody",{children:[s.jsx("tr",{children:s.jsx(o,{colSpan:"3",children:"Today"})}),c==null?void 0:c.map(e=>s.jsxs("tr",{children:[s.jsx(f,{children:s.jsx(w,{prop:e.type,$variant:e.type})}),s.jsx(S,{children:e.name}),s.jsx("td",{style:{color:`${e.type}`=="Expense"?"#E85050":`${e.type}`=="Income"?"#59B17A":"#1D1E21",textDecoration:`${e.type}`=="Error"&&"line-through"},children:e.amount})]},e._id))]})]})})]})},I=()=>{const r=window.innerWidth;return s.jsxs(T,{children:[r>1439&&s.jsx(v,{}),s.jsx(A,{}),s.jsx(R,{})]})};function F(){return s.jsx(I,{})}export{F as default};
