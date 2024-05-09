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
import * as yup from 'yup';
import { StyledDatePicker } from '../AddSuppliers/AddSuppliers.styled';
import dayjs from 'dayjs';

const supplierSchema = yup.object({
  suppliers: yup.string().trim().required('Suppliers is required field'),
  address: yup.string().trim().required('Address is required field'),
  company: yup.string().trim().required('Company is required field'),
  delivery: yup.string().trim().required('Delivery is required field'),
  ammount: yup.string().trim().required('Ammount is required field'),
  status: yup.string().required('Status is required field'),
});

export const EditSuppliers = () => {
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
    console.log(data);
    reset();
  };

  return (
    <ModalBody>
      <h2>Edit data</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <StyledInput
            {...register('suppliers', { autoComplete: 'off' })}
            placeholder="Suppliers Info"
            style={{ borderColor: errors.suppliers && '#E85050' }}
          />
          <p>{errors.suppliers?.message}</p>
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
            {...register('company', { autoComplete: 'off' })}
            placeholder="Company"
            style={{ borderColor: errors.company && '#E85050' }}
          />
          <p>{errors.company?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <Controller
            control={control}
            name="delivery"
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
          <p>{errors.delivery?.message}</p>
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register('ammount', { autoComplete: 'off' })}
            placeholder="Ammount"
            style={{ borderColor: errors.ammount && '#E85050' }}
          />
          <p>{errors.ammount?.message}</p>
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
