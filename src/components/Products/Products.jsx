import { useForm } from 'react-hook-form';
import { AddProduct } from '../PopUp/AddProduct/AddProduct';
import { Container } from '../Constructor/Container/Container';
import { StyledForm, StyledInput } from '../Orders/Orders.styled';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import { StyledButton } from '../StyledButton/StyledButton';
import { ProductsTable } from './ProductsTable/ProductsTable';
import { PopUp } from '../PopUp/PopUp';
import { BtnAdd, FlexBox, FlexWrap } from './Products.styled';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { getProducts } from '../../redux/pharmacy/pharmacyOperations';
import { useDispatch } from 'react-redux';


export const Products = () => {
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
      dispatch(getProducts(data));
      reset();
      return;
    }
    setChangeButton(true);
    dispatch(getProducts(data));
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
              placeholder="Product Name"
              onClick={handleInputClick}
            />
            <StyledButton
              icon={changeButton ? false : true}
              prop={changeButton ? 'Reset' : 'Filter'}
              $variant={changeButton ? 'add-sup' : 'filter'}
            />
          </StyledForm>
          <FlexWrap>
            <BtnAdd onClick={openModal}>
              <svg>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </BtnAdd>
            <span>Add a new product</span>
          </FlexWrap>
        </FlexBox>
        <ProductsTable />
      </Container>
      <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
        <AddProduct onRequestClose={closeModal} />
      </PopUp>
    </>
  );
};
