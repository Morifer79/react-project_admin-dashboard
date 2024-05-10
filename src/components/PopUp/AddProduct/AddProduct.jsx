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
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/pharmacy/pharmacyOperations';
import PropTypes from 'prop-types';

const productSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  category: yup
    .string()
    .oneOf(
      ['medicine', 'heart', 'head', 'leg', 'dental-care', 'skin - care'],
      'Invalid Job Type'
    )
    .required('Category is required field'),
  suppliers: yup.string().trim().required('Suppliers is required field'),
  stock: yup.string().trim().required('Stock is required field'),
  price: yup.string().trim().required('Price is required field'),
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
            <option value="category" selected hidden>
              Category
            </option>
            <option value="medicine">Medicine</option>
            <option value="heart">Heart</option>
            <option value="head">Head</option>
            <option value="hand">Hand</option>
            <option value="leg">Leg</option>
            <option value="dental-care">Dental Care</option>
            <option value="skin-care">Skin Care</option>
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