import { css } from 'styled-components';

export const buttonActive = css`
  &:active {
    color: ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors['darkGray-90']};
  }
`;

export const linkActive = css`
  &:active {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
