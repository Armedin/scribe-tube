import {
  Box,
  TextField,
  styled,
  TextFieldProps,
  InputAdornment,
} from '@mui/material';
import MagnifyingGlass from '../icons/MagnifyingGlass';

const StyledInput = styled(TextField)({});

const SearchInput = (props: TextFieldProps) => {
  const handleFocus = (e: any) => {
    e.target.select();
  };

  return (
    <Box
      sx={{
        width: '260px',
        '.MuiInputBase-root': {
          height: 36,
          borderRadius: '6px',
          color: 'rgb(195 195 195)',
          border: '1px solid var(--colors-gray7)',
          background: 'var(--colors-gray1)',
          fontSize: 14,
          paddingLeft: '10px',

          '&.Mui-focused': {
            borderColor: 'var(--colors-gray8)',
            // background: 'var(--colors-gray2)',
          },
        },

        '.MuiInputBase-input': {
          padding: '8px 10px 8px 2px',
          border: 'none',
          height: 'auto',
          '&::placeholder': {
            color: 'rgb(124 124 124)',
          },
        },

        '.MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },

        svg: {
          fontSize: 16,
          color: 'rgb(124 124 124)',
        },
      }}
    >
      <StyledInput
        autoComplete="off"
        fullWidth
        {...props}
        onFocus={handleFocus}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MagnifyingGlass />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchInput;
