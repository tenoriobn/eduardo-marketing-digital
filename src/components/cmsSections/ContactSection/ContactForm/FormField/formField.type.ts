import { InputIcon } from '../contactForm.type';

type FieldType = 'input' | 'textarea';

export interface FormFieldProps {
  id: string;
  placeholder: string;
  icon: InputIcon;
  type: FieldType;
  inputType: string;
}
