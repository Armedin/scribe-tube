import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box } from '@mui/material';

const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
  minWidth: 400,
  padding: '4px',
  borderRadius: '6px',
  backgroundColor: 'var(--colors-gray2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Aeonik Pro Medium',
  position: 'relative',
}));

const Tab = styled(TabUnstyled)({
  color: 'var(--colors-gray11)',
  cursor: 'pointer',
  fontSize: 14,
  backgroundColor: 'transparent',
  width: '100%',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Outfit',

  [`&.${tabUnstyledClasses.selected}`]: {
    backgroundColor: 'var(--colors-gray5)',
    color: 'var(--colors-gray12)',
  },

  [`&.${buttonUnstyledClasses.disabled}`]: {
    opacity: 0.25,
    cursor: 'not-allowed',
  },
});

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  padding: 20px 0;
  `
);

const TranscriptTabs = ({ children }: any) => {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Normal</Tab>
        <Tab>Time-coded</Tab>
        <Tab disabled>Puncutated</Tab>
        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: 6,
            right: 6,
            background: 'var(--colors-gray7)',
            fontSize: 11,
            display: 'inline-block',
            borderRadius: '4px',
            padding: '1px 4px',
            color: 'var(--colors-gray10)',
          }}
        >
          Soon
        </Box>
      </TabsList>
      {React.Children.toArray(children).map((child, i) => (
        <TabPanel value={i} key={i}>
          {child}
        </TabPanel>
      ))}
      {/* <TabPanel value={0}>My account page</TabPanel> */}
    </TabsUnstyled>
  );
};

export default TranscriptTabs;
