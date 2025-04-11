import { Dispatch, SetStateAction } from 'react';
import { CTAButtonProps } from '../CTAButton/ctaButton.types';

export interface NavLinksProps {
  links: NavLink[]
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>,
  ctaButton: {
    url: string;
    label: string;
  };
}

export interface NavLink {
  id: string;
  label: string;
  url: string;
}
