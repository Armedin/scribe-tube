import { Box } from '@mui/material';

const VideoIFrame = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56.25%',
      }}
    >
      <Box
        component="iframe"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        src="https://www.youtube.com/embed/o2DXt11SMNI"
        frameBorder={0}
      />
    </Box>
  );
};

export default VideoIFrame;
