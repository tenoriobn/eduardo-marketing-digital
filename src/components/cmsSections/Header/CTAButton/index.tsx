import Link from 'next/link';
import { CTAButtonProps } from './ctaButton.types';
import styled from 'styled-components';

const StyledLinkContainer = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 1000px;
  padding: .0625rem;
  position: relative;
`;

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors['silverGray-4']};
  color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius['rounded-4xl']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4375rem 1rem;
`;

export default function CTAButton({children, ...props}: CTAButtonProps) {
  return (
    <StyledLinkContainer>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </StyledLinkContainer>
  );
}
