import { InputContent } from './ContactForm/contactForm.type';
import { SocialContent } from './SocialLink/socialLink.type';
export interface ContactProps {
  title: string;
  contantContent: [SocialContent, InputContent];
}
