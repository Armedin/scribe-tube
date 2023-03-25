import { VideoDetails } from '@/interfaces/video';
import { Box, Stack, Typography } from '@mui/material';

const ChannelDetails = ({ videoDetails }: { videoDetails: VideoDetails }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <Box
        component="img"
        src={videoDetails.thumbnail.thumbnails[0]?.url}
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <Stack sx={{ ml: 1.75 }}>
        <Typography variant="h6" sx={{ fontSize: 16 }}>
          {videoDetails.author}
        </Typography>
        <Typography sx={{ fontSize: 14, color: 'var(--colors-gray11)' }}>
          {videoDetails.title}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ChannelDetails;
