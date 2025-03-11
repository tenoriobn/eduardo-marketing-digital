import type { AppProps } from 'next/app';
import GlobalStyles from 'src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from 'src/styles/Theme';
import { montserrat } from 'src/styles/Font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
