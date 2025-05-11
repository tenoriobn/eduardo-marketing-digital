import { NavLinkContent } from './NavLinks/navLinks.type';

export interface HeaderProps {
  id: string;
  menuLinks: NavLinkContent[];
  logo: {
    url: string
  };
  ctaButton: NavLinkContent;
}
