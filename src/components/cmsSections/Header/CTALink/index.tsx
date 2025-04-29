import Link from 'next/link';
import { CTALinkProps } from './ctaLink.types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors['silverGray-4']};
  color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius['rounded-4xl']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4375rem 1rem;
`;

export default function CTALink({children, ...props}: CTALinkProps) {
  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
}
