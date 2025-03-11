export async function getStaticProps() {
  const year = new Date().getFullYear();

  const content = {
    text: 'Hello, Next.js!',
    year
  };

  return {
    props: { content },
  };
}

export default function Page({ content }: { content?: { text: string; year: number } }) {
  if (!content) return <h1>Carregando...</h1>;
  return <h1>{content.text} {content.year}</h1>;
}
