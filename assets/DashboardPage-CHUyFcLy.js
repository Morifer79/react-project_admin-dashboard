import{b as c,t as r,u as f,c as m,r as $,g as y,j as s,s as a,d as t,P as p,S as w}from"./index-DvVxGTqt.js";import{s as z,W as E,T as j,a as u,H as b,b as o,F as g,S}from"./RecentCustomTable.styled-BxMWTzZ4.js";import{C as T}from"./Container-C_cJ2hx2.js";import{n as v}from"./noImg-BC9aJGxj.js";import{c as D}from"./changeDate-Bgkn6-3W.js";const C=c.ul`
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
`,d=c.div`
  display: flex;
  align-items: center;
  gap: ${r.spacing(4)};
`,x=c.h2`
  color: ${r.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`,h=c.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,A=()=>{const i=f(),{productsCount:n,suppliersCount:l,customersCount:e}=m(z);return $.useEffect(()=>{i(y())},[i]),s.jsxs(C,{children:[s.jsxs("li",{children:[s.jsxs(d,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${a}#icon-db`})}),s.jsx(x,{children:"All products"})]}),s.jsx(h,{children:n})]}),s.jsxs("li",{children:[s.jsxs(d,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${a}#icon-db`})}),s.jsx(x,{children:"All suppliers"})]}),s.jsx(h,{children:l})]}),s.jsxs("li",{children:[s.jsxs(d,{children:[s.jsx("svg",{children:s.jsx("use",{href:`${a}#icon-users`})}),s.jsx(x,{children:"All Customers "})]}),s.jsx(h,{children:e})]})]})},R=c.div`
  inline-size: 80px;
  block-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:i})=>i==="Expense"&&t`
      color: ${r.colors.accent};
      background-color: #e8505019;
    `};
  ${({$variant:i})=>i==="Income"&&t`
      color: ${r.colors.primary};
      background-color: #59b17a19;
    `};
  ${({$variant:i})=>i==="Error"&&t`
      color: ${r.colors.main};
      background-color: ${r.colors.alfablue};
    `};
`,k=({$variant:i,prop:n})=>s.jsx(R,{$variant:i,children:n});k.propTypes={prop:p.any,$variant:p.string};const I=()=>{const i=f(),{recentCustomers:n,incomeExpenses:l}=m(z);return $.useEffect(()=>{i(y())},[i]),s.jsxs(E,{children:[s.jsx(j,{children:s.jsxs(u,{className:"first",children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(b,{colSpan:"6",children:"Recent Customers"})})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx(o,{children:"Name"}),s.jsx(o,{children:"Email"}),s.jsx(o,{children:"Spent"}),s.jsx(o,{children:"Phone"}),s.jsx(o,{children:"Address"}),s.jsx(o,{children:"Register Date"})]}),n==null?void 0:n.map(e=>s.jsxs("tr",{children:[s.jsxs(g,{children:[s.jsx("img",{src:e.photo?e.photo:v,alt:"user"}),s.jsx("span",{children:e.name})]}),s.jsx("td",{children:e.email}),s.jsx("td",{children:e.spent}),s.jsx("td",{children:e.phone}),s.jsx("td",{children:e.address}),s.jsx("td",{children:D(e.register_date)})]},e._id))]})]})}),s.jsx(j,{children:s.jsxs(u,{children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx(b,{colSpan:"3",children:"Income/Expenses"})})}),s.jsxs("tbody",{children:[s.jsx("tr",{children:s.jsx(o,{colSpan:"3",children:"Today"})}),l==null?void 0:l.map(e=>s.jsxs("tr",{children:[s.jsx(g,{children:s.jsx(k,{prop:e.type,$variant:e.type})}),s.jsx(S,{children:e.name}),s.jsx("td",{style:{color:`${e.type}`=="Expense"?"#E85050":`${e.type}`=="Income"?"#59B17A":"#1D1E21",textDecoration:`${e.type}`=="Error"&&"line-through"},children:e.amount})]},e._id))]})]})})]})},L=()=>{const i=window.innerWidth;return s.jsxs(T,{children:[i>1439&&s.jsx(w,{}),s.jsx(A,{}),s.jsx(I,{})]})};function _(){return s.jsx(L,{})}export{_ as default};
