import{b as e,t as i}from"./index-CPNazQ0l.js";const n=a=>a.pharmacy.dashboard,d=a=>a.pharmacy.orders,p=a=>a.pharmacy.suppliers,t=a=>a.pharmacy.products,c=a=>a.pharmacy.customers,o=e.div`
  margin-block: ${i.spacing(10)} ${i.spacing(40)};
  max-inline-size: 335px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: ${i.spacing(34)};
  @media (width > 767px) {
    max-inline-size: 704px;
  }
  @media (width > 1439px) {
    align-items: start;
    margin-inline-start: ${i.spacing(40)};
    max-inline-size: 1280px;
    flex-direction: row;
    gap: ${i.spacing(10)};
  }
`,l=e.div`
  border-radius: ${i.radii.s};
  overflow: auto;
  @media (width > 767px) {
    max-block-size: 435px;
  }
  @media (width > 1439px) {
    max-inline-size: 630px;
  }
`,r=e.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;
  inline-size: 100%;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }
  td {
    padding-inline: ${i.spacing(10)};
  }
  &.first td {
    vertical-align: middle;
    padding-inline: ${i.spacing(10)};
  }
  tbody {
    background-color: ${i.colors.light};
  }

  img {
    inline-size: 24px;
    block-size: 24px;
    border-radius: ${i.radii.xl};
    @media (width > 767px) {
      inline-size: 36px;
      block-size: 36px;
    }
  }
`,g=e.th`
  padding: ${i.spacing(7)};
  border-radius: ${i.radii.s} ${i.radii.s} 0 0;
  background-color: ${i.colors.tablehead};
  text-align: left;
  font-size: 20px;
  @media (width > 767px) {
    padding: ${i.spacing(10)};
  }
`,x=e.td`
  color: ${i.colors.alfadarkblue};
  padding: ${i.spacing(5)} ${i.spacing(7)};
  @media (width > 767px) {
    padding: ${i.spacing(10)} ${i.spacing(14.5)};
  }
`,m=e.td`
  padding-inline: ${i.spacing(7)} ${i.spacing(5)};
  @media (width > 767px) {
    padding-inline: ${i.spacing(10)} ${i.spacing(5)};
    padding-block: ${i.spacing(5)};
    display: flex;
    align-items: center;
    gap: ${i.spacing(4)};
  }
`,h=e.td`
  @media (width < 768px) {
    max-inline-size: 118px;
  }
  padding: ${i.spacing(5)};
  white-space: normal;
`;export{m as F,g as H,h as S,l as T,o as W,r as a,x as b,d as c,t as d,c as e,p as f,n as s};
