import { smoothScrollTo } from '../../helpers/smoothScroll';
import icons from '../../images/icons.svg';
import { NavStyled, HeaderStyled, LogoLink, LinkStyled } from './Header.styled';

function Header() {
  return (
    <HeaderStyled>
      <div className="header-wrapper">
        <LogoLink href="/">
          <svg width="104" height="26">
            <use href={icons + '#icon-logo'}></use>
          </svg>
        </LogoLink>
        <NavStyled>
          <LinkStyled
            href="#Working with GET request"
            onClick={e => {
              e.preventDefault();
              smoothScrollTo('Working with GET request');
            }}
          >
            Users
          </LinkStyled>
          <LinkStyled
            href="#Working with POST request"
            onClick={e => {
              e.preventDefault();
              smoothScrollTo('Working with POST request');
            }}
          >
            Sign up
          </LinkStyled>
        </NavStyled>
      </div>
    </HeaderStyled>
  );
}

export default Header;
