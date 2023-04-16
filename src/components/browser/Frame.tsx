import { Box } from '@mui/material';
import { FC } from 'react';
import BrowserHeader from './BrowserHeader';

const Frame = (props: any) => {
  return (
    <Box
      sx={{
        borderRadius: '14px',
        widht: '100%',
        height: '100%',
        background: 'rgb(14, 15, 17)',
      }}
    >
      <BrowserHeader />
      <Box sx={{ padding: '30px 20px' }}>{props.children}</Box>
    </Box>
  );
};

export default Frame;
