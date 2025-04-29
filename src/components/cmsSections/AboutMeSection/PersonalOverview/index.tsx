import Link from 'next/link';
import styled from 'styled-components';
import { PersonalOverviewProps } from '../aboutMe.type';
import { BorderGradientContainer } from 'src/styles/BorderGradient';

const PersonalOverviewWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const OverviewSection = styled.div`
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
`;

const OverviewItem = styled.div`
  display: grid;
  gap: .5rem;

  width: 100%;
`;

const OverviewTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
`;

const OverviewDescription = styled.p`
  font-size: .875rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const CTALink = styled(Link)`
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
`;

export default function PersonalOverview({ personalOverviewContent, linkcta }: PersonalOverviewProps) {
  return (
    <PersonalOverviewWrapper>
      <OverviewSection>
        {personalOverviewContent.map((overviews) => (
          <OverviewItem key={overviews.id}>
            <OverviewTitle>{overviews.title}</OverviewTitle>
            <OverviewDescription>{overviews.description}</OverviewDescription>
          </OverviewItem>
        ))}
      </OverviewSection>

      <BorderGradientContainer $borderRadius='3rem'>
        <CTALink href={linkcta.url} target='_blank'>
          <span>{linkcta.label}</span>
        </CTALink>
      </BorderGradientContainer>
    </PersonalOverviewWrapper>
  );
}
