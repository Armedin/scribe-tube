import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)({
  borderRadius: '10px',
  px: 2,
  flexShrink: 0,
  textTransform: 'none',
  padding: '6px 14px',
  border: '1px solid var(--colors-gray12)',
  color: 'var(--colors-gray12)',
  '&:hover': {
    background: 'transparent',
  },
  // color: '#0a0a0a',
  // background:
  //   'linear-gradient(to bottom, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 0.48) 100%)',
  // boxShadow:
  //   'rgb(0 0 0 / 25%) 0px 4px 4px 0px, rgb(255 255 255 / 32%) 0px 0px 1px 1px inset',
  // transition: 'opacity 0.25s ease-in-out',
  // '&:hover': {
  //   background:
  //     'linear-gradient(to bottom, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 0.48) 100%)',
  //   opacity: 0.75,
  // },
});

const ActionButton = (props: ButtonProps) => {
  return <StyledButton disableRipple {...props} />;
};

export default ActionButton;
