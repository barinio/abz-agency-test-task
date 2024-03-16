import styled from 'styled-components';
import img from '../../images/hero-bg.png';

export const HeroSectionWrapper = styled.section`
  background-image: url('${img}');
  background-size: cover;
  background-position: center;

  .container {
    padding: 0 16px;
    width: 360px;
    margin: auto;
    color: var(--text-sec);
  }
`;

export const HeroTitle = styled.h1`
  font-size: var(--fz-title);
  line-height: var(--ln-title);
  text-align: center;
`;
