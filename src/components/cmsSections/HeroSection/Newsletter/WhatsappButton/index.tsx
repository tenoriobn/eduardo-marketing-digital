import Link from 'next/link';
import styled from 'styled-components';
import WhatsappIcon from 'public/icons/whatsapp.svg';
import { WhatsappButtonProps } from './whatsappButton.type';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import { boxShadow, buttonActive, buttonHover } from 'src/styles';

const Styled = {
  BorderGradientContainer: styled(BorderGradientContainer)`
    cursor: pointer;
    max-width: max-content;

    @media (max-width: 767px) {
      align-self: end;
    }

    @media (min-width: 768px) {
      order: 2;
    }
  `,

  Link: styled(Link)`
    background-color: ${({ theme }) => theme.colors['darkGray-90']};
    border-radius: 62.5rem;
    ${boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 46px;
    transition: ${({ theme }) => theme.transitions.softInteraction};
    ${buttonHover}
    ${buttonActive}
  `,
};



export default function WhatsappButton({ contactViaWhatsapp }:WhatsappButtonProps) {
  return (
    <Styled.BorderGradientContainer>
      <Styled.Link
        href={contactViaWhatsapp}
        target='_blank'
        rel='noopener noreferrer'
      >
        <WhatsappIcon width={32} heigth={32} />
      </Styled.Link>
    </Styled.BorderGradientContainer>
  );
}
