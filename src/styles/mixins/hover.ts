import { css } from 'styled-components';

export const buttonHover = css`
  position: relative;
  overflow: hidden;

  &:after {
    background: ${({ theme }) => theme.colors['charcoalGray']};
    content: "";
    height: 155px;
    left: -75px;
    opacity: .2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: ${({ theme }) => theme.transitions.elegantEntrance};
    width: 50px;
    z-index: 1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors['softGray']};

    &:after {
      left: 120%;
      transition: ${({ theme }) => theme.transitions.elegantEntrance};
    }
  }
`;

export const linkHover = css`
  &:hover {
    color: ${({ theme }) => theme.colors['softGray']};
  }
`;
