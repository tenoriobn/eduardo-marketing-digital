import { css } from 'styled-components';

export const innerShadow = css`
  box-shadow:
    inset 6px 6px 6px rgba(42, 42, 42, 0.48),
    inset -6px -6px 6px rgba(42, 42, 42, 0.48)
  ;

  -webkit-box-shadow:
    inset 6px 6px 6px rgba(42, 42, 42, 0.48),
    inset -6px -6px 6px rgba(42, 42, 42, 0.48)
  ;

  -moz-box-shadow:
    inset 6px 6px 6px rgba(42, 42, 42, 0.48),
    inset -6px -6px 6px rgba(42, 42, 42, 0.48)
  ;
`;
