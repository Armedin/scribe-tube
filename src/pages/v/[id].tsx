import Skeleton from '@/components/base/Skeleton';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import NormalTranscript from '@/components/transcript/NormalTranscript';
import { Video } from '@/interfaces/video';
import { formatCount } from '@/utils/format-count';
import LabelPill from '@/components/base/LabelPill';
import { removeNewLines, wordsCount } from '@/utils/text-readibility';
import ChannelDetails from '@/components/yt/ChannelDetails';
import Metadata from '@/components/yt/Metadata';

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

  const transcriptText = useMemo(() => {
    if (!videoData) {
      return '';
    }

    let text = '';
    for (var i in videoData.subs) {
      text += removeNewLines(videoData.subs[i].text) + ' ';
    }

    return text;
  }, [videoData]);

  const thumbnail =
    videoData?.videoDetails.thumbnail.thumbnails[
      videoData.videoDetails.thumbnail.thumbnails.length - 1
    ];

  return (
    <Box>
      <Container>
        <Box sx={{ display: 'flex', gap: 8 }}>
          <Box sx={{ flexShrink: 0 }}>
            {loading && (
              <>
                <Skeleton height={340} width={600} />
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Skeleton variant="pill" width={80} height={20} />
                  <Skeleton variant="pill" width={80} height={20} />
                  <Skeleton variant="pill" width={80} height={20} />
                </Box>
              </>
            )}
            {!loading && videoData && (
              <>
                <Box
                  sx={{
                    width: 600,
                    height: 340,
                    img: { width: '100%', height: '100%', objectFit: 'cover' },
                  }}
                >
                  <img src={thumbnail?.url} />
                </Box>
                <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
                  <LabelPill
                    sx={{
                      fontWeight: 400,
                      textTransform: 'uppercase',
                    }}
                  >
                    {formatCount(
                      parseInt(videoData?.videoDetails.viewCount || '0')
                    )}{' '}
                    views
                  </LabelPill>
                  <LabelPill
                    sx={{
                      fontWeight: 400,
                      textTransform: 'uppercase',
                    }}
                  >
                    {wordsCount(transcriptText)} words
                  </LabelPill>
                </Box>
                <ChannelDetails videoDetails={videoData.videoDetails} />
                <Metadata availableTranscripts={videoData.availableLangs} />
              </>
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
                    fontSize: 16,
                    letterSpacing: '1px',
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
