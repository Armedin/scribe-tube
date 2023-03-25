import Layout from '@/components/Layout';
import Omnibar from '@/components/omnibar/Omnibar';
import { OmnibarProvider } from '@/components/omnibar/OmnibarContext';
import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from '../mui/theme';

import '../style/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <OmnibarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OmnibarProvider>
    </ThemeProvider>
  );
}
