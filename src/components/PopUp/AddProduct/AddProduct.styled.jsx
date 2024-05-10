import styled from 'styled-components';
import { theme } from '../../../stylesheet/theme';

export const ModalBody = styled.div`
  @media (width > 767px) {
    padding-inline: ${theme.spacing(10)};
  }
  h2 {
    margin-block-end: ${theme.spacing(10)};
    align-self: start;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
  input {
    @media (width > 767px) {
      inline-size: 224px;
    }
  }
`;

export const StyledForm = styled.form`
  inline-size: 295px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(7)};
  @media (width > 767px) {
    inline-size: 462px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StyledSelect = styled.select`
  inline-size: 295px;
  padding: ${theme.spacing(6.5)} ${theme.spacing(9)};
  border: 1px solid ${theme.colors.alfablue};
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};
  outline: none;

  color: ${theme.colors.main};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (width > 767px) {
    inline-size: 224px;
  }

  option {
    border-radius: 12px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.light};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const BtnWrapper = styled.div`
  margin-block-start: ${theme.spacing(13)};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};
`;
