import styled from 'styled-components';
import { BorderGradientContainerProps } from './borderGradient.type';
import { borderGradientStylesCSS } from 'src/styles';

export const BorderGradientContainer = styled.div<BorderGradientContainerProps>`
  ${borderGradientStylesCSS}

  border-radius: ${({ $borderRadius }) => $borderRadius || '1.5rem'};
  height: ${({ height }) => height || 'auto'};
`;
