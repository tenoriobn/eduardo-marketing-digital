import { NavLink } from './NavLinks/navLinks.type';

export interface HeaderProps {
  menuLinks: NavLink[];
  logo: {
    url: string
  };
  ctaButton: CTAButtonComponent
}

export interface CTAButtonComponent {
  label: string;
  url: string
}
