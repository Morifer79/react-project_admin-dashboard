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
import { StyledDatePicker } from '../AddSuppliers/AddSuppliers.styled';
import { useDispatch } from 'react-redux';
import { updateSupplier } from '../../../redux/pharmacy/pharmacyOperations';
import { changeDate } from '../../../helpers/changeDate';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const supplierSchema = yup.object({
  name: yup.string().trim(),
  address: yup.string().trim(),
  suppliers: yup.string().trim(),
  date: yup.date(),
  amount: yup.string(),
  status: yup.string(),
});

export const EditSuppliers = ({ onRequestClose, item }) => {
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

  const id = item._id;

  const onSubmit = data => {
    dispatch(updateSupplier({ id: id, supplierData: data }));
    reset();
    onRequestClose();
  };

  const dateFormat = 'MMMM D, YYYY'; 

  return (
    <ModalBody>
      <h2>Edit data</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <StyledInput
            {...register('name', { autoComplete: 'off' })}
            placeholder="Suppliers Info"
            style={{ borderColor: errors.name && '#E85050' }}
            defaultValue={item.name}
          />
          <p>{errors.name?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('address', { autoComplete: 'off' })}
            placeholder="Address"
            style={{ borderColor: errors.address && '#E85050' }}
            defaultValue={item.address}
          />
          <p>{errors.address?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('suppliers', { autoComplete: 'off' })}
            placeholder="Company"
            style={{ borderColor: errors.suppliers && '#E85050' }}
            defaultValue={item.suppliers}
          />
          <p>{errors.suppliers?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <Controller
            control={control}
            name="date"
            render={({ field, fieldState }) => {
              return (
                <StyledDatePicker
                  status={fieldState.error ? 'error' : undefined}
                  ref={field.ref}
                  name={field.name}
                  format={dateFormat}
                  onBlur={field.onBlur}
                  placeholder={changeDate(item.date)}
                  value={field.value ? field.value : null}
                  onChange={date => {
                    field.onChange(date ? date : null);
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
            placeholder="Amount"
            style={{ borderColor: errors.amount && '#E85050' }}
            defaultValue={item.amount}
          />
          <p>{errors.amount?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledSelect
            {...register('status')}
            style={{ borderColor: errors.status && '#E85050' }}
          >
            <option defaultValue={item.status}>
              {item.status}
            </option>
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </StyledSelect>
          <p>{errors.status?.message}</p>
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

EditSuppliers.propTypes = {
  onRequestClose: PropTypes.func,
  item: PropTypes.any,
};
