import styled from 'styled-components';
import { HeroSectionProps } from './heroSection.type';
import Newsletter from './Newsletter';

const StyledHeroSection = styled.section`
  margin-top: 4rem;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 5rem;
  }
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    max-width: 342px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const StyledHighlighted = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: underline;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StyledStrongHighlight = styled.span`
  font-size: clamp(1.625rem, 8vw, 1.875rem);
  font-weight: 700;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 3.375rem;
  }
`;

export default function HeroSection({ cotent }: HeroSectionProps) {
  const [normalIntro, highlighted, connector] = cotent[0].titlePart1.value.document.children[0].children;
  const [strongHighlight] = cotent[0].titlePart2.value.document.children[0].children;

  return (
    <StyledHeroSection>
      <StyledTitle>
        <span>
          {normalIntro.value}
          <StyledHighlighted>{highlighted.value}</StyledHighlighted>
          {connector.value}
          <br />
        </span>
        <StyledStrongHighlight>{strongHighlight.value}</StyledStrongHighlight>
      </StyledTitle>

      <Newsletter content={cotent[1]} />
    </StyledHeroSection>
  );
}
