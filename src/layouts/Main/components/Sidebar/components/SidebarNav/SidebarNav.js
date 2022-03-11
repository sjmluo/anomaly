import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { Link } from 'gatsby-theme-material-ui';

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
          <Box
            component={'img'}
            src={
              'https://raw.githubusercontent.com/ericfzhu/demo/9778acc41dba64707e687c760af97e9aadac11e2/src/images/logo.svg'
            }
            height={0.5}
            width={0.5}
          />
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
