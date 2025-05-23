import styled from 'styled-components';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { AuthorCardSlideProps } from './authorCardSlide.type';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { borderGradientStylesCSS, boxShadow } from 'src/styles';

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
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem 1rem;
  `,

  Avatar: styled(Image)`
    object-fit: cover;
    border-radius: 100%;
    width: 44px;
    height: 44px;
    ${boxShadow};
  `,

  Info: styled.div`
    display: grid;
    gap: 0.25rem;
  `,

  FullName: styled.h3`
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  Username: styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};

export default function AuthorCardSlider({ testimonials, onSwiper }: AuthorCardSlideProps) {
  return (
    <Styled.Swiper
      onSwiper={onSwiper}
      slidesPerView={1}
      breakpoints={{
        624: { slidesPerView: 2 },
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
              src={testimonial.userImage.url}
              alt={`Foto de ${testimonial.fullName}, depoente sobre os serviços de consultoria digital`}
              width={44}
              height={44}
            />
            <AuthorCard.Info>
              <AuthorCard.FullName title={testimonial.fullName}>
                {testimonial.fullName}
              </AuthorCard.FullName>

              <AuthorCard.Username title={testimonial.userName}>
                {testimonial.userName}
              </AuthorCard.Username>
            </AuthorCard.Info>
          </AuthorCard.Wrapper>
        </SwiperSlide>
      ))}
    </Styled.Swiper>
  );
}
