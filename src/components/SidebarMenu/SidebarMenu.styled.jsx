import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
import { NavLink } from 'react-router-dom';

export const SidebarNav = styled.nav`
  padding-block: ${theme.spacing(46)} ${theme.spacing(10)};
  padding-inline: ${theme.spacing(10)};

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  inline-size: 78px;
  block-size: 100%;
  background-color: ${theme.colors.secondary};
  border: 1px solid #1d1e2119;

  animation: fade-in 0.8s ease-in-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (width > 767px) {
    padding-block-start: ${theme.spacing(50)};
    inline-size: 84px;
  }

  @media (width > 1439px) {
    padding-block-start: ${theme.spacing(20)};
    padding-inline: ${theme.spacing(9)};
    inline-size: 80px;
    top: 76px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(7)};
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;

    inline-size: 38px;
    block-size: 38px;

    background-color: ${theme.colors.light};
    border-radius: ${theme.radii.xl};
    box-shadow: 0px -1px 7px 0px rgba(71, 71, 71, 0.05);

    @media (width > 767px) {
      inline-size: 44px;
      block-size: 44px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  &:is(:hover, :focus, .active) svg {
    stroke: ${theme.colors.primary};
  }

  svg {
    inline-size: 12px;
    block-size: 12px;
    stroke: ${theme.colors.icon};
    transition: stroke ${theme.transition};

    @media (width > 767px) {
      inline-size: 16px;
      block-size: 16px;
    }
  }
`;

export const SidebarBtnLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  inline-size: 38px;
  block-size: 38px;

  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.xl};

  @media (width > 767px) {
    inline-size: 44px;
    block-size: 44px;
  }

  @media (width > 1439px) {
    display: none;
  }

  svg {
    inline-size: 14px;
    block-size: 14px;
    @media (width > 767px) {
      inline-size: 16px;
      block-size: 16px;
    }
  }
`;
