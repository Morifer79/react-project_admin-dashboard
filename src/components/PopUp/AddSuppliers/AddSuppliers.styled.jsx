import { DatePicker } from "antd";
import styled from "styled-components";
import { theme } from "../../../stylesheet/theme";

export const StyledDatePicker = styled(DatePicker)`
  cursor: pointer;
  position: relative;
  padding: ${theme.spacing(5.5)} ${theme.spacing(7)};
  inline-size: 100%;
  border: 1px solid ${theme.colors.alfablue};
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};
  outline: none;

  input {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.colors.main};
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: ${theme.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }

  @media (width > 767px) {
    inline-size: 224px;
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
    fill: ${theme.colors.primary};
  }
`;