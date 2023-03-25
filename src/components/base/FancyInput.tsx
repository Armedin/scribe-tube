import { Box, styled, TextField, TextFieldProps } from '@mui/material';

const StyledInput = styled(TextField)({});

const FancyInput = (props: TextFieldProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '10px',
        boxShadow:
          'rgb(0 0 0 / 25%) 0px 4px 4px 0px, rgb(255 255 255 / 32%) 0px 1px 0px 0px inset',
        background: 'linear-gradient(to bottom, #0e0f14 10%, #1e1e23 100%)',
        height: 56,

        '.MuiInputBase-root': {
          height: 56,
          borderRadius: '10px',
          color: 'rgb(195 195 195)',
        },

        '.MuiInputBase-input': {
          padding: '8px 16px',
          border: 'none',
          '&::placeholder': {
            color: 'rgb(124 124 124)',
          },
        },

        '.MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
    >
      <StyledInput autoComplete="off" fullWidth {...props} />
    </Box>
  );
};

export default FancyInput;
