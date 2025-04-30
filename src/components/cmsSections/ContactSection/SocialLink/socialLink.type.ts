export interface SocialLinkProps {
  socialContent: SocialContent;
}
export interface SocialContent {
  id: string;
  description: string;
  socialLinkContent: SocialLinkItem[];
}

interface SocialLinkItem {
  id: string;
  socialContent: LinkInfo;
  socialIcon: SocialIcon

}

interface LinkInfo {
  label: string;
  url: string;
}

interface SocialIcon {
  url: string;
}
