import { css } from 'styled-components';

export const focusFieldBorder = css`
  &:focus-within,
  &:has(input:not(:placeholder-shown)),
  &:has(textarea:not(:placeholder-shown)) {
    border-color: ${({ theme }) => theme.colors['softGray-78']};
  }
`;

export const focusFieldBorderBackground = css`
  &:focus-within,
  &:has(input:not(:placeholder-shown)),
  &:has(textarea:not(:placeholder-shown)) {
    background: ${({ theme }) => theme.gradients.softGrayLight};
  }
`;

export const focusField = css`
  &:focus-within,
  &:has(input:not(:placeholder-shown)),
  &:has(textarea:not(:placeholder-shown)) {
    input {
      color: ${({ theme }) => theme.colors['softGray']};
    }

    svg {
      path {
        stroke: ${({ theme }) => theme.colors['softGray']};
      }
    }
  }
`;
