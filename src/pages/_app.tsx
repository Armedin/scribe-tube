import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from '../mui/theme';

import '../style/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
