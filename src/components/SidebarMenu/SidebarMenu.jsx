import { SidebarBtnLogout, SidebarNav, StyledLink } from './SidebarMenu.styled';
import sprite from '../../assets/sprite.svg';

export const SidebarMenu = () => {
  return (
    <SidebarNav>
      <ul>
        <li>
          <StyledLink to={'/dashboard'}>
            <svg>
              <use href={`${sprite}#icon-dashboard`} />
            </svg>
          </StyledLink>
        </li>
        <li>
          <StyledLink to={'/orders'}>
            <svg>
              <use href={`${sprite}#icon-orders`} />
            </svg>
          </StyledLink>
        </li>
        <li>
          <StyledLink to={'/products'}>
            <svg>
              <use href={`${sprite}#icon-products`} />
            </svg>
          </StyledLink>
        </li>
        <li>
          <StyledLink to={'/suppliers'}>
            <svg>
              <use href={`${sprite}#icon-suppliers`} />
            </svg>
          </StyledLink>
        </li>
        <li>
          <StyledLink to={'/customers'}>
            <svg>
              <use href={`${sprite}#icon-customers`} />
            </svg>
          </StyledLink>
        </li>
      </ul>
      <SidebarBtnLogout>
        <svg>
          <use href={`${sprite}#icon-logout`} />
        </svg>
      </SidebarBtnLogout>
    </SidebarNav>
  );
};
