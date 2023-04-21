import TranscribeService from '@/lib/youtube-transcribe/transcribe.service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.send('Cannot GET /api/transcribe');
  }

  const transcribeService = new TranscribeService();

  try {
    const transcript = await transcribeService.getTranscriptAndAvailableLangs(
      req.body.id
    );
    res.status(200).json(transcript);
  } catch (error: any) {
    return res
      .status(error.statusCode || 500)
      .json({ error: error.message || error.toString() });
  }
};
