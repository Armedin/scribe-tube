import { VideoDetails } from '@/interfaces/video';
import { Box, Stack, Typography } from '@mui/material';

const PreviewChannelDetails = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <Box
        component="img"
        src="https://i.ytimg.com/vi/arj7oStGLkU/maxresdefault.jpg"
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <Stack sx={{ ml: 1.75 }}>
        <Typography variant="h6" sx={{ fontSize: 16 }}>
          TED
        </Typography>
        <Typography sx={{ fontSize: 14, color: 'var(--colors-gray11)' }}>
          Tim Urban: Inside the mind of a master procrastinator | TED
        </Typography>
      </Stack>
    </Box>
  );
};

export default PreviewChannelDetails;
