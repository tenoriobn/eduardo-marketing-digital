import styled from 'styled-components';
import { FooterProps } from './footer.type';

const StyledFooter = styled.footer`
  padding: 2rem 1rem;
`;

const StyledCopyright = styled.p`
  font-size: .875rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Footer(props: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledCopyright>{year} {props.copyright}</StyledCopyright>
    </StyledFooter>
  );
}
