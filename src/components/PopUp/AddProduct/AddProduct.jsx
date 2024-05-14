import {
  BtnWrapper,
  ModalBody,
  StyledForm,
} from './AddProduct.styled';
import { StyledButton } from '../../StyledButton/StyledButton';
import { InputWrapper, StyledInput } from '../../Auth/Auth.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/pharmacy/pharmacyOperations';
import Select from 'react-select';
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
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = data => {
    dispatch(addProduct(data));
    reset();
    onRequestClose();
  };

  const options = [
    { value: 'Medicine', label: 'Medicine' },
    { value: 'Head', label: 'Head' },
    { value: 'Hand', label: 'Hand' },
    { value: 'Dental Care', label: 'Dental Care' },
    { value: 'Skin Care', label: 'Skin Care' },
    { value: 'Eye Care', label: 'Eye Care' },
    { value: 'Vitamins & Supplements', label: 'Vitamins & Supplements' },
    { value: 'Orthopedic Products', label: 'Orthopedic Products' },
    { value: 'Baby Care', label: 'Baby Care' },
  ];

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
          <Controller
            control={control}
            name="category"
            rules={{ required: 'Status is required field' }}
            render={({ fieldState, field: { onChange, name, ref, value } }) => (
              <Select
                classNamePrefix="custom-select"
                status={fieldState.error ? 'error' : undefined}
                name={name}
                ref={ref}
                options={options}
                placeholder="Category"
                value={options.find(option => option.value === value)}
                onChange={selectedOption => onChange(selectedOption?.value)}
              />
            )}
          />
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