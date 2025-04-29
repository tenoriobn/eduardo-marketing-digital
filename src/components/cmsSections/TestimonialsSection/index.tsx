import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { useState } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { BorderGradientContainer, borderGradientStylesCSS } from 'src/styles/BorderGradient';

const StyledTestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const Title = styled.h2`
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
`;

const SlideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1.5rem;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const AuthorCardSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  cursor: grab;

  .swiper-slide {
    ${borderGradientStylesCSS}
    opacity: 0.4;
  }

  .swiper-slide__card {
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;

    display: flex;
    justify-content: start;
    align-items: center;
    gap: .75rem;

    padding: 1.5rem 1rem;

    .card-avatar {
      border-radius: 100%;
      object-fit: cover;
    }

    .card-info__container {
      display: grid;
      gap: .25rem;

      .card-name {
        font-size: 1rem;
        font-weight: 700;
      }

      .card-username {
        font-size: .75rem;
        font-weight: 600;
      }

    }

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
`;

const TestimonialSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  cursor: grab;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 152px;

    .testimonial-paragraph {
      font-size: .875rem;
      font-style: italic;
      font-weight: 300;
      text-align: center;
      max-width: 716px;
      width: 100%;

      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

const PaginationWrapper = styled(BorderGradientContainer)`
  align-self: center;
`;

const PaginationContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;

  .swiper-button-prev, .swiper-button-next, .swiper-pagination {
    position: static;
    margin: 0!important;
  }

  .button-container {
    ${borderGradientStylesCSS}
  }

  .swiper-button-prev, .swiper-button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 5000px;
    width: 32px;
    height: 32px;

    &::after {
      color: ${({ theme }) => theme.colors.softGray};
      font-size: 12px;
      font-weight: 900;
    }
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
  }

  .swiper-pagination-bullets, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0;
  }

  .swiper-pagination-bullet {
    margin: 0;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.2;
    width: 16px;
    height: 16px;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.softGray};
    opacity: 1;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const testimonials = [
  {
    name: 'Camila Savarino',
    username: '@cahsavarino',
    avatar: '/thumbs/picture-2.jpg',
    testimonial: 'A consultoria transformou completamente a forma como gerencio meu negócio digital. Em poucos meses, vi um crescimento significativo nas minhas vendas e engajamento!'
  },
  {
    name: 'Camila Savarino',
    username: '@cahsavarino',
    avatar: '/thumbs/picture-2.jpg',
    testimonial: 'A consultoria transformou completamente a forma como gerencio meu negócio digital. Em poucos meses, vi um crescimento significativo nas minhas vendas e engajamento!'
  },
  {
    name: 'Camila Savarino',
    username: '@cahsavarino',
    avatar: '/thumbs/picture-2.jpg',
    testimonial: 'A consultoria transformou completamente a forma como gerencio meu negócio digital. Em poucos meses, vi um crescimento significativo nas minhas vendas e engajamento!'
  },
  {
    name: 'Camila Savarino',
    username: '@cahsavarino',
    avatar: '/thumbs/picture-2.jpg',
    testimonial: 'A consultoria transformou completamente a forma como gerencio meu negócio digital. Em poucos meses, vi um crescimento significativo nas minhas vendas e engajamento!'
  },
];

export default function TestimonialsSection() {
  const [testimonialSwiper, setTestimonialSwiper] = useState<SwiperClass | null>(null);

  return (
    <StyledTestimonialsSection>
      <Title>O que nossos clientes dizem</Title>

      <BorderGradientContainer>
        <SlideContentWrapper>
          <AuthorCardSwiper
            onSwiper={setTestimonialSwiper}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={24}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='swiper-slide__card'>
                  <Image
                    className='card-avatar'
                    src={testimonial.avatar}
                    alt={`Avatar da ${testimonial.name}`}
                    width={44}
                    height={44}
                  />

                  <div className='card-info__container'>
                    <h4 className='card-name'>{testimonial.name}</h4>
                    <p className='card-username'>{testimonial.username}</p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </AuthorCardSwiper>

          <TestimonialSwiper
            slidesPerView={1}
            spaceBetween={24}
            thumbs={{ swiper: testimonialSwiper }}
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
            loop={true}
            className="mySwiper2"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <p className='testimonial-paragraph'>"{testimonial.testimonial}"</p>
              </SwiperSlide>
            ))}
          </TestimonialSwiper>

          <PaginationWrapper>
            <PaginationContent>
              <div className='button-container'>
                <button className="swiper-button-prev"></button>
              </div>
              <div className="swiper-pagination"></div>
              <div className='button-container'>
                <button className="swiper-button-next"></button>
              </div>
            </PaginationContent>
          </PaginationWrapper>
        </SlideContentWrapper>
      </BorderGradientContainer>
    </StyledTestimonialsSection>
  );
}
