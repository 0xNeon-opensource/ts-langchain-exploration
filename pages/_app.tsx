import PrimaryLayout from 'components/layouts/PrimaryLayout';
import { ThemeProvider } from 'next-theme';
import type { AppProps } from 'next/app';
import GlobalStylesProvider from 'providers/GlobalStylesProvider';
import 'styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <GlobalStylesProvider>
        <PrimaryLayout>{getLayout(<Component {...pageProps} />)}</PrimaryLayout>
      </GlobalStylesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
