import { InputContent } from '../contact.type';

export interface ContactFormProps {
  inputsContent: InputContent;
}

export interface InputComponentProps {
  component: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>;
}
