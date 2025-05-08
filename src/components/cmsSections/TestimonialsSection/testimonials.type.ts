export interface TestimonialsProps {
  titleSection: string;
  testimonialsContent: AuthorCardContent[];
}

export interface TestimonialsBaseProps {
  testimonials: AuthorCardContent[];
}

export interface AuthorCardContent {
  id: string;
  fullName: string;
  userName: string;
  testimonial: string;
  userImage: userImage
}

export interface userImage {
  url: string;
}
