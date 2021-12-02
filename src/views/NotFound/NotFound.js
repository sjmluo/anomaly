import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Main from 'layouts/Main';
import Container from 'components/Container';

const NotFound = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        bgcolor={theme.palette.alternate.main}
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
        marginTop={-12}
        paddingTop={12}
      >
        <Container>
          <Grid container>
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Box>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.secondary"
                  align={isMd ? 'left' : 'center'}
                >
                  Oops! Looks like you followed a bad link.
                </Typography>
                <Box
                  marginTop={4}
                  display={'flex'}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    size="large"
                    href={'/'}
                  >
                    Back home
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item container justifyContent={'center'} xs={12} md={6}>
              <Box height={1} width={1} maxWidth={500}>
                <Box
                  component={'img'}
                  src={
                    'https://raw.githubusercontent.com/ericfzhu/demo/e49718beec54be5614f8164c9f8707baaa88a5a6/src/images/404.svg'
                  }
                  width={1}
                  height={1}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.8)'
                        : 'none',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default NotFound;
