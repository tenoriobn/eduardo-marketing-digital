export interface TestimonialsProps {
  titleSection: string;
}

export interface TestimonialsBaseProps {
  testimonials: TestimonialContent[];
}

interface TestimonialContent {
  id: string,
  name: string;
  username: string;
  avatar: string;
  testimonial: string;
}
