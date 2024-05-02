import {
  BgImg,
  EyeBtn,
  FlexBox,
  InputWrapper,
  LogoBox,
  StyledForm,
  StyledInput,
  Title,
} from './LoginForm.styled';
import { Container } from '../Constructor/Container/Container';
import { useForm } from 'react-hook-form';
import { StyledButton } from '../StyledButton/StyledButton';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import logo from '../../assets/logo_log.png';
import pill from '../../assets/pill.png';
import sprite from '../../assets/sprite.svg';

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Wrong email. Try again...')
    .trim()
    .required('Email is required field'),
  password: yup
    .string()
    .min(7, 'Minimum 7 simbols')
    .max(20, 'Maximum 20 simbols')
    .trim()
    .required('Password is required field'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });
  const onSubmit = data => {
    console.log(data);
    reset();
  };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Container>
      <LogoBox>
        <img src={logo} alt="logo" />
        <span>E-Pharmacy</span>
      </LogoBox>
      <FlexBox>
        <Title>
          <h1>
            Your medication, delivered Say goodbye to all{' '}
            <span>your healthcare</span> worries with us
          </h1>
          <img src={pill} alt="pill" />
        </Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <StyledInput
              {...register('email', { autoComplete: 'off' })}
              placeholder="Email address"
              style={{ borderColor: errors.email ? '#E85050' : '#59b17a' }}
            />
            <p>{errors.email?.message}</p>
          </InputWrapper>
          <InputWrapper id="password">
            <StyledInput
              {...register('password', { autoComplete: 'off' })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={{ borderColor: errors.password ? '#E85050' : '#59b17a' }}
            />
            <p>{errors.password?.message}</p>
            <EyeBtn onClick={() => handleTogglePassword()} type="button">
              <svg width="18" height="18" stroke="#1D1E21" fill="none">
                <use
                  href={
                    showPassword
                      ? `${sprite}#icon-eye`
                      : `${sprite}#icon-eye-off`
                  }
                />
              </svg>
            </EyeBtn>
          </InputWrapper>
          <StyledButton prop="Log in" $variant="login" />
        </StyledForm>
      </FlexBox>
      <BgImg />
    </Container>
  );
};
