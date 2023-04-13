import { Box } from '@mui/material';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (props: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box
      sx={{
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        // flexDirection: 'column',
      }}
    >
      <Box sx={{ flex: '1 1 100%' }}>
        <Header
          sidebarOpen={sidebarOpen}
          onSidebarToggle={() => setSidebarOpen(prev => !prev)}
        />

        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            width: '100%',
          }}
        >
          <Box sx={{ py: 6, flex: '1 1 100%' }}>{props.children}</Box>
        </Box>
      </Box>

      <Sidebar open={sidebarOpen} />
    </Box>
  );
};

export default Layout;
