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

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderWrapper>
      {openMenu ? (
        <>
          <BtnMenu onClick={() => setOpenMenu(false)}>
            <svg>
              <use href={`${sprite}#icon-close`} />
            </svg>
          </BtnMenu>
          <SidebarMenu />
        </>
      ) : (
        <BtnMenu onClick={() => setOpenMenu(true)}>
          <svg>
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </BtnMenu>
      )}

      <Logo src={logo} alt="logo" />
      <div>
        <Title>Medicine store</Title>
        <SubTitle>текущая страница | почта админа</SubTitle>
      </div>
      <BtnLogout>
        <svg>
          <use href={`${sprite}#icon-logout`} />
        </svg>
      </BtnLogout>
    </HeaderWrapper>
  );
};
