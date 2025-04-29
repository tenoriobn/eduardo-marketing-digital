import Link from 'next/link';
import styled from 'styled-components';
import WhatsappIcon from 'public/icons/whatsapp.svg';
import { BorderGradientContainer } from 'src/styles/BorderGradient';

const StyledWhatsappBorderGradient = styled(BorderGradientContainer)`
  @media (max-width: 767px) {
    align-self: end;
  }

  @media (min-width: 768px) {
    order: 2;
  }
`;

const WhatsappLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors['darkGray-90']};
  border-radius: 62.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  width: 46px;
`;

export default function WhatsappButton({ contact }: {contact: string}) {
  return (
    <StyledWhatsappBorderGradient>
      <WhatsappLink href={contact} target='_blank'>
        <WhatsappIcon width={32} heigth={32} />
      </WhatsappLink>
    </StyledWhatsappBorderGradient>
  );
}
