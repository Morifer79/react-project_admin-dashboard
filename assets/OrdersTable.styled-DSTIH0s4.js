import{u as e,t as i}from"./index-earmbMvx.js";const a=e.form`
  margin-block-start: ${i.spacing(20)};
  display: flex;
  gap: ${i.spacing(4)};
  @media (width > 1439px) {
    margin-inline-start: ${i.spacing(40)};
  }
`,t=e.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid #1d1e2119;
  border-radius: ${i.radii.xxl};
  background: ${i.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  @media (width > 767px) {
    max-inline-size: 224px;
  }

  &::placeholder {
    color: #1d1e2166;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`,l=e.div`
  margin-block: ${i.spacing(10)} ${i.spacing(70)};
  max-inline-size: 335px;
  max-block-size: 412px;
  overflow: auto;

  @media (width > 767px) {
    margin-block-end: ${i.spacing(143)};
    max-inline-size: 704px;
    max-block-size: 500px;
  }

  @media (width > 1439px) {
    margin-inline-start: ${i.spacing(40)};
    max-inline-size: 100%;
  }
`,o=e.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;
  inline-size: 100%;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }

  @media (width > 1439px) {
    inline-size: 100%;
  }

  td {
    vertical-align: middle;
    padding-inline: ${i.spacing(5)};
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
`;export{a as S,l as T,o as a,t as b};
