export interface SocialContent {
  id: string;
  description: string;
  socialLinkContent: {
    id: string;
    socialContent: {
      label: string;
      url: string;
    };
    socialIcon: {
      url: string;
    };
  }[];
}

export interface InputContent {
  id: string;
  titleSocialForm: string;
  buttonText: string;
  inputFormContent: {
    id: string;
    placeholder: string;
    inputIcon: {
      url: string;
    };
  }[];
}

export interface ContactProps {
  title: string;
  contantContent: [SocialContent, InputContent];
}
