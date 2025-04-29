import Image from 'next/image';
import { BorderGradientContainer } from 'src/styles/BorderGradient';
import { HeaderProps } from './header.type';
import styled from 'styled-components';
import MobileMenuIcon from 'public/icons/menu.svg';
import CTALink from './CTALink';
import NavLinks from './NavLinks';
import useResponsiveMenu from './useResponsiveMenu';

const StyledHeaderBorderGradient = styled(BorderGradientContainer)``;

const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 62.5rem;
  padding: .75rem 1rem;

  @media (min-width: 768px) {
    padding: .75rem 1.5rem;
  }

  @media (min-width: 992px) {
    padding-right: .75rem;
  }
`;

const LogoWrapper = styled.div`
  img {
    width: 33px;
    height: auto;
  }

  @media (min-width: 992px) {
    width: 156.13px;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

const CTAButtonWrapperDesktop = styled(BorderGradientContainer)`
  @media (max-width: 991px) {
    display: none;
  }
`;

export default function Header(props: HeaderProps) {
  const { isMenuActive, setIsMenuActive } = useResponsiveMenu();

  return (
    <StyledHeaderBorderGradient as="header" $borderRadius='62.5rem'>
      <HeaderContentWrapper>
        <LogoWrapper>
          <Image
            alt='Logo do Eduardo Marketing Digital'
            src={props.logo.url}
            width={50}
            height={50}
          />
        </LogoWrapper>

        <MobileMenuButton onClick={() => setIsMenuActive(!isMenuActive)} >
          <MobileMenuIcon/>
        </MobileMenuButton>

        <NavLinks
          links={props.menuLinks}
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
          ctaButton={{ url: props.ctaButton.url, label: props.ctaButton.label }}
        />

        <CTAButtonWrapperDesktop $borderRadius='62.5rem'>
          <CTALink href={props.ctaButton.url} target='_blank'>
            {props.ctaButton.label}
          </CTALink>
        </CTAButtonWrapperDesktop>
      </HeaderContentWrapper>
    </StyledHeaderBorderGradient>
  );
}
