import styled, { css } from 'styled-components';
import { focusFieldBorderBackground, innerShadow, focusField } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import { useFormFieldValidation } from './useFormFieldValidation';
import { formFieldsSchema } from './formFieldsSchema';

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
  FieldWrapper: styled.div`
    width: 100%;
  `,

  BorderGradientContainer: styled(BorderGradientContainer)`
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
    ${focusField};

    svg path {
      transition: ${({ theme }) => theme.transitions.softInteraction};
      stroke: ${({ theme }) => theme.colors.grayStone};
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

  ErrorMessage: styled.p`
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.75rem;
    margin-top: 0.5rem;
    padding-left: 1rem;
  `,
};

const TextareaLabel = styled(Styled.InputLabel)`
  border-radius: 1.5rem;
`;

export default function FormField() {
  const { bindValidationToField, errors } = useFormFieldValidation();

  return (
    <>
      {formFieldsSchema.map(({ id, type, placeholder, icon, as, borderRadius, ...fieldAttributes }) => (
        <Styled.FieldWrapper key={id}>
          <Styled.BorderGradientContainer  $borderRadius={borderRadius}>
            {as === 'input' ? (
              <Styled.InputLabel htmlFor={id}>
                {icon}
                <Styled.InputField
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  required
                  {...bindValidationToField(id)}
                  {...fieldAttributes}
                />
              </Styled.InputLabel>
            ) : (
              <TextareaLabel htmlFor={id}>
                {icon}
                <Styled.TextareaField
                  id={id}
                  placeholder={placeholder}
                  required
                  {...bindValidationToField(id)}
                  {...fieldAttributes}
                />
              </TextareaLabel>
            )}
          </Styled.BorderGradientContainer>
          {errors[id] &&
            <Styled.ErrorMessage>{errors[id]}</Styled.ErrorMessage>
          }
        </Styled.FieldWrapper>
      ))}
    </>
  );
}
