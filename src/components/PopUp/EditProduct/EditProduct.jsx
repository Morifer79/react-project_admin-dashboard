import { StyledButton } from '../../StyledButton/StyledButton';
import { InputWrapper, StyledInput } from '../../Auth/Auth.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BtnWrapper, ModalBody, StyledForm, StyledSelect } from '../AddProduct/AddProduct.styled';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../redux/pharmacy/pharmacyOperations';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const productSchema = yup.object({
  name: yup.string().trim(),
  category: yup.string(),
  suppliers: yup.string().trim(),
  stock: yup.string().trim(),
  price: yup.string().trim(),
});

export const EditProduct = ({onRequestClose, item}) => {
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
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
          <StyledSelect
            {...register('category')}
            style={{ borderColor: errors.category && '#E85050' }}
          >
            <option value={item.category} selected>
              {item.category}
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