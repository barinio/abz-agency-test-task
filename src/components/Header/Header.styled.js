import styled from 'styled-components';

export const HeaderStyled = styled.header`
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    width: 100%;
    padding: 13px 16px;
    max-width: 1170px;
    margin: auto;
    @media (width < 360px) {
      gap: 5px;
      padding: 13px;
    }
    @media (width >= 768px) {
      padding: 13px 32px;
    }
    @media (width >= 1024px) {
      padding: 13px 60px;
    }
    @media (width >= 1170px) {
      padding: 13px 0;
    }
  }
`;
export const LogoLink = styled.a`
  display: inline-block;
  height: 26px;
`;
export const LinkStyled = styled.a`
  display: inline-block;
  background-color: var(--prim-color);
  color: var(--text-prim);
  border-radius: 80px;
  padding: 4px 0;
  width: 100px;
  height: 34px;
  text-align: center;
  &:is(:hover, :focus) {
    background-color: var(--hover-color);
  }

  @media (width < 360px) {
    width: 70px;
  }
`;
export const NavStyled = styled.nav`
  display: flex;
  gap: 10px;
`;
