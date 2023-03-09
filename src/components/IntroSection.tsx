import { Box, Button, Typography } from '@mui/material';
import ActionButton from './base/ActionButton';
import ProductHuntBanner from './ProductHuntBanner';

const IntroSection = () => {
  return (
    <Box
      sx={{
        py: 20,
        minHeight: '100vh',
        background: '#0b0d0f',
      }}
    >
      <Box sx={{ mb: 2, mx: 1.5, display: 'flex', justifyContent: 'center' }}>
        <ProductHuntBanner />
      </Box>
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2,
          backgroundImage:
            'linear-gradient(to right bottom, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0.38) 100%)',
        }}
      >
        The best way to get free transcripts <br /> for any YouTube Video
      </Typography>

      <Typography
        sx={{
          color: '#a1a4aa',
          textAlign: 'center',
          maxWidth: '48rem',
          mx: 'auto',
          fontWeight: 300,
          fontSize: 21,
          mb: 6,
        }}
      >
        Simply paste the video link and get a transcript instantly. Edit, save,
        or download the transcript as a text file.
      </Typography>

      <Box sx={{ maxWidth: 620, mx: 'auto', display: 'flex', gap: 2 }}>
        <Box
          sx={{
            width: '100%',
            borderRadius: '10px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            boxShadow:
              'rgb(0 0 0 / 25%) 0px 4px 4px 0px, rgb(255 255 255 / 32%) 0px 1px 0px 0px inset',
            background: 'linear-gradient(to bottom, #0e0f14 10%, #1e1e23 100%)',
            height: 56,
          }}
        >
          <Typography sx={{ color: 'rgb(124 124 124)', fontSize: 16 }}>
            https://www.youtube.com/watch?v=696cmfqz0t8
          </Typography>
        </Box>
        <ActionButton>Transcribe video</ActionButton>
      </Box>

      <Box
        sx={{
          mt: 18,
          width: 1200,
          py: 3,
          mx: 'auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          img: { width: '94%', position: 'relative' },
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            inset: 0,
            // WebkitMaskImage:
            //   'radial-gradient(circle at center center, black, transparent 80%)',
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(to bottom,#b4b4b4,transparent 80%)',
              // background:
              //   'radial-gradient(circle at bottom center,#7877C6,transparent 70%)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.3,
              filter: 'blur(40px)',
            }}
          />
        </Box>

        <img src="https://framerusercontent.com/images/H3bidclajEmo5RqMfI9zJ8dDG0.png" />
      </Box>
    </Box>
  );
};

export default IntroSection;
