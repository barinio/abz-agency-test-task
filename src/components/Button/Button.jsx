import { ButtonStyled } from './Button.styled';

function Button({ text }) {
  return (
    (text === 'Users' && <ButtonStyled>{text}</ButtonStyled>) ||
    (text === 'Sign up' && <ButtonStyled>{text}</ButtonStyled>) ||
    (text === 'Show more' && (
      <ButtonStyled $text="Show more">{text}</ButtonStyled>
    ))
  );
}

export default Button;
