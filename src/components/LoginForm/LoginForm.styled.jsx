import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
import traces from '../../assets/traces.png';

export const FlexBox = styled.div`
  @media (width > 1439px) {
    display: flex;
    gap: 150px;
  }
`;

export const LogoBox = styled.div`
  margin-block: 24px 148px;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(7)};
  @media (width > 767px) {
    margin-block-end: 204px;
  }
  @media (width > 1439px) {
    margin-block: 28px 226px;
  }
  img {
    inline-size: 44px;
    block-size: 44px;
  }
  span {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export const Title = styled.div`
  margin-block-end: 40px;
  position: relative;
  @media (width > 767px) {
    margin-block-end: 50px;
  }
  h1 {
    max-width: 335px;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.214;
    @media (width > 767px) {
      max-width: 614px;
      font-size: 54px;
      line-height: 1.111;
    }
  }
  img {
    position: absolute;
    top: -55px;
    left: 214px;
    inline-size: 95px;
    block-size: 93px;
    @media (width > 767px) {
      top: -110px;
      left: 410px;
      inline-size: 179px;
      block-size: 175px;
    }
  }
  span {
    color: ${theme.colors.primary};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  @media (width > 767px) {
    max-inline-size: 323px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 46px;
    margin-inline-start: 20px;
    color: ${theme.colors.accent};
    font-size: 10px;
  }

  &[id='password'] {
    margin-block: 14px 40px;
  }
`;

export const StyledInput = styled.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid #1d1e2119;
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::placeholder {
    color: #1d1e2166;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const EyeBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 18px;
  border: none;
  background: none;
`;

export const BgImg = styled.div`
  background: no-repeat url(${traces});
  position: absolute;
  left: 117px;
  right: 0;
  top: 705px;
  bottom: -300px;
  @media (width > 767px) {
    top: 770px;
    left: 495px;
    bottom: -490px;
  }
  @media (width > 1439px) {
    top: 540px;
    left: 1120px;
    bottom: 0;
  }
`;
