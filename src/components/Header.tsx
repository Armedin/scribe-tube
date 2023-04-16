import { useYoutubeForm } from '@/hooks/useYoutubeForm';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import SearchInput from './base/SearchInput';
import Bars from './icons/Bars';
import ClosedCaptioning from './icons/ClosedCaptioning';

const Header = ({
  sidebarOpen,
  onSidebarToggle,
}: {
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}) => {
  const router = useRouter();
  const { youtubeLink, handleInputChange, handleSubmit } = useYoutubeForm();

  return (
    <Box sx={{ height: 80, display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => router.push('/')}
              >
                <ClosedCaptioning />
                <Typography sx={{ ml: 1, fontWeight: 500, fontSize: 17 }}>
                  ScribeTube
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: 11,
                  ml: 0.4,
                  fontWeight: 500,
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  backgroundImage:
                    'linear-gradient(122.25deg, #ff4c88 12.16%, #ff8a63 70.98%)',
                }}
              >
                Alpha
              </Typography>
            </Box>
            {/* <Box
              sx={{
                display: 'flex',
                gap: 2.5,
                a: {
                  color: 'var(--colors-gray11)',
                  fontWeight: 400,
                  fontSize: 15,
                },
              }}
            >
              <Box component="a">Pricing</Box>
              <Box component="a">Contact</Box>
            </Box> */}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <SearchInput
                placeholder="Search video..."
                onChange={handleInputChange}
                value={youtubeLink}
              />
            </Box>

            <IconButton
              sx={{
                width: 38,
                height: 38,
                borderRadius: '8px',
                svg: { color: 'var(--colors-gray11)', fontSize: 20 },
                '&:hover': {
                  background: 'var(--colors-gray2)',
                  svg: {
                    color: 'var(--colors-gray12)',
                  },
                },
              }}
              onClick={onSidebarToggle}
            >
              <Bars />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
