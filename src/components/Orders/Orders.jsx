import { useForm } from "react-hook-form";
import { StyledButton } from "../StyledButton/StyledButton";
import { Container } from "../Constructor/Container/Container";
import { StyledForm, StyledInput } from "./Orders.styled";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { OrdersTable } from "./OrdersTable/OrdersTable";
import { useDispatch } from "react-redux";
import { getOrders } from "../../redux/pharmacy/pharmacyOperations";
// import sprite from '../../assets/sprite.svg';

export const Orders = () => {
  const dispatch = useDispatch();
  const screenWidth = window.innerWidth;

  const {
    reset,
    register,
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    dispatch(getOrders(data));
    reset();
  };

  return (
    <Container>
      {screenWidth > 1439 && <SidebarMenu />}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          {...register('name', { autoComplete: 'off' })}
          placeholder="User Name"
        />
        <StyledButton prop="Filter" $variant="filter" />
      </StyledForm>
      <OrdersTable/>
    </Container>
  );
}
