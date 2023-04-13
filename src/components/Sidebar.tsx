import { Box, Typography } from '@mui/material';
import Thumbtack from './icons/Thumbtack';
import PinsPlaceholder from './illustrations/PinsPlaceholder';

const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <Box
      sx={{
        transition: 'width 200ms cubic-bezier(0.41, 1.08, 0.73, 1) 0ms',
        ...(open && {
          transition: 'width 200ms cubic-bezier(0.41, 1.08, 0.73, 1) 0ms',
          width: 360,
        }),
        ...(!open && {
          width: 0,
          transform: 'translateX(100%)',
        }),
      }}
    >
      <Box
        sx={{
          background: 'var(--colors-gray1)',
          width: 360,
          height: '100%',
          borderLeft: '1px solid var(--colors-gray4)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ p: 1.5, borderBottom: '1px solid var(--colors-gray4)' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--colors-gray12)',
              opacity: 0.8,
              svg: { fontSize: 14, mr: 0.75 },
            }}
          >
            <Thumbtack />
            <Typography sx={{ fontWeight: 400, fontSize: 15 }}>
              Pinned
            </Typography>
            <Typography
              sx={{
                color: 'var(--colors-gray11)',
                fontSize: 12,
                ml: 0.75,
                pt: '1.5px',
              }}
            >
              Manage pinned videos
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            p: 1.5,
            flex: '1 1 100%',
            display: 'flex',
            alignItems: 'center',
            svg: { width: '100%', height: 240, fill: 'var(--colors-gray9)' },
          }}
        >
          <PinsPlaceholder />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
