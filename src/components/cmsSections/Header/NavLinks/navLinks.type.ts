export interface NavLinksProps {
  links: NavLinkContent[]
  isMenuActive: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
  ctaButton: NavLinkContent;
}

export interface NavLinkContent {
  id?: string;
  label: string;
  url: string;
}
