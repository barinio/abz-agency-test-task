import styled from 'styled-components';

// export const PostUserFormik = styled.form``;
// export const FormWrapper = styled.div``;

export const ContainerUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const FormInput = styled.input`
  border: 1px solid #d0cfcf;
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
`;
export const PositionContainer = styled.div`
  margin: 43px 0 47px;
`;
export const UploadLabel = styled.label`
  display: flex;
  width: 100%;
`;
export const UploadButton = styled.p`
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
    fill: #00bdd3;
    stroke: #00bdd3;
  }
`;
export const ErrorMessage = styled.span`
  font-size: 12px;
  line-height: 1.166;
  display: inline-block;
  padding: 4px 0 0 16px;
  color: #7e7e7e;
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
`;

export const FormButtonWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;
