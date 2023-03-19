import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useOmnibar } from './OmnibarContext';
import escapeRegExp from 'lodash.escaperegexp';

export interface HighlightedTextProps {
  text: string;
  highlightTerm: string;
}

const getAllHighlightedSpans = () => {
  return Array.from(document.querySelectorAll('.highlighted'));
};

const HighlightedText = (props: HighlightedTextProps) => {
  const { text, highlightTerm } = props;
  const { highlightIndex, setMatchCount } = useOmnibar();
  const highlightedHTMLElements = useRef<any>([]);

  let activeIndex = -1;
  const parts = text.split(
    new RegExp(`(${escapeRegExp(highlightTerm)})`, 'gi')
  );
  const highlightParts = parts.filter(
    part => part.toLowerCase() === highlightTerm.toLowerCase()
  );

  useEffect(() => {
    setMatchCount(highlightParts.length);
    highlightedHTMLElements.current = getAllHighlightedSpans();
  }, [highlightParts]);

  useEffect(() => {
    const nextHighlightEl = highlightedHTMLElements.current[highlightIndex];
    if (!nextHighlightEl) {
      return;
    }

    nextHighlightEl.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [highlightIndex]);

  return (
    <Box>
      {parts.map((part, index) => {
        const isActive = part.toLowerCase() === highlightTerm.toLowerCase();
        if (isActive) {
          activeIndex++;
        }

        return (
          <React.Fragment key={index}>
            {isActive ? (
              <span
                className="highlighted"
                style={{
                  backgroundColor: 'var(--highlight-bg)',
                  color: 'var(--highlight-text)',
                  ...(highlightIndex === activeIndex && {
                    backgroundColor: 'var(--highlight-active-bg)',
                  }),
                }}
              >
                {part}
              </span>
            ) : (
              part
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default HighlightedText;
