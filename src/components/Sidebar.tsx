import { Box, Typography } from '@mui/material';
import Thumbtack from './icons/Thumbtack';
import PinsPlaceholder from './illustrations/PinsPlaceholder';
import { usePinnedVideos } from './PinnedVideosContext';
import Button from './base/Button';
import ArrowRight from './icons/ArrowRight';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Sidebar = ({ open }: { open: boolean }) => {
  const [loaded, setLoaded] = useState(false); // For some reason, Hydration failed due to local storage
  const { pinnedVideos } = usePinnedVideos();
  const router = useRouter();

  useEffect(() => setLoaded(true), []);

  return (
    <Box
      sx={{
        transition: 'width 200ms cubic-bezier(0.41, 1.08, 0.73, 1) 0ms',
        ...(open && {
          transition: 'width 200ms cubic-bezier(0.41, 1.08, 0.73, 1) 0ms',
          width: 360,
        }),
        ...(!open && {
          width: 0,
          transform: 'translateX(100%)',
        }),
      }}
    >
      <Box
        sx={{
          background: 'var(--colors-gray1)',
          width: 360,
          height: '100%',
          borderLeft: '1px solid var(--colors-gray4)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ p: 1.5, borderBottom: '1px solid var(--colors-gray4)' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--colors-gray12)',
              opacity: 0.8,
              svg: { fontSize: 14, mr: 0.75 },
            }}
          >
            <Thumbtack />
            <Typography sx={{ fontWeight: 400, fontSize: 15 }}>
              Pinned
            </Typography>
            <Typography
              sx={{
                color: 'var(--colors-gray11)',
                fontSize: 12,
                ml: 0.75,
                pt: '1.5px',
              }}
            >
              Manage pinned videos
            </Typography>
          </Box>
        </Box>

        {loaded && pinnedVideos.length > 0 && (
          <Box sx={{ p: 1.5 }}>
            {pinnedVideos.map((pinnedVideo, i) => {
              const thumbnailUrl =
                pinnedVideo.thumbnail.thumbnails[
                  pinnedVideo.thumbnail.thumbnails.length - 1
                ].url;

              return (
                <Box
                  key={i}
                  sx={{
                    background: 'var(--colors-gray2)',
                    border: '1px solid var(--colors-gray5)',
                    borderRadius: '12px',
                    padding: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    mb: 0.5,

                    '&:hover': {
                      button: {
                        background: 'var(--colors-gray4)',
                        color: 'var(--colors-gray12)',
                      },
                    },
                  }}
                  onClick={() => router.push(`/v/${pinnedVideo.videoId}`)}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      img: { width: '100%', borderRadius: '12px' },
                    }}
                  >
                    <img src={thumbnailUrl} />
                  </Box>
                  <Button
                    sx={{
                      height: 36,
                      background: 'var(--colors-gray3)',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--colors-gray11)',
                      svg: { ml: 0.25 },
                    }}
                  >
                    View Video
                    <ArrowRight />
                  </Button>
                </Box>
              );
            })}
          </Box>
        )}

        {loaded && pinnedVideos.length === 0 && (
          <Box
            sx={{
              p: 1.5,
              flex: '1 1 100%',
              display: 'flex',
              alignItems: 'center',
              svg: { width: '100%', height: 240, fill: 'var(--colors-gray9)' },
            }}
          >
            <PinsPlaceholder />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
