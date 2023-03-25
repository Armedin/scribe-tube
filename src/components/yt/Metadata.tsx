import { Box, Stack } from '@mui/material';
import Fingerprint from '../icons/Fingerprint';
import Language from '../icons/Language';
import SwitchLanguage from './SwitchLanguage';

const Metadata = () => {
  const metadata = [
    {
      title: 'Language',
      value: (
        <Box sx={{ display: 'flex', alignItems: 'center', button: { ml: 1 } }}>
          English <SwitchLanguage />
        </Box>
      ),
      icon: <Language />,
    },
    {
      title: 'Video ID',
      value: 'Qpf26PtBXgo',
      icon: <Fingerprint />,
      disabled: true,
    },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Box
        sx={{
          border: '1px solid var(--colors-gray3)',
          // background: 'var(--colors-gray3)',
          padding: '10px 16px 10px 16px',
          borderRadius: '6px',
        }}
      >
        <Stack gap={0.5}>
          {metadata.map((data, i) => (
            <Box
              sx={{
                fontSize: 13,
                display: 'flex',
                color: 'var(--colors-gray11)',
                opacity: data.disabled ? 0.5 : 1,
              }}
            >
              <Box
                sx={{
                  color: 'var(--colors-gray9)',
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: 96,
                  svg: {
                    fontSize: 14,
                    mr: 0.5,
                  },
                }}
              >
                {data.icon}
                {data.title}
              </Box>
              {data.value}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Metadata;
