import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { loadSdk } from '@/utils/load-sdk';

const VideoIFrame = (props: {
  videoId: string;
  seekTo?: number;
  onPlayerStart?: (player: any) => void;
  onPlayerStop?: () => void;
}) => {
  const { videoId, seekTo: seekProp, onPlayerStart, onPlayerStop } = props;
  const [player, setPlayer] = useState<any>();
  const [seekTo, setSeekTo] = useState<any>(seekProp);

  useEffect(() => {
    if (!player) {
      return;
    }

    setSeekTo(seekProp);
  }, [seekProp]);

  useEffect(() => {
    setSeekTo(undefined);
  }, [videoId]);

  useEffect(() => {
    if (!seekTo || !player) {
      return;
    }

    player.seekTo(seekTo);
    player.playVideo();
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

  const onPlayerReady = (event: any) => {
    setPlayer(event.target);
    // event.target.playVideo();
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === YT.PlayerState.PLAYING) {
      // TODO - When navigating away and returning, the player's functions like getcurrenttime are gone...
      onPlayerStart?.(event.target);
    } else {
      onPlayerStop?.();
    }
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
