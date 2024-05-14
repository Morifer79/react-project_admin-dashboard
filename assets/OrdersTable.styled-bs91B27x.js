import{b as e,t as i}from"./index-DvVxGTqt.js";const a=e.form`
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
  border: 1px solid ${i.colors.alfablue};
  border-radius: ${i.radii.xxl};
  background: ${i.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (width > 767px) {
    max-inline-size: 224px;
  }

  &::placeholder {
    color: ${i.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`,s=e.div`
  margin-block: ${i.spacing(10)} ${i.spacing(5)};
  max-inline-size: 335px;
  overflow-y: hidden;

  @media (width > 767px) {
    max-inline-size: 704px;
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
`,l=e.div`
  padding-block: ${i.spacing(10)};
  display: flex;
  justify-content: space-between;

  button {
    transition: 1s;
    &:is(:hover, :focus) {
      scale: 1.1;
    }
  }

  span {
    color: ${i.colors.primary};
  }
  @media (width > 1439px) {
    margin-inline-start: ${i.spacing(40)};
  }
`;export{l as B,a as S,s as T,o as a,t as b};
