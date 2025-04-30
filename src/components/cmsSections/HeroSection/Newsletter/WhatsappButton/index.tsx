import Link from 'next/link';
import styled from 'styled-components';
import WhatsappIcon from 'public/icons/whatsapp.svg';
import { BorderGradientContainer } from 'src/styles/BorderGradient';
import { WhatsappButtonProps } from './whatsappButton.type';

const Styled = {
  BorderGradientContainer: styled(BorderGradientContainer)`
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 46px;
  `,
};



export default function WhatsappButton({ contactViaWhatsapp }:WhatsappButtonProps) {
  return (
    <Styled.BorderGradientContainer>
      <Styled.Link href={contactViaWhatsapp} target='_blank'>
        <WhatsappIcon width={32} heigth={32} />
      </Styled.Link>
    </Styled.BorderGradientContainer>
  );
}
