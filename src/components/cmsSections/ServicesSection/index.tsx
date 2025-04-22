import styled from 'styled-components';
import ServicesCard from './ServicesCard';
import { ServicesProps } from './services.type';

const StyledServicesSection = styled.section`
  display: grid;
`;

const StyledTitleSection = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  justify-self: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default function ServicesSection(props: ServicesProps) {
  return (
    <StyledServicesSection>
      <StyledTitleSection>{props.titleSection}</StyledTitleSection>

      <ServicesCard serviceCardContent={props.serviceCardContent} />
    </StyledServicesSection>
  );
}
