import { TextField } from '@mui/material';
import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  padding-bottom: 100px;
`;
export const TitleSuccess = styled.h3`
  font-size: var(--fz-title);
  line-height: var(--ln-title);
  margin-bottom: 50px;
  text-align: center;
  @media (width < 360px) {
    width: 300px;
  }
`;
export const FormStyled = styled.form`
  @media (width >= 768px) {
    width: 380px;
    margin: auto;
  }
`;
export const ContainerUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const FormInput = styled.input`
  height: 54px;
  padding: 14px 16px;
  background-color: var(--bg-color);
  border-radius: 4px;
  font-size: var(--fz-text);
  line-height: var(--ln-text);
  width: 100%;
`;

export const FormInputWrapper = styled.div`
  height: 72px;
  @media (width >= 768px) {
    width: 380px;
  }
`;
export const PositionContainer = styled.div`
  margin: 25px 0 47px;
`;
export const UploadLabel = styled.label`
  display: flex;
  width: 100%;
`;
export const UploadBox = styled.p`
  border: 1px solid var(--text-prim);
  height: 54px;
  width: 83px;
  padding: 14px 15px;
  border-top-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 4px;
`;
export const LabelSpan = styled.span`
  color: #7e7e7e;
  border: 1px solid #d0cfcf;
  border-left: none;
  width: 100%;
  height: 54px;
  padding: 14px 16px;
  border-top-left-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 0;
`;

export const TitlePositionContainer = styled.h3`
  margin-bottom: 11px;
`;
export const ListRadioLabel = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const RadioLabel = styled.li`
  label {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
export const InputHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  & + label svg {
    fill: none;
  }
  &:checked + label svg {
    fill: var(--sec-color);
    stroke: var(--sec-color);
  }
`;
export const ErrorMessage = styled.span`
  font-size: 12px;
  line-height: 1.166;
  display: inline-block;
  margin: 4px 0 0 16px;
  color: var(--error-color);
`;

export const ButtonStuled = styled.button`
  background-color: ${props =>
    props.disabled ? 'var(--disabled-color)' : 'var(--prim-color)'};
  color: ${props => (props.disabled ? 'var(--text-sec)' : 'var(--text-prim)')};
  border-radius: 80px;
  padding: 4px 0;
  width: 100px;
  height: 34px;
  text-align: center;
  &:is(:hover, :focus) {
    background-color: ${props =>
      props.disabled ? 'var(--disabled-color)' : 'var(--hover-color)'};
  }
`;

export const PhotoWrapper = styled.div`
  margin-bottom: 24px;
  height: 72px;
  display: flex;
  flex-direction: column;
`;

export const FormButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

export const TextFieldStyled = styled(TextField)(({ error }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '14px 16px',
    fontSize: 'var(--fz-text)',
    lineHeight: 'var(--ln-text)',
    fontFamily: ['Nunito', 'sans-serif'],
    height: '26px',
  },
  '& label': {
    color: 'var(--text-input)',
    fontFamily: ['Nunito', 'sans-serif'],
    fontSize: 'var(--fz-text)',
    lineHeight: 'var(--ln-text)',

    '&[data-shrink="true"]': {
      color: error ? 'var(--error-color)' : 'var(--text-input)',
      fontSize: '12px',
    },
    '&.Mui-focused': {
      color: error ? 'var(--error-color)' : 'var(--text-input)',
      fontSize: '12px',
    },
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: error ? 2 : 1,
      borderColor: error ? 'var(--error-color)' : 'var(--border-color)',
      color: error ? 'var(--error-color)' : 'var(--text-input)',
    },
    '&:hover fieldset': {
      borderWidth: error ? 2 : 1,
      borderColor: error ? 'var(--error-color)' : 'var(--border-color)',
      color: error ? 'var(--error-color)' : 'var(--text-input)',
    },
    '&.Mui-focused fieldset': {
      borderWidth: error ? 2 : 1,
      borderColor: error ? 'var(--error-color)' : 'var(--border-color)',
      color: error ? 'var(--error-color)' : 'var(--text-input)',
    },
    '&.Mui-error fieldset': {
      borderWidth: error ? 2 : 1,
      borderColor: error ? 'var(--error-color)' : 'var(--border-color)',
      color: error ? 'var(--error-color)' : 'var(--text-input)',
    },
  },
  '.MuiFormHelperText-root.Mui-error': {
    color: 'var(--error-color)',
    margin: '4px 0 0 16px',
    fontFamily: ['Nunito', 'sans-serif'],
    fontSize: '12px',
    lineHeight: '1.16',
  },
}));
