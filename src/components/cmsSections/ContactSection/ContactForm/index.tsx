import styled from 'styled-components';
import { ContactFormProps } from './contactForm.type';
import FormField from './FormField';
import { boxShadow, buttonActive, buttonHover, CardTitle } from 'src/styles';
import { BorderGradientContainer } from 'src/styles/ui/BorderGradient';
import { useSubmitForm } from 'src/utils/useSubmitForm';

const Styled = {
  Form: styled.form`
    display: grid;
    gap: 1.5rem;
    width: 100%;
  `,

  TitleForm: styled(CardTitle)`
    text-align: center;

    @media (min-width: 992px) {
      text-align: left;
    }
  `,



  ButtonWrapper: styled(BorderGradientContainer)`
    justify-self: end;
    width: 100%;
    max-width: 120px;

    @media (min-width: 768px) {
      max-width: 156px;
    }
  `,

  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.silverGray};
    font-size: .875rem;
    font-weight: 500;
    border-radius: 3rem;
    padding: .75rem 1.5rem;
    width: 100%;
    transition: ${({ theme }) => theme.transitions.softInteraction};

    ${boxShadow};
    ${buttonHover};
    ${buttonActive}

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `,
};

export default function ContactForm({ inputsContent }: ContactFormProps) {
  const handleSubmit = useSubmitForm();

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.TitleForm>{inputsContent.titleSocialForm}</Styled.TitleForm>

      <FormField />

      <Styled.ButtonWrapper $borderRadius='3rem'>
        <Styled.Button>
          <span>
            {inputsContent.buttonText}
          </span>
        </Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
}
