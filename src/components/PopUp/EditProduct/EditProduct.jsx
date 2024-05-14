import { StyledButton } from '../../StyledButton/StyledButton';
import { InputWrapper, StyledInput } from '../../Auth/Auth.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { BtnWrapper, ModalBody, StyledForm } from '../AddProduct/AddProduct.styled';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../redux/pharmacy/pharmacyOperations';
import PropTypes from 'prop-types';
import Select from 'react-select';
import * as yup from 'yup';

const productSchema = yup.object({
  name: yup.string().trim(),
  category: yup.string(),
  suppliers: yup.string().trim(),
  stock: yup.number(),
  price: yup.number(),
});

export const EditProduct = ({ onRequestClose, item }) => {
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

  const id = item._id;

  const onSubmit = data => {
    dispatch(updateProduct({ id: id, productData: data }));
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
      <h2>Edit data</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <StyledInput
            {...register('name', { autoComplete: 'off' })}
            placeholder="Product Info"
            style={{ borderColor: errors.name && '#E85050' }}
            defaultValue={item.name}
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
                placeholder={item.category}
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
            defaultValue={item.suppliers}
          />
          <p>{errors.suppliers?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('stock', { autoComplete: 'off' })}
            placeholder="Stock"
            style={{ borderColor: errors.stock && '#E85050' }}
            defaultValue={item.stock}
          />
          <p>{errors.stock?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('price', { autoComplete: 'off' })}
            placeholder="Price"
            style={{ borderColor: errors.price && '#E85050' }}
            defaultValue={item.price}
          />
          <p>{errors.price?.message}</p>
        </InputWrapper>

        <BtnWrapper>
          <StyledButton prop="Save" $variant="save" />
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

EditProduct.propTypes = {
  onRequestClose: PropTypes.func,
  item: PropTypes.any,
};