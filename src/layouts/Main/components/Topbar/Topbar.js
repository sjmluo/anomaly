import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Button } from 'gatsby-theme-material-ui';

import { ThemeModeToggler } from '../index';
import logo from '/src/images/logo.png';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Link
        display={'flex'}
        to="/"
        title="Contextually Situated Anomaly Detection"
        width={{ xs: 100, md: 120 }}
      >
        <Box component={'img'} src={logo} height={0.5} width={0.5} />
      </Link>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={6} marginRight={6}>
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
        <Box marginLeft={6} marginRight={6}>
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
        <ThemeModeToggler />
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={4}>
          <Button
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
              padding: 1,
              borderColor: alpha(theme.palette.divider, 0.2),
            }}
          >
            <MenuIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
