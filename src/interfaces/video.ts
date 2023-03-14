import { TranscriptSub } from './transcript';

export interface VideoDetails {
  videoId: string;
  allowRatings: boolean;
  author: string;
  channelId: string;
  isPrivate: boolean;
  keywords: string[];
  lengthSeconds: string;
  shortDescription: string;
  title: string;
  viewCount: string;
  thumbnail: { thumbnails: { height: number; width: number; url: string }[] };
}

export interface Video {
  subs: TranscriptSub[];
  videoDetails: VideoDetails;
}
