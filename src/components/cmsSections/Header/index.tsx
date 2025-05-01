import Image from 'next/image';
import { HeaderProps } from './header.type';
import styled from 'styled-components';
import MobileMenuIcon from 'public/icons/menu.svg';
import CTALink from './CTALink';
import NavLinks from './NavLinks';
import useResponsiveMenu from './useResponsiveMenu';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import { boxShadow } from 'src/styles';

const Styled = {
  Header: styled(BorderGradientContainer)`

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

  MobileMenuButton: styled.button`
    display: flex;
    cursor: pointer;

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

export default function Header(props: HeaderProps) {
  const { isMenuActive, setIsMenuActive } = useResponsiveMenu();

  return (
    <Styled.Header as="header" $borderRadius='62.5rem'>
      <Styled.HeaderWrapper>
        <Styled.LogoWrapper>
          <Image
            alt='Logo do Eduardo Marketing Digital'
            src={props.logo.url}
            width={50}
            height={50}
          />
        </Styled.LogoWrapper>

        <Styled.MobileMenuButton onClick={() => setIsMenuActive(!isMenuActive)} >
          <MobileMenuIcon/>
        </Styled.MobileMenuButton>

        <NavLinks
          links={props.menuLinks}
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
          ctaButton={{ url: props.ctaButton.url, label: props.ctaButton.label }}
        />

        <Styled.CTAButtonWrapperDesktop $borderRadius='62.5rem'>
          <CTALink href={props.ctaButton.url} target='_blank'>
            {props.ctaButton.label}
          </CTALink>
        </Styled.CTAButtonWrapperDesktop>
      </Styled.HeaderWrapper>
    </Styled.Header>
  );
}
