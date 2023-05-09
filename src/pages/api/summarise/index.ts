import TranscribeService from '@/lib/youtube-transcribe/transcribe.service';
import { NextApiRequest, NextApiResponse } from 'next';

interface MessageSchema {
  role: 'assistant' | 'user' | 'system';
  content: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.send('Cannot GET /api/summarise');
  }

  const prompt = `Title: ${req.body.title}\nTranscript: ${req.body.transcript}\nInstructions: Summarize the above content highlights.`;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const { choices, error } = await response.json();
  if (response.ok) {
    if (choices?.length > 0) {
      const newSystemMessageSchema: MessageSchema = {
        role: 'system',
        content: choices[0].message.content,
      };
      res.json(newSystemMessageSchema);
    } else {
      res.status(500).send('No response from OpenAI');
    }
  } else {
    res.status(500).send(error.message);
  }
};
