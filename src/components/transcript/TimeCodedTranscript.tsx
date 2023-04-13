import { TranscriptSub } from '@/interfaces/transcript';
import { timeFormat } from '@/utils/time-format';
import { Box } from '@mui/material';
import he from 'he';

const TimeCodedTranscript = ({
  subs,
  onSegmentClick,
}: {
  subs: TranscriptSub[];
  onSegmentClick: (sub: TranscriptSub) => void;
}) => {
  return (
    <Box>
      {subs.map((sub, i) => (
        <Box
          key={i}
          className="timestamp-marker"
          data-start={sub.start}
          data-end={parseFloat(sub.start) + parseFloat(sub.duration)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 1.5,
            py: 1.5,
            cursor: 'pointer',
            color: 'var(--colors-gray11)',
            '&.active, &:hover': {
              background: 'var(--colors-gray2)',
              fontWeight: 400,
              color: 'var(--colors-gray12)',
            },
          }}
          onClick={() => onSegmentClick(sub)}
        >
          <Box
            sx={{
              borderRadius: '4px',
              padding: '4px 4px',
              fontSize: 13,
              fontWeight: 500,
              lineHeight: 1,
              background: 'var(--colors-yellow3)',
              color: 'var(--colors-yellow11)',
              mr: 2,
            }}
          >
            {timeFormat(sub.start)}
          </Box>
          <Box>{he.decode(sub.text)}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default TimeCodedTranscript;
