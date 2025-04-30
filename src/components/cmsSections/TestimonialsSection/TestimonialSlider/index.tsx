import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { TestimonialSliderProps } from './testimonialSlider';

const Styled = {
  Swiper: styled(Swiper)`
    width: 100%;
    height: 100%;
    cursor: grab;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 152px;
    }
  `,

  Testimonial: styled.p`
    font-size: .875rem;
    font-style: italic;
    font-weight: 300;
    text-align: center;
    max-width: 716px;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `,
};

export default function TestimonialSlider({ testimonials, thumbsSwiper }: TestimonialSliderProps) {
  return (
    <Styled.Swiper
      slidesPerView={1}
      spaceBetween={24}
      thumbs={{ swiper: thumbsSwiper }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      modules={[EffectFade, Autoplay, Navigation, Thumbs, Pagination]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <Styled.Testimonial>"{testimonial.testimonial}"</Styled.Testimonial>
        </SwiperSlide>
      ))}
    </Styled.Swiper>
  );
}
