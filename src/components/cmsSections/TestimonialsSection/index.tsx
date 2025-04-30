import styled from 'styled-components';
import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { BorderGradientContainer } from 'src/styles/BorderGradient';
import AuthorCardSlider from './AuthorCardSlide';
import TestimonialSlider from './TestimonialSlider';
import TestimonialsPagination from './TestimonialsPagination';
import testimonials from './testimonials.json';
import { TestimonialsProps } from './testimonials.type';

const Styled = {
  Section: styled.section`
    display: flex;
    flex-direction: column;

    margin-bottom: 4rem;

    @media (min-width: 768px) {
      margin-bottom: 5rem;
    }
  `,

  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    max-width: 214px;
    align-self: center;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      font-size: 2rem;
      margin-bottom: 3rem;
      max-width: 100%;
    }
  `,

  SlidesWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,
};

export default function TestimonialsSection(props: TestimonialsProps) {
  const [testimonialSwiper, setTestimonialSwiper] = useState<SwiperClass | null>(null);

  return (
    <Styled.Section>
      <Styled.Title>{props.titleSection}</Styled.Title>

      <BorderGradientContainer>
        <Styled.SlidesWrapper>
          <AuthorCardSlider testimonials={testimonials} onSwiper={setTestimonialSwiper} />
          <TestimonialSlider testimonials={testimonials} thumbsSwiper={testimonialSwiper} />
          <TestimonialsPagination />
        </Styled.SlidesWrapper>
      </BorderGradientContainer>
    </Styled.Section>
  );
}
