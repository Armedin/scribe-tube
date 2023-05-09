import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Textarea from './Textarea';

const InputRoot = styled('input')({
  outline: 'none',
  color: 'rgb(195 195 195)',
  border: '1px solid var(--colors-gray2)',
  background: 'var(--colors-gray2)',
  WebkitAppearance: 'none',
  padding: '8px 12px',
  fontFamily: 'inherit',
  height: 40,
  fontSize: 14,
  width: '100%',
  display: 'block',
  borderRadius: '8px',
  lineHeight: 1.4,
  minWidth: 0,
  '&:focus': {
    outline: 0,
    boxShadow: '#0b0d0f 0px 0px 0px 3px, var(--colors-gray6) 0px 0px 0px 5px',
    // borderColor: 'var(--colors-gray8)',
  },
  '&::placeholder': {
    opacity: 1,
    color: 'var(--colors-gray8)',
  },
});

const Input = (props: any) => {
  const { label, isTextarea, ...other } = props;

  return (
    <Box>
      {label && (
        <Box
          sx={{
            fontWeight: 400,
            fontSize: 13.5,
            pb: '6px',
            color: 'var(--colors-gray11)',
          }}
        >
          {label}
        </Box>
      )}

      {isTextarea ? <Textarea {...other} /> : <InputRoot {...other} />}
    </Box>
  );
};

export default Input;
