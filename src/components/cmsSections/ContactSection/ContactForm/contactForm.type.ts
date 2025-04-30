export interface ContactFormProps {
  inputsContent: InputContent;
}

export interface InputContent {
  id: string;
  titleSocialForm: string;
  buttonText: string;
  inputFormContent: InputItem[];
}

interface InputItem {
  id: string;
  placeholder: string;
  inputIcon: InputIcon;
}

export interface InputIcon {
  url: string;
}
