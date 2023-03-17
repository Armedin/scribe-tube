import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useOmnibar } from './OmnibarContext';
import escapeRegExp from 'lodash.escaperegexp';

export interface HighlightedTextProps {
  text: string;
  highlightTerm: string;
}

const HighlightedText = (props: HighlightedTextProps) => {
  const { text, highlightTerm } = props;
  const { setMatchCount } = useOmnibar();
  const parts = text.split(
    new RegExp(`(${escapeRegExp(highlightTerm)})`, 'gi')
  );

  const highlightParts = parts.filter(
    part => part.toLowerCase() === highlightTerm.toLowerCase()
  );

  useEffect(() => {
    setMatchCount(highlightParts.length);
  }, [highlightParts]);

  return (
    <Box>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part.toLowerCase() === highlightTerm.toLowerCase() ? (
            <span
              style={{
                backgroundColor: 'var(--highlight-bg)',
                color: 'var(--highlight-text)',
              }}
            >
              {part}
            </span>
          ) : (
            part
          )}
        </React.Fragment>
      ))}
      ;
    </Box>
  );
};

export default HighlightedText;
