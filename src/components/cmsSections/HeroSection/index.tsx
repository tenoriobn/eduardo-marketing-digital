import styled from 'styled-components';
import { HeroSectionProps } from './heroSection.type';
import Newsletter from './Newsletter';
import KeyMetric from './KeyMetric';
import { motion } from 'motion/react';
import { sectionMotionProps } from 'src/styles';

const Styled = {
  Section: styled(motion.section)`
    padding: 9.25rem 0 4rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    min-height: clamp(0px, 100dvh, 956px);
    gap: 1.5rem;


    @media (min-width: 768px) {
      padding: 10.25rem 0 5rem 0;
    }
  `,

  Title: styled.h2`
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
  `,

  TitleHighlighted: styled.span`
    font-size: 1.125rem;
    font-weight: 700;
    text-decoration: underline;
    text-transform: capitalize;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  TitleStrongHighlight: styled.span`
    font-size: clamp(1.625rem, 8vw, 1.875rem);
    font-weight: 700;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 3.375rem;
    }
  `,
};

export default function HeroSection({ cotent }: HeroSectionProps) {
  const [normalIntro, highlighted, connector] = cotent[0].titlePart1.value.document.children[0].children;
  const [strongHighlight] = cotent[0].titlePart2.value.document.children[0].children;

  return (
    <Styled.Section
      id='inicio'
      {...sectionMotionProps}
    >
      <Styled.Title>
        <span>
          {normalIntro.value}
          <Styled.TitleHighlighted>{highlighted.value}</Styled.TitleHighlighted>
          {connector.value}
          <br />
        </span>

        <Styled.TitleStrongHighlight>{strongHighlight.value}</Styled.TitleStrongHighlight>
      </Styled.Title>

      <Newsletter content={cotent[1]} />

      <KeyMetric keyMetricCard={cotent[2].keyMetricCard} />
    </Styled.Section>
  );
}
