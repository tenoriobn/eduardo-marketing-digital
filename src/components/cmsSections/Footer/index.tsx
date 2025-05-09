import styled from 'styled-components';
import { FooterProps } from './footer.type';
import { sectionMotionProps, Text } from 'src/styles';
import { motion } from 'motion/react';

const Styled = {
  Footer: styled(motion.footer)`
    padding: 2rem 1rem;
  `,

  Copyright: styled(Text)`
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  `,
};

export default function Footer({ year, copyright}: FooterProps) {
  return (
    <Styled.Footer
      {...sectionMotionProps}
    >
      <Styled.Copyright>{year} {copyright}</Styled.Copyright>
    </Styled.Footer>
  );
}
