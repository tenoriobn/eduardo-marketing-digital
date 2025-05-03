import Link from 'next/link';
import { NavLinksProps } from './navLinks.type';
import styled from 'styled-components';
import CTALink from '../CTALink';
import { usePathname } from 'next/navigation';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import { boxShadow } from 'src/styles';
import { AnimatePresence, motion } from 'motion/react';

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
    color: ${({ theme }) => theme.colors.silverGray};

    &:hover, &.active {
      color: ${({ theme }) => theme.colors.lightGray};
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

export default function NavLinks({ links, ctaButton, isMenuActive, isMobile, setIsMenuActive }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Styled.NavLinksWrapper
        $isMenuActive={isMenuActive}
        key={isMenuActive ? 'navLinkOpen' : 'navLinkClose'}
        {...(isMobile && {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -16 },
          transition: { duration: .075 }
        })}
      >
        <Styled.Nav>
          {links.map((link) => (
            <Styled.Link
              key={link.id}
              href={link.url}
              onClick={isMobile ? () => setIsMenuActive(false) : undefined}
              className={`${pathname === link.url ? 'active' : ''}`}
            >
              {link.label}
            </Styled.Link>
          ))}

          <Styled.MobileCTAWrapper>
            <CTALink
              href={ctaButton.url}
              target="_blank"
              rel='noopener noreferrer'
              onClick={() => setIsMenuActive(false)}
            >
              {ctaButton.label}
            </CTALink>
          </Styled.MobileCTAWrapper>
        </Styled.Nav>
      </Styled.NavLinksWrapper>
    </AnimatePresence>
  );
}
