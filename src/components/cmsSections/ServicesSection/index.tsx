import styled from 'styled-components';
import ServicesCard from './ServicesCard';
import { ServicesProps } from './services.type';

const StyledServicesSection = styled.section`
  display: grid;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  justify-self: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default function ServicesSection(props: ServicesProps) {
  return (
    <StyledServicesSection>
      <Title>{props.titleSection}</Title>

      <ServicesCard serviceCardContent={props.serviceCardContent} />
    </StyledServicesSection>
  );
}
