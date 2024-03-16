import icons from '../../images/icons.svg';
import Button from '../Button/Button';
import { ButtonWrapper, HeaderStyled, LogoLink } from './Header.styled';

function Header() {
  return (
    <HeaderStyled>
      <LogoLink href="/">
        <svg width="104" height="26">
          <use href={icons + '#icon-logo'}></use>
        </svg>
      </LogoLink>
      <ButtonWrapper>
        <Button text="Users" />
        <Button text="Sign up" />
      </ButtonWrapper>
    </HeaderStyled>
  );
}

export default Header;
