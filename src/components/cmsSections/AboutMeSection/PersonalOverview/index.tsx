import Link from 'next/link';
import styled from 'styled-components';
import { BorderGradientContainer } from 'src/styles/BorderGradient';
import { PersonalOverviewProps } from './personalOverview.type';

const Styled = {
  PersonalOverviewWrapper: styled.div`
    display: grid;
    gap: 1.5rem;
  `,

  OverviewItems: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }

    @media (min-width: 1200px) {
      text-align: start;
    }
  `,

  OverviewItem: styled.div`
    display: grid;
    gap: .5rem;
    width: 100%;
  `,

  OverviewTitle: styled.h3`
    font-size: 1.125rem;
    font-weight: 700;
  `,

  OverviewText: styled.p`
    font-size: .875rem;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `,

  CTALink: styled(Link)`
    display: block;
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.softGray};
    font-size: .875rem;
    font-weight: 500;
    border-radius: 3rem;
    padding: 1rem;
    width: 100%;
    text-align: center;

    span {
      max-width: 184px;
      display: flex;
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      font-size: 1rem;

      span {
        max-width: 100%;
        justify-content: center;
      }
    }
  `
};

export default function PersonalOverview({ personalOverviewContent, linkcta }: PersonalOverviewProps) {
  return (
    <Styled.PersonalOverviewWrapper>
      <Styled.OverviewItems>
        {personalOverviewContent.map((overviews) => (
          <Styled.OverviewItem key={overviews.id}>
            <Styled.OverviewTitle>{overviews.title}</Styled.OverviewTitle>
            <Styled.OverviewText>{overviews.description}</Styled.OverviewText>
          </Styled.OverviewItem>
        ))}
      </Styled.OverviewItems>

      <BorderGradientContainer $borderRadius='3rem'>
        <Styled.CTALink href={linkcta.url} target='_blank'>
          <span>{linkcta.label}</span>
        </Styled.CTALink>
      </BorderGradientContainer>
    </Styled.PersonalOverviewWrapper>
  );
}
