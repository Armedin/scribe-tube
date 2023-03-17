import { Box, BoxProps } from '@mui/material';

const ToolbarActionButton = (props: BoxProps) => {
  return (
    <Box
      className="Omnibar-button"
      sx={{
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ced4da',
        transition: 'background .15s ease',
        borderRadius: '8px',
        margin: '-8px',
        cursor: 'pointer',
        outline: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        svg: { fontSize: 12 },
        '&:hover': {
          backgroundColor: 'hsl(0 0% 7%)',
        },
      }}
      {...props}
    />
  );
};

export default ToolbarActionButton;
