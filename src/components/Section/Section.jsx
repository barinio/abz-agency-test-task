import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <Container>
        <h2>{title}</h2>
        <>{children}</>
      </Container>
    </section>
  );
};
