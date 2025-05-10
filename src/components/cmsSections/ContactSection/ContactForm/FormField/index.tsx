import styled, { css } from 'styled-components';
import { focusFieldBorderBackground, innerShadow, focusField } from 'src/styles';
import { BorderGradientContainer } from 'src/styles/ui/BorderGradient';
import { useFormFieldValidation } from 'src/utils/useFormFieldValidation';
import { formFieldsSchema } from './formFieldsSchema';
import ErrorMessage from 'components/ErrorMessage';

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

  FieldWrapper: styled.div`
    width: 100%;
  `,

  BorderGradientContainer: styled(BorderGradientContainer)`
    transition: ${({ theme }) => theme.transitions.softInteraction};
    ${focusFieldBorderBackground}
  `,

  InputLabel: styled.label`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    gap: 0.75rem;
    cursor: text;
    background-color: ${({ theme }) => theme.colors.graphiteGray};
    border-radius: 3rem;
    padding: 0 1rem;
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
    padding: 1rem 0;
    height: 52px;
  `,

  TextareaField: styled.textarea`
    ${inputStyles};
    resize: none;
    height: 120px;
    transition: ${({ theme }) => theme.transitions.softInteraction};
  `,
};

const TextareaLabel = styled(Styled.InputLabel)`
  grid-template-columns: 1fr;
  border-radius: 1.5rem;
  padding: 1rem;
`;

export default function FormField() {
  const { bindValidationToField, errors } = useFormFieldValidation();

  return (
    <Styled.InputsContentWrapper>
      {formFieldsSchema.map(({ id, type, placeholder, icon, as, borderRadius, ...fieldAttributes }) => (
        <Styled.FieldWrapper key={id}>
          <Styled.BorderGradientContainer  $borderRadius={borderRadius}>
            {as === 'input' ? (
              <Styled.InputLabel htmlFor={id}>
                {icon}
                <Styled.InputField
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  required
                  {...bindValidationToField(id)}
                  {...fieldAttributes}
                />
              </Styled.InputLabel>
            ) : (
              <TextareaLabel htmlFor={id}>
                <Styled.TextareaField
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  required
                  {...bindValidationToField(id)}
                  {...fieldAttributes}
                />
              </TextareaLabel>
            )}
          </Styled.BorderGradientContainer>
          {errors[id] &&
            <ErrorMessage>{errors[id]}</ErrorMessage>
          }
        </Styled.FieldWrapper>
      ))}
    </Styled.InputsContentWrapper>
  );
}
