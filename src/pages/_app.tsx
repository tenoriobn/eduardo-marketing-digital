import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { GlobalStyles, montserrat, Theme } from 'src/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eduardo - Consultoria Digital</title>
      </Head>

      <ThemeProvider theme={{...Theme, font: { montserrat: montserrat.style.fontFamily }}}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
