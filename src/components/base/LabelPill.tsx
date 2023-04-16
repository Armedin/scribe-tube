import { Box, BoxProps, styled } from '@mui/material';

const LabelPill = (props: BoxProps) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        display: 'inline-block',
        background: 'var(--colors-gray3)',
        padding: '5px 10px',
        fontSize: 13,
        lineHeight: 1.1,
        height: '24px',
        borderRadius: '999px',
        ...sx,
      }}
      {...other}
    />
  );
};

export default LabelPill;
