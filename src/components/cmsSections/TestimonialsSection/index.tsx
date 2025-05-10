import styled from 'styled-components';
import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import AuthorCardSlider from './AuthorCardSlide';
import TestimonialSlider from './TestimonialSlider';
import TestimonialsPagination from './TestimonialsPagination';
import { TestimonialsProps } from './testimonials.type';
import { boxShadow, sectionMotionProps, TitleSection } from 'src/styles';
import { BorderGradientContainer } from 'src/styles/ui/BorderGradient';
import { motion } from 'motion/react';

const Styled = {
  Section: styled(motion.section)`
    display: flex;
    flex-direction: column;
  `,

  BorderGradientContainer: styled(BorderGradientContainer)`
    margin: 2rem 0 4rem 0;

    @media (min-width: 768px) {
      margin: 3rem 0 5rem 0;
    }
  `,

  SlidesWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    ${boxShadow};
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,
};

export default function TestimonialsSection(props: TestimonialsProps) {
  const [testimonialSwiper, setTestimonialSwiper] = useState<SwiperClass | null>(null);

  return (
    <Styled.Section
      id='depoimentos'
      {...sectionMotionProps}
    >
      <TitleSection>{props.titleSection}</TitleSection>

      <Styled.BorderGradientContainer>
        <Styled.SlidesWrapper>
          <AuthorCardSlider testimonials={props.testimonialsContent} onSwiper={setTestimonialSwiper} />
          <TestimonialSlider testimonials={props.testimonialsContent} thumbsSwiper={testimonialSwiper} />
          <TestimonialsPagination />
        </Styled.SlidesWrapper>
      </Styled.BorderGradientContainer>
    </Styled.Section>
  );
}
