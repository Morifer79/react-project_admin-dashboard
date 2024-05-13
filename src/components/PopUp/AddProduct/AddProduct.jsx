import {
  BtnWrapper,
  ModalBody,
  StyledForm,
  StyledSelect,
} from './AddProduct.styled';
import { StyledButton } from '../../StyledButton/StyledButton';
import { InputWrapper, StyledInput } from '../../Auth/Auth.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/pharmacy/pharmacyOperations';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const productSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  category: yup
    .string()
    .oneOf(
      ['Medicine', 'Head', 'Hand', 'Dental Care', 'Skin Care', 'Eye Care', 'Vitamins & Supplements', 'Orthopedic Products', 'Baby Care'],
      'Invalid Job Type'
    )
    .required('Category is required field'),
  suppliers: yup.string().trim().required('Suppliers is required field'),
  stock: yup.number().required('Stock is required field'),
  price: yup.number().required('Price is required field'),
});

export const AddProduct = ({onRequestClose}) => {
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = data => {
    dispatch(addProduct(data));
    reset();
    onRequestClose();
  };

  return (
    <ModalBody>
      <h2>Add a new product</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <StyledInput
            {...register('name', { autoComplete: 'off' })}
            placeholder="Product Info"
            style={{ borderColor: errors.name && '#E85050' }}
          />
          <p>{errors.name?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledSelect
            {...register('category')}
            style={{ borderColor: errors.category && '#E85050' }}
          >
            <option defaultValue="Category" hidden>
              Category
            </option>
            <option value="Medicine">Medicine</option>
            <option value="Head">Head</option>
            <option value="Hand">Hand</option>
            <option value="Dental Care">Dental Care</option>
            <option value="Skin Care">Skin Care</option>
            <option value="Eye Care">Eye Care</option>
            <option value="Vitamins & Supplements">Vitamins & Supplements</option>
            <option value="Orthopedic Products">Orthopedic Products</option>
            <option value="Baby Care">Baby Care</option>
          </StyledSelect>
          <p>{errors.category?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('suppliers', { autoComplete: 'off' })}
            placeholder="Suppliers"
            style={{ borderColor: errors.suppliers && '#E85050' }}
          />
          <p>{errors.suppliers?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('stock', { autoComplete: 'off' })}
            placeholder="Stock"
            style={{ borderColor: errors.stock && '#E85050' }}
          />
          <p>{errors.stock?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('price', { autoComplete: 'off' })}
            placeholder="Price"
            style={{ borderColor: errors.price && '#E85050' }}
          />
          <p>{errors.price?.message}</p>
        </InputWrapper>

        <BtnWrapper>
          <StyledButton prop="Add" $variant="add" />
          <StyledButton
            prop="Cancel"
            $variant="cancel"
            onClick={() => reset()}
          />
        </BtnWrapper>
      </StyledForm>
    </ModalBody>
  );
};

AddProduct.propTypes = {
  onRequestClose: PropTypes.func,
};