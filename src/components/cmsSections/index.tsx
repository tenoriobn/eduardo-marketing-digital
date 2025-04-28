import AboutMeSection from './AboutMeSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';

export const cmsSections: { [key: string]: React.ComponentType<any> } = {
  HeaderSectionRecord: Header,
  HeroSectionRecord: HeroSection,
  ServicesSectionRecord: ServicesSection,
  AboutMeSectionRecord: AboutMeSection,
  TestimonialsSectionRecord: TestimonialsSection,
  ContactSectionRecord: ContactSection,
  FooterSectionRecord: Footer,
};
