import { useForm } from "react-hook-form";
import { Container } from "../Constructor/Container/Container";
import { StyledForm, StyledInput } from "../Orders/Orders.styled";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { StyledButton } from "../StyledButton/StyledButton";
import { CustomersTable } from "./CustomersTable/CustomersTable";
import { getCustomers } from "../../redux/pharmacy/pharmacyOperations";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Customers = () => {
  const [changeButton, setChangeButton] = useState(false);
  const dispatch = useDispatch();

  const screenWidth = window.innerWidth;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    if (changeButton) {
      setChangeButton(false);
      dispatch(getCustomers(data));
      reset();
      return;
    }
    setChangeButton(true);
    dispatch(getCustomers(data));
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
      <CustomersTable />
    </Container>
  );
}
