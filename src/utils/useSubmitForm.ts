import { showError, showSuccess } from './toast';

/* eslint-disable no-console */
export function useSubmitForm() {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log('Dados do formulário:', data);

      // const response = await fetch('/api/submit', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   showError('Falha ao enviar as informações. Tente novamente.');
      //   return;
      // }

      e.currentTarget.reset();
      showSuccess('Os dados foram enviados com sucesso!');
    } catch (error: any) {
      showError('Ocorreu um erro ao enviar o formulário. Tente novamente.');
      // console.error('Erro ao enviar o formulário:', error);
    }
  };
}
