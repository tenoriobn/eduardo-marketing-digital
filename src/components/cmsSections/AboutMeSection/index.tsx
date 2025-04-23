import Image from 'next/image';
import styled from 'styled-components';
import PersonalOverview from './PersonalOverview';
import { AboutMeProps } from './aboutMe.type';

const StyledAboutMeSection = styled.section`
  display: grid;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const StyledTitleSection = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  justify-self: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 1.5rem;
  padding: .0625rem;
  height: 100%;
`;

const StyledAboutMeContent = styled.div`
  display: grid;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1.5rem;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
    justify-items: center;
    align-items: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledBorderImage = styled(StyledContainer)`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 658px;
  }
`;

const StyledContainerProfileImage = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1.5rem;
  overflow: hidden;
  height: 100%;
`;

const StyledProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 656px;
  }
`;


export default function AboutMeSection(props: AboutMeProps) {
  return (
    <StyledAboutMeSection>
      <StyledTitleSection>{props.titleSection}</StyledTitleSection>

      <StyledContainer>
        <StyledAboutMeContent>
          <StyledBorderImage>
            <StyledContainerProfileImage>
              <StyledProfileImage
                src={props.aboutMeImage.url}
                alt="Foto de Perfil do Eduardo Silva"
                width={656}
                height={540}
                priority
              />
            </StyledContainerProfileImage>
          </StyledBorderImage>

          <PersonalOverview personalOverviewContent={props.personalOverviewContent} linkcta={props.linkcta} />
        </StyledAboutMeContent>
      </StyledContainer>
    </StyledAboutMeSection>
  );
}
