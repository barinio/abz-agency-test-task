import Button from '../Button/Button';
import { HeroSectionWrapper, HeroTitle } from './HeroSection.styled';

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <div className="container">
        <HeroTitle>Test assignment for front-end developer</HeroTitle>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button text="Sign up" />
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
