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

export interface Language {
  isGenerated: boolean;
  language: { code: string; language: string };
  url: string;
  videoId: string;
}

export interface AvailableTranscipts {
  generatedTranscripts: Language[];
  manualTranscript: Language[];
}

export interface Video {
  subs: TranscriptSub[];
  videoDetails: VideoDetails;
  availableLangs: AvailableTranscipts;
  language: string;
}
