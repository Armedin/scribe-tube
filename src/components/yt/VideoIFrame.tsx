import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { loadSdk } from '@/utils/load-sdk';

const VideoIFrame = ({
  videoId,
  seekTo,
}: {
  videoId: string;
  seekTo?: number;
}) => {
  const [player, setPlayer] = useState<any>();

  useEffect(() => {
    console.log(player);

    if (!seekTo || !player) {
      return;
    }

    player.seekTo(seekTo);
  }, [seekTo, player]);

  useEffect(() => {
    loadSdk().then(YT => {
      const player = new YT.Player('player', {
        videoId,
        playerVars: {
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    });
  }, []);

  const createPlayer = () => {
    player.current = new window.YT.Player('player', {
      videoId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
    console.log(player.current);
  };

  const onPlayerReady = (event: any) => {
    setPlayer(event.target);
    // event.target.playVideo();
  };

  const onPlayerStateChange = (event: any) => {
    console.log(event);
  };

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
        id="player"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        frameBorder={0}
      />
    </Box>
  );
};

export default VideoIFrame;
