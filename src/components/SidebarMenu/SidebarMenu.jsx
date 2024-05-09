import { SidebarBtnLogout, SidebarNav, StyledLink } from './SidebarMenu.styled';
import PropTypes from 'prop-types';
import sprite from '../../assets/sprite.svg';
import { logOut } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Popover } from 'antd';

export const SidebarMenu = ({ onClose }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    nav('/login');
}

  return (
    <SidebarNav>
      <ul onClick={onClose}>
        <li>
          <Popover content="Dashboard" trigger="hover">
            <StyledLink to="/dashboard">
              <svg>
                <use href={`${sprite}#icon-dashboard`} />
              </svg>
            </StyledLink>
          </Popover>
        </li>
        <li>
          <Popover content="Orders" trigger="hover">
            <StyledLink to="/orders">
              <svg>
                <use href={`${sprite}#icon-orders`} />
              </svg>
            </StyledLink>
          </Popover>
        </li>
        <li>
          <Popover content="Products" trigger="hover">
            <StyledLink to="/products">
              <svg>
                <use href={`${sprite}#icon-products`} />
              </svg>
            </StyledLink>
          </Popover>
        </li>
        <li>
          <Popover content="Suppliers" trigger="hover">
            <StyledLink to="/suppliers">
              <svg>
                <use href={`${sprite}#icon-suppliers`} />
              </svg>
            </StyledLink>
          </Popover>
        </li>
        <li>
          <Popover content="Customers" trigger="hover">
            <StyledLink to="/customers">
              <svg>
                <use href={`${sprite}#icon-customers`} />
              </svg>
            </StyledLink>
          </Popover>
        </li>
      </ul>
      <Popover
        content="You are about to leave the profile."
        title="Attention!"
        trigger="hover"
      >
        <SidebarBtnLogout onClick={handleLogout}>
          <svg>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </SidebarBtnLogout>
      </Popover>
    </SidebarNav>
  );
};

SidebarMenu.propTypes = {
  onClose: PropTypes.func,
};
