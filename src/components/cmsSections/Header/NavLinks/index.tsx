import Link from 'next/link';
import { NavLinksProps } from './navLinks.type';
import styled from 'styled-components';
import CTALink from '../CTALink';
import { usePathname } from 'next/navigation';
import { BorderGradientContainer } from 'src/styles/BorderGradient';

const NavLinksWrapper = styled.div<{$isMenuActive: Boolean}>`
  @media (max-width: 991px) {
    display: ${({ $isMenuActive }) => $isMenuActive ? '' : 'none'};
    position: absolute;
    left: 0;
    top: 70px;
    background: ${({ theme }) => theme.gradients.softLight};
    border-radius: 1.5rem;
    padding: .0625rem;
    width: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: .75rem 0;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1.5rem;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 1.5rem;
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.silverGray};

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: underline;
  }
`;

const MobileCTAWrapper = styled(BorderGradientContainer)`
  margin-top: .75rem;

  @media (min-width: 992px) {
    display: none;
  }
`;

export default function NavLinks({ links, ctaButton, isMenuActive, setIsMenuActive }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <NavLinksWrapper $isMenuActive={isMenuActive}>
      <Nav>
        {links.map((link) => (
          <StyledLink
            key={link.id}
            href={link.url}
            onClick={() => setIsMenuActive(false)}
            className={`${pathname === link.url ? 'active' : ''}`}
          >
            {link.label}
          </StyledLink>
        ))}

        <MobileCTAWrapper>
          <CTALink
            href={ctaButton.url}
            target="_blank"
            onClick={() => setIsMenuActive(false)}
          >
            {ctaButton.label}
          </CTALink>
        </MobileCTAWrapper>
      </Nav>
    </NavLinksWrapper>
  );
}
