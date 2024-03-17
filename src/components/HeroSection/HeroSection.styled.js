import styled from 'styled-components';
import img from '../../images/hero-bg.png';

export const HeroSectionWrapper = styled.section`
  background-image: url('${img}');
  background-size: cover;
  background-position: center;
  padding: 40px 0 71px;

  .container {
    padding: 0 16px;
    width: 360px;
    margin: auto;
    color: var(--text-sec);
    display: flex;
    flex-direction: column;
    align-items: center;
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
