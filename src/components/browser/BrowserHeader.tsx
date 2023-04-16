import { Box, Typography, styled } from '@mui/material';

const BrowserControlOption = styled(Box)({
  borderRadius: '50%',
  width: 12,
  height: 12,
});

const BrowserHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(229, 238, 255, 0.05)',
        borderRadius: '14px 14px 0 0',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0.5px 0px 0px',
        height: 30,
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', gap: '8px', width: 80, pl: 2 }}>
        <BrowserControlOption sx={{ backgroundColor: '#ff5f57' }} />
        <BrowserControlOption sx={{ backgroundColor: '#febc2e' }} />
        <BrowserControlOption sx={{ backgroundColor: '#26c940' }} />
      </Box>
      <Typography
        sx={{ color: 'var(--colors-gray11)', fontSize: 14, fontWeight: 400 }}
      >
        scribetube.com
      </Typography>
      <Box sx={{ width: 80 }} />
    </Box>
  );
};

export default BrowserHeader;
