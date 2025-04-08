import type { AppProps } from 'next/app';
import GlobalStyles from 'src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from 'src/styles/Theme';
import { montserrat } from 'src/styles/Font';
import Head from 'next/head';

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
