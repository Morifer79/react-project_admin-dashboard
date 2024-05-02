import styled, { css } from 'styled-components';
import { theme } from "../../stylesheet/theme";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${theme.radii.xxl};
  font-size: 14px;
  line-height: 1.285;

  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};

  transition: background-color ${theme.transition}, color ${theme.transition};

  &:is(:hover, :focus) {
    background-color: ${theme.colors.primaryhover};
  }

  ${({ $variant }) =>
    $variant === 'login' &&
    css`
      @media screen and (max-width: 767px) {
        padding: 13px 147px;
      }
      padding: 13px 141px;
    `};

  ${({ $variant }) =>
    $variant === 'filter' &&
    css`
      @media screen and (max-width: 767px) {
        font-size: 12px;
        line-height: 1.5;
      }
      padding: 13px 30px;
    `};
  ${({ $variant }) =>
    $variant === 'add' &&
    css`
      @media screen and (max-width: 767px) {
        padding: 13px 61px;
        font-size: 12px;
        line-height: 1.5;
      }
      padding: 13px 52px;
    `};
  ${({ $variant }) =>
    $variant === 'cancel' &&
    css`
      @media screen and (max-width: 767px) {
        padding: 12px 49px;
        font-size: 12px;
        line-height: 1.5;
      }
      padding: 12px 42px;
      border: 1px solid transparent;
      background-color: #1d1e2119;
      color: #1d1e2166;
      &:is(:hover, :focus) {
        border: 1px solid ${theme.colors.primary};
        background-color: transparent;
        color: ${theme.colors.primary};
      }
    `};
  ${({ $variant }) =>
    $variant === 'save' &&
    css`
      @media screen and (max-width: 767px) {
        padding: 13px 59px;
        font-size: 12px;
        line-height: 1.5;
      }
      padding: 13px 50px;
    `};
  ${({ $variant }) =>
    $variant === 'add-sup' &&
    css`
      @media screen and (max-width: 767px) {
        font-size: 12px;
        line-height: 1.5;
      }
      padding: 13px 30px;
      border: 1px solid #59b17a7f;
      background-color: transparent;
      color: ${theme.colors.main};
      &:is(:hover, :focus) {
        border: 1px solid ${theme.colors.primaryhover};
        color: ${theme.colors.primary};
      }
    `};
`;
