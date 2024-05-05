import styled from "styled-components";
import { theme } from "../../../stylesheet/theme";

export const BtnChange = styled.button`
  inline-size: 32px;
  block-size: 32px;
  border-radius: ${theme.radii.xl};

  &:is(:hover, :focus) {
    background-color: #e4e72ee2;
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};

  button:first-child {
    border: 1px solid #59b17a7f;
  }
  button:last-child {
    border: 1px solid #e850507f;
  }
`;