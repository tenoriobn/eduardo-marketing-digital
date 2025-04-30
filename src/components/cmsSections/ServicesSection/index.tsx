import styled from 'styled-components';
import ServicesCard from './ServicesCard';
import { ServicesProps } from './services.type';

const Styled = {
  Section: styled.section`
    display: grid;
  `,

  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    justify-self: center;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  `,
};

export default function ServicesSection(props: ServicesProps) {
  return (
    <Styled.Section>
      <Styled.Title>{props.titleSection}</Styled.Title>

      <ServicesCard serviceCardContent={props.serviceCardContent} />
    </Styled.Section>
  );
}
