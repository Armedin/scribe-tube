import { TranscriptLanguage } from '@/lib/youtube-transcribe/language.interface';
import TranscribeService from '@/lib/youtube-transcribe/transcribe.service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.send('Cannot GET /api/transcribe/change-language');
  }

  const transcribeService = new TranscribeService();

  try {
    const language: TranscriptLanguage = req.body.language;
    const transcript = await transcribeService.getTranslatedTranscript(
      language
    );

    res.status(200).json(transcript);
  } catch (error: any) {
    return res
      .status(error.statusCode || 500)
      .json({ error: error.message || error.toString() });
  }
};
