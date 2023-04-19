import { Box, Container, Grid, Typography } from '@mui/material';
import Frame from './Frame';
import LabelPill from '../base/LabelPill';
import PreviewTranscriptTabs from './PreviewTranscriptTabs';
import PreviewChannelDetails from './PreviewChannelDetails';

// Inspired by twingate.com

const BrowserPreview = () => {
  return (
    <Box
      sx={{ width: '100%', pt: 10, position: 'relative', overflow: 'hidden' }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          maxWidth: 1104,
          minWidth: 920,
          mx: 'auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            inset: 0,
          }}
        >
          <Box
            sx={{
              background:
                'radial-gradient(circle at bottom center,black,black 70%)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.3,
              filter: 'blur(40px)',
            }}
          />
        </Box>

        <Box
          sx={{
            zIndex: 1,
            width: 1088,
            height: 500,
            padding: '16px 16px 0',
            background: '#040506',
            boxShadow: `
          rgba(255, 255, 255, 0.03) 0px 0px 0px 0.5px inset, 
          rgba(255, 255, 255, 0.03) 0px 2px 3px 0px inset, 
          rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0px inset`,
            borderRadius: '28px 28px 0px 0px',
          }}
        >
          <Frame>
            <Grid container spacing={2.5}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    width: '100%',
                  }}
                >
                  <Box
                    component="img"
                    sx={{ width: '100%', borderRadius: '8px' }}
                    src="https://i.ytimg.com/vi/arj7oStGLkU/maxresdefault.jpg"
                  />

                  <Box sx={{ display: 'flex', my: 0.5, gap: 1 }}>
                    <LabelPill
                      sx={{
                        fontWeight: 400,
                        textTransform: 'uppercase',
                        background: 'var(--colors-tomato3)',
                        color: 'var(--colors-tomato11)',
                      }}
                    >
                      52.2M Views
                    </LabelPill>
                    <LabelPill
                      sx={{
                        fontWeight: 400,
                        textTransform: 'uppercase',
                        background: 'var(--colors-tomato3)',
                        color: 'var(--colors-tomato11)',
                      }}
                    >
                      2278 Words
                    </LabelPill>
                  </Box>
                  <PreviewChannelDetails />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{}}>
                  <PreviewTranscriptTabs value={0}>
                    <Typography
                      sx={{ fontSize: 15, color: 'var(--colors-gray11)' }}
                    >
                      So in college, I was a government major, which means I had
                      to write a lot of papers. Now, when a normal student
                      writes a paper, they might spread the work out a little
                      like this. So, you know -- (Laughter) you get started
                      maybe a little slowly, but you get enough done in the
                      first week that, with some heavier days later on,
                      everything gets done, things stay civil. <br /> <br />
                      (Laughter) And I would want to do that like that. That
                      would be the plan. I would have it all ready to go, but
                      then, actually, the paper would come along, and then I
                      would kind of do this. (Laughter) And that would happen
                      every single paper. <br /> <br /> But then came my 90-page
                      senior thesis, a paper you're supposed to spend a year on.
                      And I knew for a paper like that, my normal work flow was
                      not an option. It was way too big a project. So I planned
                      things out, and I decided I kind of had to go something
                      like this. This is how the year would go. So I'd start off
                      light, and I'd bump it up in the middle months, and then
                      at the end, I would kick it up into high gear just like a
                      little staircase. How hard could it be to walk up the
                      stairs? No big deal, right? But then, the funniest thing
                      happened. Those first few months? They came and went,
                    </Typography>
                  </PreviewTranscriptTabs>
                </Box>
              </Grid>
            </Grid>
          </Frame>
        </Box>
      </Box>
      <Box
        sx={{
          background:
            'linear-gradient(180deg,rgba(14,15,17,0) 0%,#0b0d0f 100%)',
          height: 186,
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: 2,
          bottom: 0,
        }}
      />
    </Box>
  );
};

export default BrowserPreview;
