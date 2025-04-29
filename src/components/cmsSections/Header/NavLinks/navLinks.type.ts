import { Dispatch, SetStateAction } from 'react';
import { NavLinkContent } from '../header.type';

export interface NavLinksProps {
  links: NavLinkContent[]
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>,
  ctaButton: NavLinkContent;
}
