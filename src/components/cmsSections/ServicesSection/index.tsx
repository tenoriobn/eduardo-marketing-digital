import styled from 'styled-components';
import ServicesCard from './ServicesCard';
import { ServicesProps } from './services.type';
import { TitleSection } from 'src/styles';
import ServiceCardModal from './ServicesCard/ServiceCardModal';

const Styled = {
  Section: styled.section`
    display: grid;
  `,
};

export default function ServicesSection(props: ServicesProps) {
  return (
    <Styled.Section id='servicos'>
      <TitleSection>{props.titleSection}</TitleSection>

      <ServicesCard serviceCardContent={props.serviceCardContent} />
    </Styled.Section>
  );
}
