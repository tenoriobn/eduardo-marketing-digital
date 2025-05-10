/* eslint-disable no-console */
export function useSubmitForm() {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    // console.log('Resposta da API:', response.json());
  };
}
