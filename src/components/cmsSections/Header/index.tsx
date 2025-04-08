import Image from 'next/image';
import NavLinks from './NavLinks';
import { HeaderProps } from './header.type';
import { useState } from 'react';
import styled from 'styled-components';
import CTAButton from './CTAButton';
import useWindowSize from 'src/utils/useWindowSize';
import useResponsiveMenu from './useResponsiveMenu';

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 1000px;
  padding: .0625rem;
  position: relative;
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

const StyledContainerLogo = styled.div`
  img {
    width: 33px;
    height: auto;
  }

  @media (min-width: 992px) {
    width: 156.13px;
  }
`;

export default function Header(props: HeaderProps) {
  const { menuActive, setMenuActive } = useResponsiveMenu();
  const { isMobile } = useWindowSize();

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledContainerLogo>
          <Image
            alt='Logo do Eduardo Marketing Digital'
            src={props.logo.url}
            width={50}
            height={50}
          />
        </StyledContainerLogo>

        {isMobile &&
          <Image
            onClick={() => setMenuActive(!menuActive)}
            alt='Icone do Menu Mobile'
            src='/icons/menu.svg'
            width={24}
            height={16}
          />
        }

        {menuActive &&
          <NavLinks
            links={props.menuLinks}
            isMobile={isMobile}
            ctaButton={{ url: props.ctaButton.url, label: props.ctaButton.label }}
          />
        }

        {!isMobile &&
          <CTAButton href={props.ctaButton.url} target='_blank'>
            {props.ctaButton.label}
          </CTAButton>
        }
      </StyledContainer>
    </StyledHeader>
  );
}
