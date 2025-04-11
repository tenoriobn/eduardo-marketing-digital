import Image from 'next/image';
import { HeaderProps } from './header.type';
import styled from 'styled-components';
import MobileMenuIcon from 'public/icons/menu.svg';
import CTAButton from './CTAButton';
import NavLinks from './NavLinks';
import useResponsiveMenu from './useResponsiveMenu';
import { useState } from 'react';

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

const StyledMobileMenuIcon = styled(MobileMenuIcon)`
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

const CTAButtonWrapperDesktop = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`;

export default function Header(props: HeaderProps) {
  const { menuActive, setMenuActive, isMobile } = useResponsiveMenu();

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

        <StyledMobileMenuIcon onClick={() => setMenuActive(!menuActive)} />

        <NavLinks
          links={props.menuLinks}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          ctaButton={{ url: props.ctaButton.url, label: props.ctaButton.label }}
        />

        <CTAButtonWrapperDesktop>
          <CTAButton href={props.ctaButton.url} target='_blank' className='cta__button-desktop'>
            {props.ctaButton.label}
          </CTAButton>
        </CTAButtonWrapperDesktop>
      </StyledContainer>
    </StyledHeader>
  );
}
