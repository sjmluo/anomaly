import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Button } from 'gatsby-theme-material-ui';

import { NavItem } from './components';
import { ThemeModeToggler } from '../index';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { aboutUs: aboutUs, ourWork: ourWork } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Link
        display={'flex'}
        // component="a"
        to="/"
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
      </Link>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={6}>
          <Link
            underline="none"
            to="/team"
            color="text.primary"
            sx={{
              fontWeight: 'bold',
              ':hover': {
                color: 'text.secondary',
              },
            }}
          >
            TEAM
          </Link>
        </Box>
        <Box marginLeft={6} marginRight={6}>
          <Link
            underline="none"
            to="/blog"
            color="text.primary"
            sx={{
              fontWeight: 'bold',
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
  onContactUs: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
