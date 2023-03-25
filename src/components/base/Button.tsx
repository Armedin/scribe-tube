import { Button as MuiButton, ButtonProps, styled } from '@mui/material';
import React from 'react';

const StyledButton = styled(MuiButton)(props => ({
  height: 40,
  fontSize: 14,
  textTransform: 'none',
  boxShadow: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  color: 'var(--colors-gray12)',
  fontWeight: 400,

  svg: {
    fontSize: 16,
  },

  ':hover': {
    boxShadow: 'none',
  },

  ...(props.color === 'primary' && {
    background: 'var(--colors-gray3)',
    '&:hover': {
      background: 'var(--colors-gray4)',
    },
  }),
  ...(props.size === 'small' && {
    fontSize: 13,
    height: 32,
    padding: '8px 12px',
  }),
}));

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (inProps, ref) => {
    return (
      <StyledButton
        ref={ref}
        color="primary"
        variant="contained"
        disableRipple
        {...inProps}
      />
    );
  }
);

export default Button;
