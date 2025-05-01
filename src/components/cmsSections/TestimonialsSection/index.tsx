import styled from 'styled-components';
import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import AuthorCardSlider from './AuthorCardSlide';
import TestimonialSlider from './TestimonialSlider';
import TestimonialsPagination from './TestimonialsPagination';
import testimonials from './testimonials.json';
import { TestimonialsProps } from './testimonials.type';
import { boxShadow, TitleSection } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';

const Styled = {
  Section: styled.section`
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
    <Styled.Section>
      <TitleSection>{props.titleSection}</TitleSection>

      <Styled.BorderGradientContainer>
        <Styled.SlidesWrapper>
          <AuthorCardSlider testimonials={testimonials} onSwiper={setTestimonialSwiper} />
          <TestimonialSlider testimonials={testimonials} thumbsSwiper={testimonialSwiper} />
          <TestimonialsPagination />
        </Styled.SlidesWrapper>
      </Styled.BorderGradientContainer>
    </Styled.Section>
  );
}
