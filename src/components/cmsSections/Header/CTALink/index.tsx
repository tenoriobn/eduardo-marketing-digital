import Link from 'next/link';
import { CTALinkProps } from './ctaLink.types';
import styled from 'styled-components';
import { buttonActive, buttonHover } from 'src/styles';

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors['silverGray-4']};
  color: ${({ theme }) => theme.colors.silverGray};
  border-radius: ${({ theme }) => theme.borderRadius['rounded-4xl']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4375rem 1rem;
  transition: ${({ theme }) => theme.transitions.softInteraction};
  ${buttonHover};
  ${buttonActive}

  span {
    z-index: 20;
  }
`;

export default function CTALink({children, ...props}: CTALinkProps) {
  return (
    <StyledLink {...props} className="btn-moving-gradient btn-moving-gradient--orange">
      <span>
        {children}
      </span>
    </StyledLink>
  );
}
