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
import { useDispatch } from "react-redux";
import { getSuppliers } from "../../redux/pharmacy/pharmacyOperations";

export const Suppliers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const dispatch = useDispatch();

  const screenWidth = window.innerWidth;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    if (changeButton) {
      setChangeButton(false);
      dispatch(getSuppliers(data));
      reset();
      return;
    }
    setChangeButton(true);
    dispatch(getSuppliers(data));
    reset();
  };

  const handleInputClick = () => {
    setChangeButton(false);
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
              {...register('name', { autoComplete: 'off' })}
              placeholder="User Name"
              onClick={handleInputClick}
            />
            <StyledButton
              prop={changeButton ? 'Reset' : 'Filter'}
              $variant="filter"
            />
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