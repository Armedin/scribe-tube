import { ButtonProps } from '@mui/material';
import Button from '../base/Button';
import Thumbtack from '../icons/Thumbtack';

interface PinButtonProps extends ButtonProps {
  isPinned?: boolean;
}

const PinButton = (props: PinButtonProps) => {
  const { isPinned, sx, ...other } = props;
  return (
    <Button
      sx={{
        height: 24,
        padding: '5px 10px',
        fontSize: 13,
        lineHeight: 1,
        minWidth: 'auto',
        border: '1px solid var(--colors-gray7)',
        color: 'var(--colors-gray10)',
        background: 'transparent',
        borderRadius: '50px',
        svg: {
          fontSize: 11,
          lineHeight: 1,
          height: 12,
          mr: 0.5,
        },
        '&:hover': {
          color: 'var(--colors-gray11)',
        },
        ...sx,
      }}
      {...other}
    >
      <Thumbtack />
      {isPinned ? 'Unpin' : 'Pin'}
    </Button>
  );
};

export default PinButton;
