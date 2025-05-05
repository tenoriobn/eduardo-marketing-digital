
import styled, { css } from 'styled-components';
import { focusFieldBorderBackground, innerShadow, focusField } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import MessageIcon from 'public/icons/message.svg';

const inputStyles = css`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.softGray};
  font-size: 0.875rem;
  font-weight: 500;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Styled = {
  BorderGradientContainer: styled(BorderGradientContainer)`
    width: 100%;
    transition: ${({ theme }) => theme.transitions.softInteraction};
    ${focusFieldBorderBackground}
  `,

  InputLabel: styled.label`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.75rem;
    cursor: text;
    background-color: ${({ theme }) => theme.colors.graphiteGray};
    border-radius: 3rem;
    padding: 1rem;
    width: 100%;
      transition: ${({ theme }) => theme.transitions.softInteraction};
    ${innerShadow};
    ${focusField}

    svg {
      path {
        transition: ${({ theme }) => theme.transitions.softInteraction};
        stroke: ${({ theme }) => theme.colors.grayStone};
      }
    }
  `,

  InputField: styled.input`
    ${inputStyles};
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: ${({ theme }) => theme.transitions.softInteraction};
  `,

  TextareaField: styled.textarea`
    ${inputStyles};
    resize: none;
    height: 120px;
    transition: ${({ theme }) => theme.transitions.softInteraction};
  `,
};

const TextareaLabel = styled(Styled.InputLabel)`
  border-radius: 1.5rem;
  transition: ${({ theme }) => theme.transitions.softInteraction};
`;

export default function FormField() {
  return (
    <>
      <Styled.BorderGradientContainer $borderRadius='3rem'>
        <Styled.InputLabel htmlFor="1">
          <UserIcon />
          <Styled.InputField id="1" type="text" placeholder="Nome" required />
        </Styled.InputLabel>
      </Styled.BorderGradientContainer>

      <Styled.BorderGradientContainer $borderRadius='3rem'>
        <Styled.InputLabel htmlFor="2" >
          <EmailIcon />
          <Styled.InputField id="2" type="email" placeholder="E-mail" required />
        </Styled.InputLabel>
      </Styled.BorderGradientContainer>

      <Styled.BorderGradientContainer $borderRadius='1.5rem'>
        <TextareaLabel htmlFor="3">
          <MessageIcon />
          <Styled.TextareaField id="3" placeholder="Mensagem" required />
        </TextareaLabel>
      </Styled.BorderGradientContainer>
    </>
  );
}
