import { CTAButtonProps } from '../CTAButton/ctaButton.types';

export interface NavLinksProps {
  links: NavLink[]
  isMobile: boolean;
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
