
import Image from 'next/image';
import { FormFieldProps } from './formField.type';
import styled, { css } from 'styled-components';
import { innerShadow } from 'src/styles';

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
  Label: styled.label<{ $isTextarea: boolean }>`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.75rem;
    cursor: text;
    background-color: ${({ theme }) => theme.colors.graphiteGray};
    border-radius: ${({ $isTextarea }) => ($isTextarea ? '1.5rem' : '3rem')};
    ${innerShadow};
    padding: 1rem;
    width: 100%;
  `,

  InputField: styled.input`
    ${inputStyles};
    white-space: nowrap;
    text-overflow: ellipsis;
  `,

  TextareaField: styled.textarea`
    ${inputStyles};
    resize: none;
    height: 120px;
  `,
};

export default function FormField({ id, placeholder, icon, type, inputType }: FormFieldProps) {
  return (
    <Styled.Label htmlFor={id} $isTextarea={type === 'textarea'}>
      <Image src={icon.url} alt={placeholder} width={24} height={18} />

      {type === 'textarea' ? (
        <Styled.TextareaField id={id} placeholder={placeholder} required />
      ) : (
        <Styled.InputField id={id} type={inputType} placeholder={placeholder} required />
      )}
    </Styled.Label>
  );
}
