import { Dispatch, SetStateAction } from 'react';

export interface NavLinksProps {
  links: NavLinkContent[]
  isMenuActive: boolean;
  isMobile?: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>,
  ctaButton: NavLinkContent;
}

export interface NavLinkContent {
  id?: string;
  label: string;
  url: string;
}
