import styled from 'styled-components';
import WhatsappIcon from 'public/icons/whatsapp.svg';
import Link from 'next/link';

const StyledBorderWhatsapp = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 62.5rem;
  padding: .0625rem;
  width: max-content;
  height: max-content;

  @media (max-width: 767px) {
    align-self: end;
  }

  @media (min-width: 768px) {
    order: 2;
  }
`;

const StyledWhatsappContainer = styled(Link)`
  background-color: ${({ theme }) => theme.colors['darkGray-50']};
  border-radius: 62.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  width: 46px;
`;

export default function WhatsappButton({ contact }: {contact: string}) {
  return (
    <StyledBorderWhatsapp>
      <StyledWhatsappContainer href={contact} target='_blank'>
        <WhatsappIcon width={32} heigth={32} />
      </StyledWhatsappContainer>
    </StyledBorderWhatsapp>
  );
}
