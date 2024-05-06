import { useForm } from "react-hook-form";
import { Container } from "../Constructor/Container/Container";
import { StyledForm, StyledInput } from "../Orders/Orders.styled";
import { AddSuppliers } from "../PopUp/AddSuppliers/AddSuppliers";
import { FlexBox } from "../Products/Products.styled";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { StyledButton } from "../StyledButton/StyledButton";
import { useState } from "react";
import { SuppliersTable } from "./SuppliersTable/SuppliersTable";
import { PopUp } from "../PopUp/PopUp";

export const Suppliers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const screenWidth = window.innerWidth;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <Container>
        {screenWidth > 1439 && <SidebarMenu />}
        <FlexBox>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              {...register('filter', { autoComplete: 'off' })}
              placeholder="User Name"
            />
            <StyledButton prop="Filter" $variant="filter" />
          </StyledForm>
          <StyledButton
            prop="Add a new suppliers"
            $variant="add-sup"
            onClick={openModal}
          />
        </FlexBox>
        <SuppliersTable />
      </Container>
      <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
        <AddSuppliers onRequestClose={closeModal} />
      </PopUp>
    </>
  );
};