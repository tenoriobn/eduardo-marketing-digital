import { CMSSectionData } from 'src/components/CMSSectionRender/cmsSectionRender.types';
import { NavLinksProps } from 'src/components/cmsSections/NavLinks/navLinks.type';

export interface CMSSection extends CMSSectionData {
  menuLinks?: NavLinksProps[];
}

export interface CMSPageContent {
  section: CMSSection[];
}

export interface CMSContent {
  cmsContent: {
    pageContent: CMSPageContent[];
  }
}
