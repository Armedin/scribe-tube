import { Box, Typography } from '@mui/material';
import ActionButton from './base/ActionButton';
import FancyInput from './base/FancyInput';
import ProductHuntBanner from './ProductHuntBanner';
import ringsBg from '../assets/img/rings-bg.svg';
import grid from '../assets/img/grid.svg';
import { useYoutubeForm } from '@/hooks/useYoutubeForm';
import BrowserPreview from './browser/BrowserPreview';

const IntroSection = () => {
  const { youtubeLink, handleInputChange, handleSubmit } = useYoutubeForm();

  return (
    <Box
      sx={
        {
          // backgroundImage: `url(${ringsBg.src})`,
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
          // backgroundPosition: '50% 50%',
          // backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABcSURBVHgB7c+xDYAwEMDAhwFA7D8siC2c6K5w75lNHH+u+3lncedswkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUrPNyAe6rQGPuifKNwAAAABJRU5ErkJggg==)`,
          // backgroundSize: 50,
        }
      }
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

      <BrowserPreview />
    </Box>
  );
};

export default IntroSection;
