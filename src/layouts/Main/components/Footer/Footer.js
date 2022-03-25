import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import { Link } from 'gatsby-theme-material-ui';

import logo from '/src/images/logo.png';

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'left'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display={'flex'} component="a" width={200}>
            <Link display={'flex'} width={80} to="/">
              <Box
                component={'img'}
                src={logo}
                height={1}
                width={1}
                title="Contextually Situated Anomaly Detection"
              />
            </Link>
          </Box>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' } }}
            alignItems={'center'}
          >
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
          </Box>
        </Box>
      </Grid>
      {/*<Grid item xs={12}>*/}
      {/*  <Typography*/}
      {/*    align={'center'}*/}
      {/*    variant={'subtitle2'}*/}
      {/*    color="text.secondary"*/}
      {/*    gutterBottom*/}
      {/*  >*/}
      {/*    &copy; template copyright*/}
      {/*  </Typography>*/}
      {/*</Grid>*/}
    </Grid>
  );
};

export default Footer;
