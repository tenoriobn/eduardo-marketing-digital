import Image from 'next/image';
import styled from 'styled-components';
import PersonalOverview from './PersonalOverview';
import { AboutMeProps } from './aboutMe.type';
import { boxShadow, sectionMotionProps, TitleSection } from 'src/styles';
import { BorderGradientContainer } from 'src/styles/ui/BorderGradient';
import { motion } from 'motion/react';

const Styled = {
  Section: styled(motion.section)`
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
    ${boxShadow};
    padding: 1rem;

    &::before {
      content: '';
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background-color: ${({ theme }) => theme.colors.ironGray};
      border-radius: 100%;
      filter: blur(120px);
      z-index: -1;
    }

    @media (min-width: 768px) {
      padding: 1.5rem;
      justify-items: center;
      align-items: center;

      &::before {
        top: 4%;
        width: 220px;
        height: 220px;
        filter: blur(180px);
      }
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);

      &::before {
        top: 18%;
        width: 340px;
        height: 340px;
        filter: blur(200px);
      }
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
    ${boxShadow};
    height: 100%;
  `,

  Avatar: styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
      height: 540px;
    }
  `,
};


export default function AboutMeSection(props: AboutMeProps) {
  return (
    <Styled.Section
      id='sobre'
      {...sectionMotionProps}
    >
      <TitleSection>{props.titleSection}</TitleSection>

      <Styled.BorderGradientContainer>
        <Styled.AboutMeContentWrapper>
          <Styled.AvatarBorder>
            <Styled.AvatarWrapper>
              <Styled.Avatar
                src={props.aboutMeImage.url}
                alt="Foto de Perfil do Eduardo Silva"
                width={0}
                height={0}
                sizes="100vw"
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
