import {
  BtnWrapper,
  ModalBody,
  StyledForm,
  StyledSelect,
} from '../AddProduct/AddProduct.styled';
import { StyledButton } from '../../StyledButton/StyledButton';
import { InputWrapper, StyledInput } from '../../Auth/Auth.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { StyledDatePicker } from './AddSuppliers.styled';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addSupplier } from '../../../redux/pharmacy/pharmacyOperations';

const supplierSchema = yup.object({
  name: yup.string().trim().required('Suppliers is required field'),
  address: yup.string().trim().required('Address is required field'),
  suppliers: yup.string().trim().required('Company is required field'),
  date: yup.string().trim().required('Delivery is required field'),
  amount: yup.string().trim().required('Amount is required field'),
  status: yup
    .string()
    .oneOf(['active', 'deactive'], 'Invalid Job Type')
    .required('Status is required field'),
});

export const AddSuppliers = ({ onRequestClose }) => {
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(supplierSchema),
  });

  const onSubmit = data => {
    dispatch(addSupplier(data));
    reset();
    onRequestClose();
  };

  return (
    <ModalBody>
      <h2>Add a new suppliers</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <StyledInput
            {...register('name', { autoComplete: 'off' })}
            placeholder="Suppliers Info"
            style={{ borderColor: errors.name && '#E85050' }}
          />
          <p>{errors.name?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('address', { autoComplete: 'off' })}
            placeholder="Address"
            style={{ borderColor: errors.address && '#E85050' }}
          />
          <p>{errors.address?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('suppliers', { autoComplete: 'off' })}
            placeholder="Company"
            style={{ borderColor: errors.suppliers && '#E85050' }}
          />
          <p>{errors.suppliers?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <Controller
            control={control}
            name="date"
            rules={{ required: 'Delivery is required field' }}
            render={({ field, fieldState }) => {
              return (
                <StyledDatePicker
                  status={fieldState.error ? 'error' : undefined}
                  ref={field.ref}
                  name={field.name}
                  onBlur={field.onBlur}
                  placeholder="Delivery date"
                  value={field.value ? dayjs(field.value) : null}
                  onChange={date => {
                    field.onChange(date ? date.valueOf() : null);
                  }}
                />
              );
            }}
          />
          <p>{errors.date?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('amount', { autoComplete: 'off' })}
            placeholder="amount"
            style={{ borderColor: errors.amount && '#E85050' }}
          />
          <p>{errors.amount?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledSelect
            {...register('status')}
            style={{ borderColor: errors.status && '#E85050' }}
          >
            <option value="status" selected hidden>
              Status
            </option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </StyledSelect>
          <p>{errors.status?.message}</p>
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

AddSuppliers.propTypes = {
  onRequestClose: PropTypes.func,
};
