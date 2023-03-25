import { Box } from '@mui/material';
import Header from './Header';

const Layout = (props: any) => {
  return (
    <Box>
      <Header />
      <Box sx={{ py: 6 }}>{props.children}</Box>
    </Box>
  );
};

export default Layout;
