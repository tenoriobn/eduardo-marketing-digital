import { CMSSectionData } from 'src/components/CMSSectionRender/cmsSectionRender.types';
import { MenuLinkProps } from 'src/components/cmsSections/MenuLinks/menuLink.type';

export interface CMSSection extends CMSSectionData {
  menuLinks?: MenuLinkProps[];
}

export interface CMSPageContent {
  section: CMSSection[];
}

export interface CMSContent {
  cmsContent: {
    pageContent: CMSPageContent[];
  }
}
