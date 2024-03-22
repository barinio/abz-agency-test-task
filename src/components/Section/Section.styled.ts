import styled from 'styled-components';

export const SectionStyled = styled.section`
  margin-top: 140px;
`;
export const Container = styled.div`
  padding: 0 16px;
  width: 360px;
  margin: auto;
  color: var(--text-prim);
  @media (width < 360px) {
    max-width: 315px;
  }
  @media (width >= 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media (width >= 1024px) {
    padding: 0 60px;
    width: 1024px;
  }
`;
export const SectionTitle = styled.h2`
  font-size: var(--fz-title);
  line-height: var(--ln-title);
  text-align: center;
  margin-bottom: 50px;
`;
