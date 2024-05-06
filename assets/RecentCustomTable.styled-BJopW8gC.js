import{u as a,t as i}from"./index-earmbMvx.js";const n=a.div`
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
`,d=a.div`
  max-block-size: 412px;
  overflow: auto;
  @media (width > 767px) {
    max-block-size: 448px;
  }
  @media (width > 1439px) {
    max-inline-size: 630px;
  }
`,s=a.table`
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
    padding-inline: ${i.spacing(5)};
  }
  &.first td {
    vertical-align: middle;
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
`,t=a.th`
  padding: ${i.spacing(7)};
  border-radius: ${i.radii.s} ${i.radii.s} 0 0;
  background-color: ${i.colors.tablehead};
  text-align: left;
  font-size: 20px;
  @media (width > 767px) {
    padding: ${i.spacing(10)};
  }
`,p=a.td`
  color: #1d1e2166;
  padding: ${i.spacing(5)} ${i.spacing(7)};
  @media (width > 767px) {
    padding: ${i.spacing(10)} ${i.spacing(14.5)};
  }
`,l=a.td`
  padding-inline-start: ${i.spacing(7)};
  @media (width > 767px) {
    padding-inline-start: ${i.spacing(10)};
    padding-block: ${i.spacing(5)};
    display: flex;
    align-items: center;
    gap: ${i.spacing(4)};
  }
`,o=a.td`
  @media (width < 768px) {
    max-inline-size: 118px;
  }
  padding: ${i.spacing(5)};
  white-space: normal;
`;export{l as F,t as H,o as S,d as T,n as W,s as a,p as b};
