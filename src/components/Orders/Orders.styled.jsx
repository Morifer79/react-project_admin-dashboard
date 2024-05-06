import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
// import { theme } from '../../stylesheet/theme';

export const StyledForm = styled.form`
  margin-block-start: ${theme.spacing(20)};
  display: flex;
  gap: ${theme.spacing(4)};
  @media (width > 1439px) {
    margin-inline-start: ${theme.spacing(40)};
  }
`;

export const StyledInput = styled.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid #1d1e2119;
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};
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
`;