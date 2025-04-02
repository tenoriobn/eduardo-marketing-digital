import { NavLink } from '../NavLinks/navLinks.type';

export interface HeaderProps {
  menuLinks: NavLink[];
  logo: {
    url: string
  };
  ctaButton: CTAButtonProps
}

export interface CTAButtonProps {
  label: string;
  url: string
}
