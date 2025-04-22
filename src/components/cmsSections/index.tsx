import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';

export const cmsSections: { [key: string]: React.ComponentType<any> } = {
  HeaderSectionRecord: Header,
  HeroSectionRecord: HeroSection,
  ServicesSectionRecord: ServicesSection
};
