import Link from 'next/link';
import { NavLinksProps } from './navLinks.type';
import styled from 'styled-components';
import CTAButton from '../CTAButton';
import { usePathname } from 'next/navigation';

const StyledNavlinksContainer = styled.div`
  @media (max-width: 991px) {
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

export default function NavLinks({ links, isMobile, ctaButton }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <StyledNavlinksContainer>
      <StyledNav>
        {links.map((link) => (
          <StyledLink
            key={link.id}
            href={link.url}
            className={`${pathname === link.url ? 'active' : ''}`}
          >
            {link.label}
          </StyledLink>
        ))}

        {isMobile &&
          <CTAButton href={ctaButton.url} target="_blank">
            {ctaButton.label}
          </CTAButton>
        }
      </StyledNav>
    </StyledNavlinksContainer>
  );
}
