import { Variants } from 'motion/react';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      easing: [0.6, 0.05, -0.01, 0.25],
    },
  },
};

export const sectionMotionProps = {
  variants: fadeInUp,
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: .075 },
};
