import styled, { css } from 'styled-components';

interface BorderGradientContainerProps {
  $borderRadius?: string;
  height?: string;
}

export const borderGradientStylesCSS = css`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 1.5rem;
  padding: .0625rem;
`;

export const BorderGradientContainer = styled.div<BorderGradientContainerProps>`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: ${({ $borderRadius }) => $borderRadius || '1.5rem'};
  padding: 0.0625rem;
  height: ${({ height }) => height || 'auto'};
  position: relative;


  box-shadow: -4px -4px 21px 0px rgba(255, 255, 255, 0.04);
  -webkit-box-shadow: -4px -4px 21px 0px rgba(255,255,255,0.04);
  -moz-box-shadow: -4px -4px 21px 0px rgba(255,255,255,0.04);
`;
