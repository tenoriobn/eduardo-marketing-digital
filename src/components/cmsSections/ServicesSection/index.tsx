import styled from 'styled-components';
import ServicesCard from './ServicesCard';
import { ServicesProps } from './services.type';
import { sectionMotionProps, TitleSection } from 'src/styles';
import { motion } from 'motion/react';

const Styled = {
  Section: styled(motion.section)`
    display: grid;
  `,
};

export default function ServicesSection(props: ServicesProps) {
  return (
    <Styled.Section
      id='servicos'
      {...sectionMotionProps}
    >
      <TitleSection>{props.titleSection}</TitleSection>

      <ServicesCard serviceCardContent={props.serviceCardContent} />
    </Styled.Section>
  );
}
