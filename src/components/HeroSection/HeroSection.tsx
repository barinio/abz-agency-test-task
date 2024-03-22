import { smoothScrollTo } from '../../helpers/smoothScroll';
import { LinkStyled } from '../Header/Header.styled';
import { HeroSectionWrapper, HeroText, HeroTitle } from './HeroSection.styled';

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <div className="container">
        <HeroTitle>Test assignment for front-end developer</HeroTitle>
        <HeroText>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </HeroText>
        <LinkStyled
          href="#Working with POST request"
          onClick={e => {
            e.preventDefault();
            smoothScrollTo('Working with POST request');
          }}
        >
          Sign up
        </LinkStyled>
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
