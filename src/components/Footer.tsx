import { Box, Container, Link, Stack, Typography } from '@mui/material';
import majilabsLogo from '../assets/img/majilabs-logo.png';

const Footer = () => {
  return (
    <Box sx={{ pb: 4, pt: 2 }}>
      <Container maxWidth="xl">
        <Stack alignItems="center">
          <Box
            component="img"
            src={majilabsLogo.src}
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
            }}
          />
          <Typography sx={{ mt: 3, mb: 2 }}>
            © ScribeTube - Built and Maintained by{' '}
            <Link
              href="https://majilabs.com/"
              target="_blank"
              sx={{ color: '#67d697', textDecorationColor: '#67d697' }}
            >
              MajiLabs
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
