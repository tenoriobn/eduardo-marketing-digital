import styled from 'styled-components';
import EmailIcon from 'public/icons/email.svg';
import { NewlestterProps } from '../newlestter.type';

const StyledCardNewsletter = styled.div`
  background-color: ${({ theme }) => theme.colors['darkGray-50']};
  backdrop-filter: blur(.5rem);
  border: .0625rem solid ${({ theme }) => theme.colors.charcoalGray};
  border-radius: 1.5rem;
  display: grid;
  gap: .75rem;
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const StyledCardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledCardParagraph = styled.p`
  font-size: .875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledForm = styled.form`
  border: .0625rem solid ${({ theme }) => theme.colors.charcoalGray};
  border-radius: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .5rem .5rem .5rem 1rem;

  @media (min-width: 992px) {
    max-width: 380px;
  }
`;

const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;

  gap: .375rem;
  width: 100%;

  svg {
    path {
      stroke: #959595;
    }
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.softGray};
  font-size: .875rem;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  background-color: rgba(164, 164, 164, 0.04);
  color: ${({ theme }) => theme.colors.softGray};
  font-size: .875rem;
  border-radius: 3rem;
  border: .0625rem solid ${({ theme }) => theme.colors.charcoalGray};
  padding: 0 .75rem;
  height: 38px;

  @media (min-width: 768px) {
    font-size: 1rem
  }
`;

export default function CardNewsletter({ content }: NewlestterProps) {
  return (
    <StyledCardNewsletter>
      <StyledCardTitle>{content.titleCard}</StyledCardTitle>
      <StyledCardParagraph>{content.cardParagraph}</StyledCardParagraph>

      <StyledForm action="">
        <StyledLabel htmlFor="input-email">
          <EmailIcon />

          <StyledInput
            id='input-email'
            type="email"
            placeholder={content.placeholder}
            required
          />
        </StyledLabel>

        <StyledButton>{content.buttonText}</StyledButton>
      </StyledForm>
    </StyledCardNewsletter>
  );
}
