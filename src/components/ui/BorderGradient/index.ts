import styled from 'styled-components';
import { BorderGradientContainerProps } from './borderGradient.type';
import { borderGradientStylesCSS } from 'src/styles';

export const BorderGradientContainer = styled.div<BorderGradientContainerProps>`
  ${borderGradientStylesCSS}

  border-radius: ${({ $borderRadius }) => $borderRadius || '1.5rem'};
  height: ${({ height }) => height || 'auto'};

  box-shadow: -4px -4px 21px 0px rgba(255, 255, 255, 0.04);
  -webkit-box-shadow: -4px -4px 21px 0px rgba(255,255,255,0.04);
  -moz-box-shadow: -4px -4px 21px 0px rgba(255,255,255,0.04);
`;
