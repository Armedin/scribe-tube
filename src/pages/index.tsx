import FadeInUpBox from '@/animations/FadeIn';
import Header from '@/components/Header';
import IntroSection from '@/components/IntroSection';
import OverviewSection from '@/components/OverviewSection';
import BrowserPreview from '@/components/browser/BrowserPreview';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <IntroSection />
      <FadeInUpBox index={3}>
        <BrowserPreview />
      </FadeInUpBox>
      <OverviewSection />
    </>
  );
}
