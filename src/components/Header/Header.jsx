import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import { useState } from 'react';
import {
  BtnLogout,
  BtnMenu,
  HeaderWrapper,
  Logo,
  SubTitle,
  Title,
} from './Header.styled';
import logo from '../../assets/logo.png';
import sprite from '../../assets/sprite.svg';
import { NavLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevMenuOpen => !prevMenuOpen);
    isMenuOpen
      ? (document.body.style.overflowY = 'auto')
      : (document.body.style.overflowY = 'hidden');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflowY = 'auto';
  };

  const pageTitleMap = {
    '/dashboard': 'Dasboard',
    '/orders': 'All orders',
    '/products': 'All products',
    '/suppliers': 'All suppliers',
    '/customers': 'All customers',
  };

  const location = useLocation();
  const user = pageTitleMap[location.pathname] || 'Home page';

  return (
    <HeaderWrapper>
      {isMenuOpen ? (
        <>
          <BtnMenu onClick={toggleMenu}>
            <svg>
              <use href={`${sprite}#icon-close`} />
            </svg>
          </BtnMenu>
          <SidebarMenu onClose={closeMenu} />
        </>
      ) : (
        <BtnMenu onClick={toggleMenu}>
          <svg>
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </BtnMenu>
      )}

      <NavLink to="/">
        <Logo src={logo} alt="logo" />
      </NavLink>
      <div>
        <Title>Medicine store</Title>
        <SubTitle>{user} | vendor@gmail.com</SubTitle>
      </div>
      <BtnLogout>
        <svg>
          <use href={`${sprite}#icon-logout`} />
        </svg>
      </BtnLogout>
    </HeaderWrapper>
  );
};
