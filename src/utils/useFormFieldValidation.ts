import { useRef, useState } from 'react';

export function useFormFieldValidation() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const refs = useRef<Record<string, HTMLInputElement | HTMLTextAreaElement | null>>({});

  const bindValidationToField = (fieldId: string) => ({
    ref: (fieldElement: HTMLInputElement | HTMLTextAreaElement | null) => {
      refs.current[fieldId] = fieldElement;
    },

    onInvalid: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();

      const field = e.currentTarget;
      const errorMessage = field.validationMessage || 'Campo inválido';
      setErrors((prev) => ({ ...prev, [fieldId]: errorMessage }));

      const invalidField = Object
        .values(refs.current)
        .find((field) => field && !field.validity.valid)
      ;

      if (invalidField) invalidField.focus();
    },

    onInput: () => {
      const field = refs.current[fieldId];
      if (field?.validity.valid) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[fieldId];
          return next;
        });
      }
    },
  });

  return { bindValidationToField, errors };
}
