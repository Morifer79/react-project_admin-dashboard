import { useForm } from 'react-hook-form';
import { StyledButton } from '../StyledButton/StyledButton';
import { Container } from '../Constructor/Container/Container';
import { StyledForm, StyledInput } from './Orders.styled';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import { OrdersTable } from './OrdersTable/OrdersTable';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../redux/pharmacy/pharmacyOperations';
import { useState } from 'react';

export const Orders = () => {
  const [changeButton, setChangeButton] = useState(false);
  const dispatch = useDispatch();
  const screenWidth = window.innerWidth;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    if (changeButton) {
      setChangeButton(false);
      dispatch(getOrders(data));
      reset();
      return;
    }
    setChangeButton(true);
    dispatch(getOrders(data));
    reset();
  };

  const handleInputClick = () => {
    setChangeButton(false);
  };

  return (
    <Container>
      {screenWidth > 1439 && <SidebarMenu />}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          {...register('name', { autoComplete: 'off' })}
          placeholder="User Name"
          onClick={handleInputClick}
        />
        <StyledButton
          icon={changeButton ? false : true}
          prop={changeButton ? 'Reset' : 'Filter'}
          $variant={changeButton ? 'add-sup' : 'filter'}
        />
      </StyledForm>
      <OrdersTable />
    </Container>
  );
};
