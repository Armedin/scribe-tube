import Skeleton from '@/components/base/Skeleton';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NormalTranscript from '@/components/transcript/NormalTranscript';
import { Video } from '@/interfaces/video';

const VideoTranscript = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState<Video>();

  useEffect(() => {
    if (!id) {
      return;
    }

    setLoading(true);
    axios
      .post('http://localhost:5000/transcribe', { id })
      .then(res => {
        setVideoData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const thumbnail =
    videoData?.videoDetails.thumbnail.thumbnails[
      videoData.videoDetails.thumbnail.thumbnails.length - 1
    ];

  return (
    <Box
      sx={{
        py: 14,
        minHeight: '100vh',
        background: '#0b0d0f',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', gap: 8 }}>
          <Box sx={{ flexShrink: 0 }}>
            {loading && (
              <>
                <Skeleton height={340} width={600} />
                <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
                  <Skeleton variant="pill" width={80} height={20} />
                  <Skeleton variant="pill" width={80} height={20} />
                  <Skeleton variant="pill" width={80} height={20} />
                </Box>
              </>
            )}
            {!loading && (
              <Box
                sx={{
                  width: 600,
                  height: 340,
                  img: { width: '100%', height: '100%', objectFit: 'cover' },
                }}
              >
                <img src={thumbnail?.url} />
              </Box>
            )}
          </Box>

          <Box sx={{ flex: '1 1 100%' }}>
            {loading && (
              <>
                <Skeleton width="100%" height={36} />
                <Stack sx={{ mt: 4, gap: 1 }}>
                  <Skeleton width="70%" height={14} />
                  <Skeleton width="90%" height={14} />
                  <Skeleton width="60%" height={14} />
                </Stack>
              </>
            )}
            {!loading && videoData && (
              <>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: 18,
                    mb: 1,
                  }}
                >
                  Video Transcript
                </Typography>
                <NormalTranscript subs={videoData.subs} />
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoTranscript;
