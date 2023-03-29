import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

const MenuItemRoot = styled('li')({
  padding: '4px 8px',
  width: '100%',
  cursor: 'pointer',
  color: 'var(--colors-gray10)',
  lineHeight: 1,
  fontSize: 14,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',

  '&[aria-selected="true"]': {
    backgroundColor: 'var(--kukui-accent-100)',
  },
  '&:hover': {
    backgroundColor: 'var(--colors-gray3)',
    color: 'var(--colors-gray11)',
  },
});

const MenuItem = React.forwardRef<HTMLLIElement, HTMLAttributes<any>>(
  (inProps, ref) => {
    const { children, ...other } = inProps;

    return (
      <MenuItemRoot tabIndex={-1} role="option" ref={ref} {...other}>
        {children}
      </MenuItemRoot>
    );
  }
);

export default MenuItem;
