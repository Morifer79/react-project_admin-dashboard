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
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { Popover } from 'antd';

const pageTitleMap = {
  '/dashboard': 'Dasboard',
  '/orders': 'All orders',
  '/products': 'All products',
  '/suppliers': 'All suppliers',
  '/customers': 'All customers',
};

const getLocationPageTitle = location => {
  const { pathname } = location;
  return pageTitleMap[pathname] || 'Unknown page';
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    nav('/login');
  };

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

  const location = useLocation();
  const pageTitle = getLocationPageTitle(location);

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
        <SubTitle>
          {pageTitle} | {user.email}
        </SubTitle>
      </div>
      <Popover content="Leaving already?" trigger="hover">
        <BtnLogout type="button" onClick={handleLogout}>
          <svg>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </BtnLogout>
      </Popover>
    </HeaderWrapper>
  );
};
