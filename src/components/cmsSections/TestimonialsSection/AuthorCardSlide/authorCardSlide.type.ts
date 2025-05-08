import { TestimonialsBaseProps } from '../testimonials.type';
import { Swiper as SwiperClass } from 'swiper/types';

export interface AuthorCardSlideProps extends TestimonialsBaseProps {
  onSwiper: (swiper: SwiperClass) => void;
}
