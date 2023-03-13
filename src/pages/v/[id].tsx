import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const VideoTranscript = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Box>{id}</Box>;
};

export default VideoTranscript;
