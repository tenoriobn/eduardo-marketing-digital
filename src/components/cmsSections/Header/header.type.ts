import { NavLinkContent } from './NavLinks/navLinks.type';

export interface HeaderProps {
  menuLinks: NavLinkContent[];
  logo: {
    url: string
  };
  ctaButton: NavLinkContent;
}
