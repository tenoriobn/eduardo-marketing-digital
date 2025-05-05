import styled from 'styled-components';
import { ContactFormProps } from './contactForm.type';
import FormField from './FormField';
import { boxShadow, buttonActive, buttonHover, CardTitle } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';

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

  InputsContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  BorderGradientContainer: styled(BorderGradientContainer)`
    width: 100%;
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
  return (
    <Styled.Form>
      <Styled.TitleForm>{inputsContent.titleSocialForm}</Styled.TitleForm>

      <Styled.InputsContentWrapper>
        {inputsContent.inputFormContent.map((inputContent) => (
          <Styled.BorderGradientContainer
            key={inputContent.id}
            $borderRadius={inputContent.placeholder.toLowerCase() === 'mensagem' ? '1.5rem' : '3rem'}
          >
            <FormField
              id={inputContent.placeholder}
              placeholder={inputContent.placeholder}
              icon={inputContent.inputIcon}
              type={inputContent.placeholder.toLowerCase() === 'mensagem' ? 'textarea' : 'input'}
              inputType={inputContent.placeholder.toLowerCase() === 'e-mail' ? 'email' : 'text'}
            />
          </Styled.BorderGradientContainer>
        ))}
      </Styled.InputsContentWrapper>

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
