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



export default function Footer(props: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <Styled.Footer
      {...sectionMotionProps}
    >
      <Styled.Copyright>{year} {props.copyright}</Styled.Copyright>
    </Styled.Footer>
  );
}
