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
import TranscriptTabs from '@/components/yt/TranscriptTabs';
import TimeCodedTranscript from '@/components/transcript/TimeCodedTranscript';
import { TranscriptSub } from '@/interfaces/transcript';
import PinButton from '@/components/yt/PinButton';
import { usePinnedVideos } from '@/components/PinnedVideosContext';
import NotTranscribable from '@/components/NotTrascribable';
import Summary from '@/components/transcript/Summary';
import YouTube from 'react-youtube';
import DownloadButton from '@/components/yt/DownloadButton';

const VideoTranscript = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [isTranscribable, setIsTranscribable] = useState(true);
  const [videoData, setVideoData] = useState<Video | undefined>();
  const updateMarkerInterval = useRef<any>(null);
  const [tabValue, setTabValue] = useState(0);
  const { pinVideo, removePinnedVideo, pinnedVideos } = usePinnedVideos();
  const [youtubePlayer, setYoutubePlayer] = useState<any>(null);

  const isVideoPinned = useMemo(() => {
    if (!videoData?.videoDetails) {
      return false;
    }

    return (
      pinnedVideos.findIndex(
        item => item.videoId == videoData.videoDetails.videoId
      ) !== -1
    );
  }, [videoData, pinnedVideos]);

  useEffect(() => {
    if (!id) {
      return;
    }

    setLoading(true);
    setIsTranscribable(true);
    setVideoData(undefined);
    axios
      .post('/api/transcribe', { id })
      .then(res => {
        setVideoData(res.data);
      })
      .catch(e => {
        console.log(e);
        setIsTranscribable(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleLanguageChange = (language: Language) => {
    axios
      .post('/api/transcribe/change-language', {
        language: language,
      })
      .then(res => {
        setVideoData(prev => ({ ...prev, ...res.data }));
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleSegmentClick = (sub: TranscriptSub) => {
    youtubePlayer?.seekTo(sub.start);
  };

  const handlePlayerReady = (event: any) => {
    setYoutubePlayer(event.target);
  };

  const handlePlayerStop = () => {
    if (updateMarkerInterval.current) {
      clearInterval(updateMarkerInterval.current);
    }
  };

  const handlePlayerStart = useCallback(
    (player: any) => {
      const timestampMarkers = document.querySelectorAll('.timestamp-marker');
      updateMarkerInterval.current = setInterval(
        () => markerInterval(timestampMarkers as any, player),
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
        marker.scrollIntoView({ block: 'center' });
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
      closestMarker.scrollIntoView({ block: 'center' });
    }
  };

  useEffect(() => {
    handlePlayerStop();
    setYoutubePlayer(null);
  }, [id]);

  const handlePinClick = () => {
    if (!videoData?.videoDetails) {
      return;
    }

    if (isVideoPinned) {
      removePinnedVideo(videoData.videoDetails.videoId);
    } else {
      pinVideo(videoData.videoDetails);
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
    <Box sx={{ pb: 6 }}>
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
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingBottom: '56.25%',

                    iframe: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      visibility: !youtubePlayer ? 'hidden' : 'visible',
                    },
                  }}
                >
                  <YouTube
                    videoId={videoData.videoDetails.videoId}
                    opts={{
                      playerVars: {
                        playsinline: 1,
                      },
                    }}
                    onReady={handlePlayerReady}
                    onPause={handlePlayerStop}
                    onPlay={e => handlePlayerStart(e.target)}
                  />
                </Box>

                <Box
                  sx={{
                    my: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
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
                  <Box sx={{ display: 'flex', gap: 0.75 }}>
                    <DownloadButton
                      transcriptText={transcriptText}
                      videoDetails={videoData.videoDetails}
                    />
                    <PinButton
                      onClick={handlePinClick}
                      isPinned={isVideoPinned}
                    />
                  </Box>
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

          <Box
            sx={{
              flex: '1 1 100%',
              display: 'flex',
              '.MuiTabs-root': {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            {loading && (
              <Box sx={{ width: '100%' }}>
                <Skeleton width="100%" height={36} />
                <Stack sx={{ mt: 4, gap: 1 }}>
                  <Skeleton width="70%" height={14} />
                  <Skeleton width="90%" height={14} />
                  <Skeleton width="60%" height={14} />
                </Stack>
              </Box>
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
                  <Summary
                    title={videoData.videoDetails.title}
                    transcriptText={transcriptText}
                  />
                </TranscriptTabs>
              </>
            )}
          </Box>
        </Box>

        {!isTranscribable && <NotTranscribable />}
      </Container>
    </Box>
  );
};

export default VideoTranscript;
