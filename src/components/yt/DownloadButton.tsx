import { VideoDetails } from '@/interfaces/video';
import Button from '../base/Button';
import ArrowDownToLine from '../icons/ArrowDownToLine';
import he from 'he';

const DownloadButton = ({
  transcriptText,
  videoDetails,
}: {
  transcriptText: string;
  videoDetails: VideoDetails;
}) => {
  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([he.decode(transcriptText)], {
      type: 'text/plain;charset=utf-8',
    });
    element.href = URL.createObjectURL(file);
    element.download = videoDetails.title.replace(/\+/g, '-') + '.txt';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Button
      sx={{
        height: 24,
        padding: '5px 10px',
        fontSize: 13,
        lineHeight: 1,
        border: '1px solid var(--colors-gray7)',
        color: 'var(--colors-gray10)',
        background: 'transparent',
        borderRadius: '50px',
        svg: {
          fontSize: 11,
          lineHeight: 1,
          height: 12,
          mr: 0.5,
        },
        '&:hover': {
          color: 'var(--colors-gray11)',
        },
      }}
      onClick={downloadTxtFile}
    >
      <ArrowDownToLine sx={{ mr: 0.75 }} />
      Download
    </Button>
  );
};

export default DownloadButton;
