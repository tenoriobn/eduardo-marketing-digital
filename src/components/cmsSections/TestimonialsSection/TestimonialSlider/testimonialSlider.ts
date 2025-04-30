import { TestimonialsBaseProps } from '../testimonials.type';
import { Swiper as SwiperClass } from 'swiper/types';

export interface TestimonialSliderProps extends TestimonialsBaseProps {
  thumbsSwiper: SwiperClass | null;
}
