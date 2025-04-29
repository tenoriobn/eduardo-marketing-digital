export interface HeaderProps {
  menuLinks: NavLinkContent[];
  logo: {
    url: string
  };
  ctaButton: NavLinkContent;
}

export interface NavLinkContent {
  id?: string;
  label: string;
  url: string;
}
