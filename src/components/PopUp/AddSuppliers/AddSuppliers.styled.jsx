import { DatePicker } from "antd";
import styled from "styled-components";
import { theme } from "../../../stylesheet/theme";

export const StyledDatePicker = styled(DatePicker)`
  cursor: pointer;
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid #1d1e2119;
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::placeholder {
    color: #1d1e2166;
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