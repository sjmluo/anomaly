import React from 'react';
import Box from '@mui/material/Box';

import { Link } from 'gatsby-theme-material-ui';
import logo from '/src/images/logo.png';

const SidebarNav = () => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="template title"
          width={{ xs: 100, md: 120 }}
        >
          <Box component={'img'} src={logo} height={0.5} width={0.5} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Link
            underline="none"
            to="/"
            color="text.primary"
            sx={{
              ':hover': {
                color: 'text.secondary',
              },
            }}
          >
            HOME
          </Link>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Link
            underline="none"
            to="/blog"
            color="text.primary"
            sx={{
              ':hover': {
                color: 'text.secondary',
              },
            }}
          >
            BLOG
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {};

export default SidebarNav;
