import { TranscriptSub } from '@/interfaces/transcript';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import he from 'he';
import {
  capitaliseFirstLetter,
  removeNewLines,
} from '@/utils/text-readibility';
import React from 'react';
import { useOmnibar } from '../omnibar/OmnibarContext';
import HighlightedText from '../omnibar/HighlightedText';

const NormalTranscript = ({ subs }: { subs: TranscriptSub[] }) => {
  const [text, setText] = useState('');
  const omnibar = useOmnibar();

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
        {omnibar.isActive && omnibar.value ? (
          <HighlightedText
            text={he.decode(text)}
            highlightTerm={omnibar.value}
          />
        ) : (
          he.decode(text)
        )}
      </Typography>
    </Box>
  );
};

export default NormalTranscript;
