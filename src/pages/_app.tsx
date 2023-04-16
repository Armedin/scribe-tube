import Layout from '@/components/Layout';
import Omnibar from '@/components/omnibar/Omnibar';
import { OmnibarProvider } from '@/components/omnibar/OmnibarContext';
import { ThemeProvider, createTheme } from '@mui/material';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { theme } from '../mui/theme';

import '../style/global.css';
import { PinnedVideosProvider } from '@/components/PinnedVideosContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="ScribeTube: The Ultimate Solution for YouTube Transcriptions"
        description="Get fast and accurate transcriptions for your YouTube videos with our easy-to-use web app. SribeTube's revolutionary technology makes transcription a breeze, saving you time and effort."
      />
      <ThemeProvider theme={createTheme(theme)}>
        <OmnibarProvider>
          <PinnedVideosProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PinnedVideosProvider>
        </OmnibarProvider>
      </ThemeProvider>
    </>
  );
}
