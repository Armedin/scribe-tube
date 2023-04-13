import { useTabContext } from '@mui/base';
import { Box } from '@mui/material';

const TabPanelMounted = (props: any) => {
  const { value } = props;
  const context = useTabContext();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }
  const tabId = context.value;
  console.log(value, tabId);

  return (
    <Box
      sx={{
        padding: '20px 0',
        width: '100%',
        display: value === tabId ? 'block' : 'none',
      }}
    >
      {props.children}
    </Box>
  );
};

export default TabPanelMounted;
