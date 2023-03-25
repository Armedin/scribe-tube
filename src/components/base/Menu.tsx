import styled from '@emotion/styled';
import React from 'react';
import { ClickAwayListener, Popper, PopperProps } from '@mui/material';

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  open: boolean;
  anchorEl: any;
  children?: React.ReactNode;
  PopperProps?: Partial<PopperProps>;
  closeOnClickAway?: boolean;
  onClose?: () => void;
}

const MenuRoot = styled('ul')({
  outline: 0,
  background: '#191919',
  boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  padding: '4px',
  display: 'block',
  minWidth: 160,
});

const Menu = React.forwardRef<any, MenuProps>((inProps, ref) => {
  const {
    children,
    anchorEl,
    open,
    PopperProps,
    onClose,
    closeOnClickAway = true,
    className,
    ...other
  } = inProps;

  const handleClickAway = () => {
    if (!closeOnClickAway) {
      return;
    }

    onClose?.();
  };

  return (
    <Popper anchorEl={anchorEl} open={open} {...PopperProps}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <MenuRoot className={className} ref={ref} {...other}>
          {children}
        </MenuRoot>
      </ClickAwayListener>
    </Popper>
  );
});

export default Menu;
