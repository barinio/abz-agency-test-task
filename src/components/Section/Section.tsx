import { SectionProps } from '../../type';
import { Container, SectionStyled, SectionTitle } from './Section.styled';

export const Section = ({ title, children }: SectionProps) => {
  return (
    <SectionStyled className="section">
      <Container>
        <SectionTitle id={title}>{title}</SectionTitle>
        <>{children}</>
      </Container>
    </SectionStyled>
  );
};
