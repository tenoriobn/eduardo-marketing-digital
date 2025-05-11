
import { AboutMeProps } from 'components/cmsSections/AboutMeSection/aboutMe.type';
import { ContactProps } from 'components/cmsSections/ContactSection/contact.type';
import { FooterProps, YearProps } from 'components/cmsSections/Footer/footer.type';
import { HeaderProps } from 'components/cmsSections/Header/header.type';
import { HeroSectionProps } from 'components/cmsSections/HeroSection/heroSection.type';
import { ServicesProps } from 'components/cmsSections/ServicesSection/services.type';
import { TestimonialsProps } from 'components/cmsSections/TestimonialsSection/testimonials.type';
import { SEOItems } from 'components/DefaultSEO/defaultSEO.type';

export interface CMSContentProps extends YearProps {
  cmsContent: CMSContent
}

export interface CMSContent {
  homePage: HomePageContent
}

export interface HomePageContent {
  pageContent: PageContent[];
}

export interface PageContent {
  section: SectionContent[];
}

export type SectionContent =
  SEOItems &
  HeaderProps &
  HeroSectionProps &
  ServicesProps &
  AboutMeProps &
  TestimonialsProps &
  ContactProps &
  FooterProps
;
