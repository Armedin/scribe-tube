import useLocalStorage from '@/hooks/useLocalStorage';
import { VideoDetails } from '@/interfaces/video';
import React, { useEffect, useState } from 'react';

interface PinnedVideosContext {
  pinnedVideos: VideoDetails[];

  pinVideo: (video: VideoDetails) => void;
  removePinnedVideo: (videoId: string) => void;
}

interface PinnedVideosContextProps {
  children?: React.ReactNode;
}

const PinnedVideosContext = React.createContext<PinnedVideosContext | null>(
  null
);

export const PinnedVideosProvider = ({
  children,
}: PinnedVideosContextProps) => {
  const [pinnedVideos, setPinnedVideos] = useLocalStorage<VideoDetails[]>(
    'pinnedVideos',
    []
  );

  const pinVideo = (video: VideoDetails) => {
    setPinnedVideos(prev => [...prev, video]);
  };

  const removePinnedVideo = (videoId: string) => {
    const newPinnedVideos = pinnedVideos.filter(
      video => video.videoId !== videoId
    );
    setPinnedVideos(newPinnedVideos);
  };

  return (
    <PinnedVideosContext.Provider
      value={{
        pinnedVideos,
        pinVideo,
        removePinnedVideo,
      }}
    >
      {children}
    </PinnedVideosContext.Provider>
  );
};

export const usePinnedVideos = () => {
  const context = React.useContext(PinnedVideosContext);
  return context!;
};
