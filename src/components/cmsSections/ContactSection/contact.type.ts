import { InputContent } from './ContactForm/FormField/formField.type';
import { SocialContent } from './SocialLink/socialLink.type';

// export interface InputContent {
//   id: string;
//   titleSocialForm: string;
//   buttonText: string;
//   inputFormContent: {
//     id: string;
//     placeholder: string;
//     inputIcon: {
//       url: string;
//     };
//   }[];
// }

export interface ContactProps {
  title: string;
  contantContent: [SocialContent, InputContent];
}
