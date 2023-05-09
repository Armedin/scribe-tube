import { useTabContext } from '@mui/base';
import { Box } from '@mui/material';

const TabPanelMounted = (props: any) => {
  const { value, sx } = props;
  const context = useTabContext();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }
  const tabId = context.value;

  return (
    <Box
      className="TabPanel-Mounted"
      sx={{
        margin: '20px 0',
        width: '100%',
        flex: '1 1 100%',
        display: value === tabId ? 'block' : 'none',
        ...sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default TabPanelMounted;
