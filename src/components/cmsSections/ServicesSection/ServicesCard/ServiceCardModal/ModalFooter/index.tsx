import Link from 'next/link';
import WhatsappButton from 'src/components/cmsSections/HeroSection/Newsletter/WhatsappButton';
import { linkHover } from 'src/styles';
import styled from 'styled-components';
import { ModalFooterProps } from './modalFooter.type';

const Styled = {
  Footer: styled.footer`
    display: flex;
    align-items: center;
    gap: .75rem;
  `,

  CTALink: styled(Link)`
    font-size: 1rem;
    font-weight: 600;
    text-decoration: underline;
    order: 3;
    transition: ${({ theme }) => theme.transitions.softInteraction};
    color: ${({ theme }) => theme.colors.silverGray};

    ${linkHover}

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  `,
};

export default function ModalFooter({ ctaLink }: ModalFooterProps) {
  return (
    <Styled.Footer>
      <WhatsappButton
        contactViaWhatsapp={ctaLink.url}
      />

      <Styled.CTALink
        href={ctaLink.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        {ctaLink.label}
      </Styled.CTALink>
    </Styled.Footer>
  );
}
