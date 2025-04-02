import Image from 'next/image';
import NavLinks from '../NavLinks';
import { HeaderProps } from './header.type';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 1000px;
  padding: .0625rem;
  position: relative;

  .container-navbar {
    position: absolute;
    left: 0;
    top: 70px;
    background: ${({ theme }) => theme.gradients.softLight};
    border-radius: 1.5rem;
    padding: .0625rem;
    width: 100%;

  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: .75rem 0;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
  }

  .cta-button {
    display: none;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1000px;
  padding: .75rem 1rem;

  @media (min-width: 768px) {
    padding: .75rem 1.5rem;
  }

  @media (min-width: 992px) {
    padding-right: .75rem;
  }
`;

const StyledLogo = styled(Image)`
  width: 28px;
  height: auto;
`;

export default function Header(props: HeaderProps) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo alt='Logo do Eduardo Marketing Digital' src={props.logo.url} width={50} height={50} />

        <Image
          onClick={() => setMenuActive(!menuActive)}
          alt='Icone do Menu Mobile'
          src='/icons/menu.svg'
          width={24}
          height={16}
        />

        <div className='container-navbar'>
          <NavLinks links={props.menuLinks} />
        </div>

        <Link href={props.ctaButton.url} target='_blank' className='cta-button'>
          {props.ctaButton.label}
        </Link>
      </StyledContainer>
    </StyledHeader>
  );
}
