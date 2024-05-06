import { useForm } from "react-hook-form";
import { Container } from "../Constructor/Container/Container";
import { StyledForm, StyledInput } from "../Orders/Orders.styled";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { StyledButton } from "../StyledButton/StyledButton";
import { CustomersTable } from "./CustomersTable/CustomersTable";

export const Customers = () => {
  const screenWidth = window.innerWidth;
  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      {screenWidth > 1439 && <SidebarMenu />}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          {...register('filter', { autoComplete: 'off' })}
          placeholder="User Name"
        />
        <StyledButton prop="Filter" $variant="filter" />
      </StyledForm>
      <CustomersTable />
    </Container>
  );
}
