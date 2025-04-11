import Link from 'next/link';
import { NavLinksProps } from './navLinks.type';
import styled from 'styled-components';
import CTAButton from '../CTAButton';
import { usePathname } from 'next/navigation';

const StyledNavlinksContainer = styled.div<{$menuActive: Boolean}>`
  @media (max-width: 991px) {
    display: ${({ $menuActive }) => $menuActive ? '' : 'none'};
    position: absolute;
    left: 0;
    top: 70px;
    background: ${({ theme }) => theme.gradients.softLight};
    border-radius: 1.5rem;
    padding: .0625rem;
    width: 100%;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: .75rem 0;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1.5rem;

  div {
    margin-top: .75rem;
  }

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

const CTAButtonWrapperMobile = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

export default function NavLinks({ links, ctaButton, menuActive, setMenuActive }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <StyledNavlinksContainer $menuActive={menuActive}>
      <StyledNav>
        {links.map((link) => (
          <StyledLink
            key={link.id}
            href={link.url}
            onClick={() => setMenuActive(false)}
            className={`${pathname === link.url ? 'active' : ''}`}
          >
            {link.label}
          </StyledLink>
        ))}

        <CTAButtonWrapperMobile>
          <CTAButton href={ctaButton.url} target="_blank" onClick={() => setMenuActive(false)}>
            {ctaButton.label}
          </CTAButton>
        </CTAButtonWrapperMobile>
      </StyledNav>
    </StyledNavlinksContainer>
  );
}
