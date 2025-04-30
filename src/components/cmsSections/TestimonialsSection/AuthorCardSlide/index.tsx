import styled from 'styled-components';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { borderGradientStylesCSS } from 'src/styles/BorderGradient';
import { AuthorCardSlideProps } from './authorCardSlide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Styled = {
  Swiper: styled(Swiper)`
    width: 100%;
    height: 100%;
    cursor: grab;

    .swiper-slide {
      ${borderGradientStylesCSS}
      opacity: 0.4;
    }

    .swiper-slide-thumb-active {
      opacity: 1;
    }
  `,
};

const AuthorCard = {
  Wrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem 1rem;
  `,

  Avatar: styled(Image)`
    object-fit: cover;
    border-radius: 100%;
  `,

  Info: styled.div`
    display: grid;
    gap: 0.25rem;
  `,

  FullName: styled.h4`
    font-size: 1rem;
    font-weight: 700;
  `,

  Username: styled.p`
    font-size: 0.75rem;
    font-weight: 600;
  `,
};

export default function AuthorCardSlider({ testimonials, onSwiper }: AuthorCardSlideProps) {
  return (
    <Styled.Swiper
      onSwiper={onSwiper}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
      spaceBetween={24}
      freeMode
      watchSlidesProgress
      modules={[Navigation, Thumbs]}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <AuthorCard.Wrapper>
            <AuthorCard.Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              width={44}
              height={44}
            />
            <AuthorCard.Info>
              <AuthorCard.FullName>{testimonial.name}</AuthorCard.FullName>
              <AuthorCard.Username>{testimonial.username}</AuthorCard.Username>
            </AuthorCard.Info>
          </AuthorCard.Wrapper>
        </SwiperSlide>
      ))}
    </Styled.Swiper>
  );
}
