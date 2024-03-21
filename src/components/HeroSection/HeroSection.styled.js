import styled from 'styled-components';
import mobImg from '../../images/mobile-hero-bg.jpg';
import tabImg from '../../images/tablet-hero-bg.jpg';
import deskImg from '../../images/desk-hero-bg.jpg';
import bigDeskImg from '../../images/big-desk-hero-bg.jpg';

export const HeroSectionWrapper = styled.section`
  background-image: url('${mobImg}');
  background-size: cover;
  background-position: center;
  padding: 40px 0 71px;
  width: 100%;
  max-width: 1170px;
  margin: auto;
  @media (width >= 768px) {
    background-image: url('${tabImg}') 0 0 / 100% 100% no-repeat;
    padding: 89px 0 88px;
  }

  @media (width >= 1024px) {
    background-image: url('${deskImg}');
    padding: 164px 0 163px;
  }
  @media (width >= 1170px) {
    background-image: url('${bigDeskImg}');
  }

  .container {
    padding: 0 16px;
    width: 360px;
    margin: auto;
    color: var(--text-sec);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (width < 360px) {
      width: 315px;
    }
    @media (width >= 768px) {
      padding: 0;
      width: 380px;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: var(--fz-title);
  line-height: var(--ln-title);
  text-align: center;
  margin: 0 0 21px 0;
`;
export const HeroText = styled.p`
  font-size: var(--fz-text);
  line-height: var(--ln-text);
  text-align: center;
  margin-bottom: 32px;
`;
