import { Box, Stack, Typography } from '@mui/material';
import Button from '../base/Button';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import Input from '../base/Input';

const Summary = ({
  title,
  transcriptText,
}: {
  title: string;
  transcriptText: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState();

  const handleSummarise = () => {
    setLoading(true);
    axios
      .post('/api/summarise', { title, transcript: transcriptText })
      .then(res => setSummary(res.data.content))
      .finally(() => setLoading(false));
  };

  return (
    <Box>
      {summary === undefined && (
        <Box
          sx={{
            maxWidth: 480,
            mx: 'auto',
            mt: 2,
            p: 3,
            border: '1px solid var(--colors-gray4)',
            borderRadius: '20px',
          }}
        >
          <Stack spacing={2}>
            <Input
              isTextarea
              label="Prompt for Summary"
              value={`Title: "{{Title}}" \nTranscript: "{{Transcript}}"\nInstructions: Summarize the above content highlights.`}
              disabled
            />
            <Button
              sx={{ fontWeight: 500 }}
              onClick={handleSummarise}
              fullWidth
              disabled={loading}
            >
              {loading ? 'Summarising...' : 'Summarise this Video'}
            </Button>
          </Stack>
        </Box>
      )}

      {summary && (
        <Typography sx={{ color: 'var(--colors-gray11)' }}>
          <Typewriter
            options={{ delay: 12.5 }}
            onInit={typewriter => {
              typewriter
                .typeString(summary)
                .callFunction(() => {})
                .start();
            }}
          />
        </Typography>
      )}
    </Box>
  );
};

export default Summary;
