import { Container, SectionStyled, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled className="section">
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <>{children}</>
      </Container>
    </SectionStyled>
  );
};
