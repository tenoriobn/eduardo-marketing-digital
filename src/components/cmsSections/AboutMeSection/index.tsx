import Image from 'next/image';
import styled from 'styled-components';
import PersonalOverview from './PersonalOverview';
import { AboutMeProps } from './aboutMe.type';
import { BorderGradientContainer } from 'src/styles/BorderGradient';

const StyledAboutMeSection = styled.section`
  display: grid;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  justify-self: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const AboutMeContentWrapper = styled.div`
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

const BorderImage = styled(BorderGradientContainer)`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 658px;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1.5rem;
  overflow: hidden;
  height: 100%;
`;

const Avatar = styled(Image)`
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
      <Title>{props.titleSection}</Title>

      <BorderGradientContainer>
        <AboutMeContentWrapper>
          <BorderImage>
            <ImageWrapper>
              <Avatar
                src={props.aboutMeImage.url}
                alt="Foto de Perfil do Eduardo Silva"
                width={656}
                height={540}
                priority
              />
            </ImageWrapper>
          </BorderImage>

          <PersonalOverview personalOverviewContent={props.personalOverviewContent} linkcta={props.linkcta} />
        </AboutMeContentWrapper>
      </BorderGradientContainer>
    </StyledAboutMeSection>
  );
}
