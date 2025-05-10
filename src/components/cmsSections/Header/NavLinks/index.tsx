import { NavLinksProps } from './navLinks.type';
import styled from 'styled-components';
import CTALink from '../CTALink';
import { BorderGradientContainer } from 'src/styles/ui/BorderGradient';
import { boxShadow, linkHover } from 'src/styles';
import { AnimatePresence, motion } from 'motion/react';
import { Link, scrollSpy } from 'react-scroll';
import { useEffect } from 'react';
import useScrollSpyInit from './useScrollSpyInit';

const Styled = {
  NavLinksWrapper: styled(motion.div)<{$isMenuActive: Boolean}>`
    @media (max-width: 991px) {
      display: ${({ $isMenuActive }) => $isMenuActive ? '' : 'none'};
      position: absolute;
      right: 0;
      top: 76px;
      background: ${({ theme }) => theme.gradients.softLight};
      border-radius: 1.5rem;
      padding: .0625rem;
      width: 100%;
      max-width: max-content;
    }

    @media (min-width: 992px) {
      display: block;
    }
  `,

  Nav: styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;

    @media (max-width: 991px) {
      ${boxShadow}
    }

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }

    @media (min-width: 992px) {
      flex-direction: row;
      padding: 0;
    }
  `,

  Link: styled(Link)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.silverGray};
    transition: ${({ theme }) => theme.transitions.softInteraction};

    ${linkHover}

    &.active {
      color: ${({ theme }) => theme.colors.lightGray}!important;
      text-decoration: underline;
    }
  `,

  MobileCTAWrapper: styled(BorderGradientContainer)`
    margin-top: .75rem;

    @media (min-width: 992px) {
      display: none;
    }
  `,
};

export default function NavLinks({ links, ctaButton, isMenuActive, isMobile, onLinkClick }: NavLinksProps) {
  useScrollSpyInit();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Styled.NavLinksWrapper
        key="navLinks"
        $isMenuActive={isMenuActive}
        initial={isMobile ? { opacity: 0, y: -16 } : false}
        animate={isMobile ? { opacity: 1, y: 0 } : false}
        exit={isMobile ? { opacity: 0, y: -16 } : ''}
        transition={{ duration: .075 }}
      >
        <Styled.Nav>
          {links.map((link) => (
            <Styled.Link
              role="link"
              key={link.id}
              to={link.url}
              spy={true}
              smooth={true}
              offset={isMobile ? -130 : -240}
              isDynamic={true}
              duration={300}
              onClick={onLinkClick}
              activeClass="active"
            >
              {link.label}
            </Styled.Link>
          ))}

          {isMobile && (
            <Styled.MobileCTAWrapper>
              <CTALink href={ctaButton.url} target="_blank" rel="noopener noreferrer" onClick={onLinkClick}>
                {ctaButton.label}
              </CTALink>
            </Styled.MobileCTAWrapper>
          )}
        </Styled.Nav>
      </Styled.NavLinksWrapper>
    </AnimatePresence>
  );
}
