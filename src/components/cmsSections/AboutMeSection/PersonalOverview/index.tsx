import Link from 'next/link';
import styled from 'styled-components';
import { PersonalOverviewProps } from '../aboutMe.type';

const StyledPersonalOverview = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const StyledOverviewContainer = styled.div`
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

const StyledOverview = styled.div`
  display: grid;
  gap: .5rem;

  width: 100%;
`;

const StyledAboutMeTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
`;

const StyledAboutMeDescription = styled.p`
  font-size: .875rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledLinkCTAContainer = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 3rem;
  padding: .0625rem;
  width: 100%;
  height: max-content;
`;

const StyledLinkCTA = styled(Link)`
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
    <StyledPersonalOverview>
      <StyledOverviewContainer>
        {personalOverviewContent.map((overviews) => (
          <StyledOverview key={overviews.id}>
            <StyledAboutMeTitle>{overviews.title}</StyledAboutMeTitle>
            <StyledAboutMeDescription>{overviews.description}</StyledAboutMeDescription>
          </StyledOverview>
        ))}
      </StyledOverviewContainer>

      <StyledLinkCTAContainer>
        <StyledLinkCTA href={linkcta.url} target='_blank'>
          <span>{linkcta.label}</span>
        </StyledLinkCTA>
      </StyledLinkCTAContainer>
    </StyledPersonalOverview>
  );
}
