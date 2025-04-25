import Image from 'next/image';
import styled from 'styled-components';
import { ContactFormProps, InputComponentProps } from './contactForm.type';

const StyledFormContainer = styled.form`
  display: grid;
  gap: 1.5rem;
  width: 100%;
`;

const StyledTitleForm = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

const StyledInputsContainer = styled.div`
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

const StyledLabel = styled.label`
  background-color: #363636;
  display: grid;
  grid-template-columns: auto 1fr;
  border-radius: 3rem;
  padding: 1rem;
  gap: .75rem;
  width: 100%;
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

const StyledLabelTextarea = styled(StyledLabel)`
  border-radius: 1.5rem;
`;

const StyledBorderTextarea = styled(StyledBorderLabel)`
  border-radius: 1.5rem;

`;

const StyledTextarea = styled.textarea`
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

const StyledButtonContainer = styled.div`
  justify-self: end;
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 3rem;
  padding: .0625rem;
  width: 100%;
  max-width: 120px;

  @media (min-width: 768px) {
    max-width: 156px;
  }
`;

const StyledButton = styled.button`
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
    <StyledFormContainer>
      <StyledTitleForm>{inputsContent.titleSocialForm}</StyledTitleForm>

      <StyledInputsContainer>
        {inputsContent.inputFormContent.map((inputContent) => {
          const isTextarea = inputContent.placeholder.toLowerCase() === 'mensagem';

          const BorderComponent = isTextarea ? StyledBorderTextarea : StyledBorderLabel;
          const LabelComponent = isTextarea ? StyledLabelTextarea : StyledLabel;
          const InputComponent: InputComponentProps = {
            component: isTextarea ? StyledTextarea : StyledInput,
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
      </StyledInputsContainer>

      <StyledButtonContainer>
        <StyledButton>{inputsContent.buttonText}</StyledButton>
      </StyledButtonContainer>
    </StyledFormContainer>
  );
}
