import { Box, Container, Grid, Typography, styled } from '@mui/material';
import PinsPlaceholder from './illustrations/PinsPlaceholder';
import PreviewTimeCodedTranscript from './browser/PreviewTimeCodedTranscript';

const Card = styled(Box)({
  borderRadius: '20px',
  padding: '24px 24px 36px 24px',
  border: '1px solid var(--colors-gray5)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  // background: 'var(--colors-gray2)',
});

const subs = [
  {
    text: 'People are missing out on incredible opportunities all of the time.',
    start: '238.873',
  },
  {
    text: 'because of what is going on their head,',
    start: '242.419',
    duration: '2.053',
  },
  {
    text: 'You know, those kind of self-limiting thoughts like:',
    start: '249.548',
    duration: '2.57',
  },
  {
    text: '&quot;I can&#39;t do that&quot;,',
    start: '252.118',
    duration: '1.668',
  },
  {
    text: '&quot;I&#39;m not good enough&quot;,',
    start: '253.786',
    duration: '1.332',
  },
];

const OverviewSection = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'var(--colors-yellow10)',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: 14,
            mb: 1,
          }}
        >
          Built for busy people
        </Typography>

        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            mb: 3,
            mx: 'auto',
          }}
        >
          The most powerful tool <br /> built specifically for YouTube Videos
        </Typography>
        <Typography
          sx={{ maxWidth: 620, mx: 'auto', fontSize: 18, textAlign: 'center' }}
        >
          No more bloated files for taking notes. Create simple yet powerful
          digital note-cards with rich and varied content, like math equations,
          tables, images, checklists, and emojis.
        </Typography>

        <Box sx={{ py: 10 }}>
          <Grid container spacing={7}>
            <Grid item xs={5}>
              <Card>
                <Box
                  sx={{
                    flex: '1 1 100%',
                    display: 'flex',
                    justifyContent: 'center',
                    svg: {
                      height: '100%',
                      width: 'auto',
                      fill: 'var(--colors-gray9)',
                    },
                  }}
                >
                  <PinsPlaceholder />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: 17, letterSpacing: '0.75px', mb: 0.25 }}
                >
                  Pin Youtube Videos
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  Keep track of all the videos you might want to watch or referr
                  later on.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={7}>
              <Card>
                <Box mb={2}>
                  <PreviewTimeCodedTranscript subs={subs} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: 17, letterSpacing: '0.75px', mb: 0.25 }}
                >
                  Time-Coded Timestamps
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  Time-coded transcript to provide a more convenient and
                  streamlined viewing experience.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OverviewSection;
