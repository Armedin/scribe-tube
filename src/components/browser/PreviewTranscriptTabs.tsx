import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import TabPanelMounted from '../base/TabPanelMounted';

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
  fontSize: 13,
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

const PreviewTranscriptTabs = (props: any) => {
  const { children, ...other } = props;
  return (
    <TabsUnstyled {...other}>
      <TabsList>
        <Tab>Normal</Tab>
        <Tab>Time-coded</Tab>
        <Tab>Summary</Tab>
      </TabsList>
      {React.Children.toArray(children).map((child, i) => (
        <TabPanelMounted
          sx={{
            padding: '14px 0',
          }}
          value={i}
          key={i}
        >
          {child}
        </TabPanelMounted>
      ))}
      {/* <TabPanel value={0}>My account page</TabPanel> */}
    </TabsUnstyled>
  );
};

export default PreviewTranscriptTabs;
