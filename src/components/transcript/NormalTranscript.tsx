import { TranscriptSub } from '@/interfaces/transcript';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import he from 'he';

const capitaliseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const removeNewLines = (str: string) => {
  return str.replace(/\r?\n|\r/g, ' ');
};

const NormalTranscript = ({ subs }: { subs: TranscriptSub[] }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let counter = 0;
    let formattedText = '';

    for (var i in subs) {
      if ((counter += 1) % 12 == 0) {
        formattedText +=
          '\n\n' + capitaliseFirstLetter(removeNewLines(subs[i].text)) + ' ';
      } else {
        formattedText += removeNewLines(subs[i].text) + ' ';
      }
    }

    setText(capitaliseFirstLetter(formattedText));
  }, [subs]);

  return (
    <Box>
      <Typography
        sx={{ color: 'var(--colors-gray11)', whiteSpace: 'pre-line' }}
      >
        {he.decode(text)}
      </Typography>
    </Box>
  );
};

export default NormalTranscript;
