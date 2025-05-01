import styled from 'styled-components';
import ServicesCard from './ServicesCard';
import { ServicesProps } from './services.type';
import { TitleSection } from 'src/styles';

const Styled = {
  Section: styled.section`
    display: grid;
  `,
};

export default function ServicesSection(props: ServicesProps) {
  return (
    <Styled.Section>
      <TitleSection>{props.titleSection}</TitleSection>

      <ServicesCard serviceCardContent={props.serviceCardContent} />
    </Styled.Section>
  );
}
