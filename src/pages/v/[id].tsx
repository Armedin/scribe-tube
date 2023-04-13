import Skeleton from '@/components/base/Skeleton';
import { Box, Container, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import NormalTranscript from '@/components/transcript/NormalTranscript';
import { Language, Video } from '@/interfaces/video';
import { formatCount } from '@/utils/format-count';
import LabelPill from '@/components/base/LabelPill';
import { removeNewLines, wordsCount } from '@/utils/text-readibility';
import ChannelDetails from '@/components/yt/ChannelDetails';
import Metadata from '@/components/yt/Metadata';
import VideoIFrame from '@/components/yt/VideoIFrame';
import TranscriptTabs from '@/components/yt/TranscriptTabs';
import TimeCodedTranscript from '@/components/transcript/TimeCodedTranscript';
import { TranscriptSub } from '@/interfaces/transcript';

const VideoTranscript = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState<Video>();
  const [seekTo, setSeekTo] = useState<number>();
  const updateMarkerInterval = useRef<any>(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (!id) {
      return;
    }

    // setLoading(true);
    // axios
    //   .post('http://localhost:5000/transcribe', { id })
    //   .then(res => {
    //     setVideoData(res.data);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [id]);

  const handleLanguageChange = (language: Language) => {
    axios
      .post('http://localhost:5000/transcribe/change-language', {
        language: language,
      })
      .then(res => {
        setVideoData(prev => ({ ...prev, ...res.data }));
      });
  };

  const handleSegmentClick = (sub: TranscriptSub) => {
    setSeekTo(sub.start);
  };

  const handlePlayerStart = useCallback(
    (player: any) => {
      const timestampMarkers = document.querySelectorAll('.timestamp-marker');
      updateMarkerInterval.current = setInterval(
        () => markerInterval(timestampMarkers, player),
        100
      );
    },
    [videoData?.subs]
  );

  const markerInterval = (timestampMarkers: any[], player: any) => {
    const currentTime = player.getCurrentTime();
    let hasMarked = false;
    let closestMarker: any = null;
    let lastStartTime = 0.0;

    timestampMarkers.forEach(marker => {
      const markerStart = parseFloat(marker.dataset.start);
      const markerEnd = parseFloat(marker.dataset.end);
      if (currentTime >= markerStart && currentTime <= markerEnd) {
        marker.classList.add('active');
        hasMarked = true;
      } else {
        marker.classList.remove('active');
      }

      if (markerStart < currentTime && markerStart > lastStartTime) {
        closestMarker = marker;
        lastStartTime = markerStart;
      }
    });

    if (!hasMarked && closestMarker) {
      closestMarker.classList.add('active');
    }
  };

  const handlePlayerStop = () => {
    if (updateMarkerInterval.current) {
      clearInterval(updateMarkerInterval.current);
    }
  };

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

  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box sx={{ flexShrink: 0, width: '50%' }}>
            {loading && (
              <>
                <Skeleton height={340} />
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Skeleton variant="pill" width={80} height={20} />
                  <Skeleton variant="pill" width={80} height={20} />
                  <Skeleton variant="pill" width={80} height={20} />
                </Box>
              </>
            )}
            {!loading && videoData && (
              <Box sx={{ position: 'sticky', top: 20 }}>
                <VideoIFrame
                  videoId={videoData.videoDetails.videoId}
                  seekTo={seekTo}
                  onPlayerStart={handlePlayerStart}
                  onPlayerStop={handlePlayerStop}
                />
                <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
                  <LabelPill
                    sx={{
                      fontWeight: 400,
                      textTransform: 'uppercase',
                      background: 'var(--colors-tomato3)',
                      color: 'var(--colors-tomato11)',
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
                      background: 'var(--colors-tomato3)',
                      color: 'var(--colors-tomato11)',
                    }}
                  >
                    {wordsCount(transcriptText)} words
                  </LabelPill>
                </Box>
                <ChannelDetails videoDetails={videoData.videoDetails} />
                <Metadata
                  language={videoData.language}
                  availableTranscripts={videoData.availableLangs}
                  onLanguageChange={handleLanguageChange}
                />
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
                <TranscriptTabs
                  value={tabValue}
                  onChange={(e: any, newValue: any) => {
                    setTabValue(newValue);
                  }}
                >
                  <NormalTranscript subs={videoData.subs} />
                  <TimeCodedTranscript
                    subs={videoData.subs}
                    onSegmentClick={handleSegmentClick}
                  />
                </TranscriptTabs>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoTranscript;
