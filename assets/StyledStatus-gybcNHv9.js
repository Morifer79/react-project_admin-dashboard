import{b as i,d as e,t as r,P as c,j as s}from"./index-BFKTnyKH.js";const a=i.div`
  inline-size: 92px;
  block-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:o})=>o==="Completed"&&e`
      color: ${r.colors.primary};
      background: #59b17a19;
    `};
  ${({$variant:o})=>o==="Confirmed"&&e`
      color: ${r.colors.confirmed};
      background: #8059e419;
    `};
  ${({$variant:o})=>o==="Pending"&&e`
      color: ${r.colors.pending};
      background: #f7904219;
    `};
  ${({$variant:o})=>o==="Cancelled"&&e`
      color: ${r.colors.accent};
      background: #e8505019;
    `};
  ${({$variant:o})=>o==="Processing"&&e`
      color: ${r.colors.processing};
      background: #70a6e819;
    `};
  ${({$variant:o})=>o==="Shipped"&&e`
      color: #00ffff;
      background: #70e8e218;
    `};
  ${({$variant:o})=>o==="Delivered"&&e`
      color: #ffff00;
      background: #e8d27017;
    `};
  ${({$variant:o})=>o==="active"||o==="Active"&&e`
        inline-size: 89px;
        color: ${r.colors.primary};
        background: #59b17a19;
      `};
  ${({$variant:o})=>o==="deactive"||o==="Deactive"&&e`
        inline-size: 89px;
        color: ${r.colors.accent};
        background: #e8505019;
      `};
`,t=({$variant:o,prop:n})=>s.jsx(a,{$variant:o,children:n});t.propTypes={prop:c.any,$variant:c.string};export{t as S};
