import { css } from 'styled-components';

export const borderGradientStylesCSS = css`
  background: ${({ theme }) => theme.gradients.softLight};
  padding: .0625rem;
  border-radius: 1.5rem;
  position: relative;
`;
