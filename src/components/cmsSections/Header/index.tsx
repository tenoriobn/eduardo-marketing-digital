import Image from 'next/image';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import CTALink from './CTALink';
import { boxShadow } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import useResponsiveMenu from './useResponsiveMenu';
import { HeaderProps } from './header.type';
import MobileMenuIcon from 'public/icons/menu.svg';
import CloseIcon from 'public/icons/close.svg';
import { AnimatePresence, motion } from 'motion/react';

const Styled = {
  Header: styled(motion.header)`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 99;
    background: linear-gradient(180deg, rgb(45 45 45) 45%, rgb(153 153 153 / 0%) 72%);
    backdrop-filter: blur(12px);
    padding: 1.5rem 1rem .0625rem 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem 2rem .0625rem 2rem;
    }

    @media (min-width: 1440px) {
      padding: 1.5rem 0 .0625rem 0;
    }
  `,

  BorderGradientContainer: styled(BorderGradientContainer)`
    max-width: 1200px;
    margin: 0 auto;
  `,

  HeaderWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 62.5rem;
    ${boxShadow}
    padding: .75rem 1rem;

    @media (min-width: 768px) {
      padding: .75rem 1.5rem;
    }

    @media (min-width: 992px) {
      padding-right: .75rem;
    }
  `,

  LogoWrapper: styled.div`
    img {
      width: 33px;
      height: auto;
    }

    @media (min-width: 992px) {
      width: 156.13px;
    }
  `,

  MobileMenuButton: styled(motion.button)`
    display: flex;
    cursor: pointer;
    height: 17px;

    @media (min-width: 992px) {
      display: none;
    }
  `,

  CTAButtonWrapperDesktop: styled(BorderGradientContainer)`
    @media (max-width: 991px) {
      display: none;
    }
  `,
};

export default function Header({ logo, menuLinks, ctaButton }: HeaderProps) {
  const { isMenuActive, toggleMenu, menuRef, isMobile } = useResponsiveMenu();

  return (
    <Styled.Header>
      <Styled.BorderGradientContainer $borderRadius='62.5rem' >
        <Styled.HeaderWrapper ref={menuRef}>
          <Styled.LogoWrapper>
            <Image alt="Logo" src={logo.url} width={50} height={50} priority />
          </Styled.LogoWrapper>

          <Styled.MobileMenuButton onClick={toggleMenu}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMenuActive ? 'close' : 'menu'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: .075 }}
              >
                {isMenuActive ? <CloseIcon /> : <MobileMenuIcon />}
              </motion.div>
            </AnimatePresence>
          </Styled.MobileMenuButton>

          <NavLinks
            links={menuLinks}
            ctaButton={ ctaButton }
            isMenuActive={isMenuActive}
            isMobile={isMobile}
            onLinkClick={() => isMobile && toggleMenu()}
          />

          {!isMobile && (
            <Styled.CTAButtonWrapperDesktop $borderRadius='62.5rem'>
              <CTALink href={ctaButton.url} target='_blank' rel='noopener noreferrer'>
                {ctaButton.label}
              </CTALink>
            </Styled.CTAButtonWrapperDesktop>
          )}
        </Styled.HeaderWrapper>
      </Styled.BorderGradientContainer>
    </Styled.Header>
  );
}
