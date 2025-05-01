import Image from 'next/image';
import styled from 'styled-components';
import PersonalOverview from './PersonalOverview';
import { AboutMeProps } from './aboutMe.type';
import { TitleSection } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';

const Styled = {
  Section: styled.section`
    display: grid;
  `,

  BorderGradientContainer: styled(BorderGradientContainer)`
    justify-self: center;
    max-width: 704px;
    margin: 2rem 0 4rem 0;

    @media (min-width: 768px) {
      margin: 3rem 0 5rem 0;
    }

    @media (min-width: 992px) {
      max-width: 100%;
    }
  `,

  AboutMeContentWrapper: styled.div`
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

    @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,

  AvatarBorder: styled(BorderGradientContainer)`
    width: 100%;

    @media (min-width: 768px) {
      max-width: 658px;
    }
  `,

  AvatarWrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    overflow: hidden;
    height: 100%;
  `,

  Avatar: styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
      height: revert-layer;
    }
  `,
};


export default function AboutMeSection(props: AboutMeProps) {
  return (
    <Styled.Section>
      <TitleSection>{props.titleSection}</TitleSection>

      <Styled.BorderGradientContainer>
        <Styled.AboutMeContentWrapper>
          <Styled.AvatarBorder>
            <Styled.AvatarWrapper>
              <Styled.Avatar
                src={props.aboutMeImage.url}
                alt="Foto de Perfil do Eduardo Silva"
                width={656}
                height={540}
                priority
              />
            </Styled.AvatarWrapper>
          </Styled.AvatarBorder>

          <PersonalOverview personalOverviewContent={props.personalOverviewContent} linkcta={props.linkcta} />
        </Styled.AboutMeContentWrapper>
      </Styled.BorderGradientContainer>
    </Styled.Section>
  );
}
