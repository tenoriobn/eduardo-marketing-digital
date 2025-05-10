import styled from 'styled-components';
import { ErrorMessageProps } from './errorMessage.type';

const Styled = {
  ErrorMessage: styled.p`
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.75rem;
    margin-top: 0.5rem;
    padding-left: 1rem;
  `,
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <Styled.ErrorMessage>
      {children}
    </Styled.ErrorMessage>
  );
}
