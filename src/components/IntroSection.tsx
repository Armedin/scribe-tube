import { Box, Typography } from '@mui/material';
import ActionButton from './base/ActionButton';
import FancyInput from './base/FancyInput';
import ProductHuntBanner from './ProductHuntBanner';
import ringsBg from '../assets/img/rings-bg.svg';
import grid from '../assets/img/grid.svg';
import { useYoutubeForm } from '@/hooks/useYoutubeForm';

const IntroSection = () => {
  const { youtubeLink, handleInputChange, handleSubmit } = useYoutubeForm();

  return (
    <Box
      sx={{
        // backgroundImage: `url(${ringsBg.src})`,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
          mb: 4,
          backgroundImage:
            'linear-gradient(to right bottom, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0.38) 100%)',
        }}
      >
        The best way to get free transcripts <br /> for any YouTube Video
      </Typography>

      <Typography
        sx={{
          color: 'var(--colors-gray11)',
          textAlign: 'center',
          maxWidth: '48rem',
          mx: 'auto',
          fontWeight: 300,
          fontSize: 22,
          mb: 6,
        }}
      >
        Simply paste the video link and get a transcript instantly. Edit, save,
        or download the transcript as a text file.
      </Typography>

      <Box
        component="form"
        sx={{ maxWidth: 720, mx: 'auto', display: 'flex', gap: 2 }}
        onSubmit={handleSubmit}
      >
        <FancyInput
          placeholder="www.youtube.com/watch?v=xxxxxxxx"
          onChange={handleInputChange}
          value={youtubeLink}
        />
        <ActionButton type="submit">Transcribe video</ActionButton>
      </Box>

      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default IntroSection;
