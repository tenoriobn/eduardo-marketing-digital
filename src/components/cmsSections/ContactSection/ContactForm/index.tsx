import Image from 'next/image';
import styled from 'styled-components';
import { ContactFormProps, InputComponentProps } from './contactForm.type';
import { BorderGradientContainer } from 'src/styles/BorderGradient';

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  width: 100%;
`;

const TitleForm = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const StyledBorderLabel = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 3rem;
  padding: .0625rem;
  height: 100%;
  width: 100%;
`;

const Label = styled.label`
  background-color: ${({ theme }) => theme.colors.graphiteGray};
  display: grid;
  grid-template-columns: auto 1fr;
  border-radius: 3rem;
  padding: 1rem;
  gap: .75rem;
  width: 100%;
`;

const Input = styled.input`
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

const LabelTextarea = styled(Label)`
  border-radius: 1.5rem;
`;

const BorderTextarea = styled(StyledBorderLabel)`
  border-radius: 1.5rem;
`;

const Textarea = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.softGray};
  font-size: .875rem;
  font-weight: 500;
  resize: none;
  width: 100%;
  height: 120px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled(BorderGradientContainer)`
  justify-self: end;
  width: 100%;
  max-width: 120px;

  @media (min-width: 768px) {
    max-width: 156px;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.softGray};
  font-size: .875rem;
  font-weight: 500;
  border-radius: 3rem;
  padding: .75rem 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default function ContactForm({ inputsContent }: ContactFormProps) {
  return (
    <Form>
      <TitleForm>{inputsContent.titleSocialForm}</TitleForm>

      <InputsWrapper>
        {inputsContent.inputFormContent.map((inputContent) => {
          const isTextarea = inputContent.placeholder.toLowerCase() === 'mensagem';

          const BorderComponent = isTextarea ? BorderTextarea : StyledBorderLabel;
          const LabelComponent = isTextarea ? LabelTextarea : Label;
          const InputComponent: InputComponentProps = {
            component: isTextarea ? Textarea : Input,
          };

          return (
            <BorderComponent key={inputContent.id}>
              <LabelComponent htmlFor={inputContent.placeholder}>
                <Image
                  src={inputContent.inputIcon.url}
                  alt={inputContent.placeholder}
                  width={24}
                  height={18}
                />

                <InputComponent.component
                  id={inputContent.placeholder}
                  type={isTextarea ? undefined : inputContent.placeholder === 'E-mail' ? 'email' : 'text'}
                  placeholder={inputContent.placeholder}
                  required
                />
              </LabelComponent>
            </BorderComponent>
          );
        })}
      </InputsWrapper>

      <ButtonWrapper $borderRadius='3rem'>
        <Button>{inputsContent.buttonText}</Button>
      </ButtonWrapper>
    </Form>
  );
}
