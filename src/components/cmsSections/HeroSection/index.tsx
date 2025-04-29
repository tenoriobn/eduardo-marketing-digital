import styled from 'styled-components';
import { HeroSectionProps } from './heroSection.type';
import Newsletter from './Newsletter';
import KeyMetric from './KeyMetric';

const StyledHeroSection = styled.section`
  margin: 4rem 0;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    margin: 5rem 0;
  }
`;

const Title = styled.h2`
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

const TitleHighlighted = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: underline;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TitleStrongHighlight = styled.span`
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
      <Title>
        <span>
          {normalIntro.value}
          <TitleHighlighted>{highlighted.value}</TitleHighlighted>
          {connector.value}
          <br />
        </span>
        <TitleStrongHighlight>{strongHighlight.value}</TitleStrongHighlight>
      </Title>

      <Newsletter content={cotent[1]} />

      <KeyMetric keyMetricCard={cotent[2].keyMetricCard} />
    </StyledHeroSection>
  );
}
