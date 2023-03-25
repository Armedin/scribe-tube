import { VideoDetails } from '@/interfaces/video';
import { Box } from '@mui/material';
import Button from '../base/Button';
import ArrowDownToLine from '../icons/ArrowDownToLine';

const ActionsToolbar = ({
  transcriptText,
  videoDetails,
}: {
  transcriptText: string;
  videoDetails: VideoDetails;
}) => {
  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([transcriptText], {
      type: 'text/plain;charset=utf-8',
    });
    element.href = URL.createObjectURL(file);
    element.download = videoDetails.title.replace(/\+/g, '-') + '.txt';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Box />
      <Box>
        <Button size="small" onClick={downloadTxtFile}>
          <ArrowDownToLine sx={{ mr: 0.5 }} />
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default ActionsToolbar;
