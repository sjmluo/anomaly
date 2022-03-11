import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Container from 'components/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import about from '../../../../images/about.png';

const Hero = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Building the future in robust, interpretable, and scalable
              solutions for distributed machine learning problems.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
            </Typography>
          </Box>
          {/*<Box*/}
          {/*    display="flex"*/}
          {/*    flexDirection={{ xs: 'column', sm: 'row' }}*/}
          {/*    alignItems={{ xs: 'stretched', sm: 'flex-start' }}*/}
          {/*>*/}
          {/*    <Button*/}
          {/*        variant="contained"*/}
          {/*        color="primary"*/}
          {/*        size="large"*/}
          {/*        fullWidth={isMd ? false : true}*/}
          {/*    >*/}
          {/*        Case studies*/}
          {/*    </Button>*/}
          {/*    <Box*/}
          {/*        component={Button}*/}
          {/*        color="primary"*/}
          {/*        size="large"*/}
          {/*        marginTop={{ xs: 2, sm: 0 }}*/}
          {/*        marginLeft={{ sm: 2 }}*/}
          {/*        fullWidth={isMd ? false : true}*/}
          {/*        endIcon={*/}
          {/*            <Box*/}
          {/*                component={'svg'}*/}
          {/*                xmlns="http://www.w3.org/2000/svg"*/}
          {/*                fill="currentColor"*/}
          {/*                viewBox="0 0 20 20"*/}
          {/*                width={24}*/}
          {/*                height={24}*/}
          {/*            >*/}
          {/*                <path*/}
          {/*                    fillRule="evenodd"*/}
          {/*                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
          {/*                    clipRule="evenodd"*/}
          {/*                />*/}
          {/*            </Box>*/}
          {/*        }*/}
          {/*    >*/}
          {/*        Learn more*/}
          {/*    </Box>*/}
          {/*</Box>*/}
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        sx={{
          '& .lazy-load-image-background.lazy-load-image-loaded': {
            width: '100%',
            height: '100%',
          },
        }}
      >
        {/*<Box*/}
        {/*    component={LazyLoadImage}*/}
        {/*    height={1}*/}
        {/*    width={1}*/}
        {/*    src={'https://assets.maccarianagency.com/backgrounds/img8.jpg'}*/}
        {/*    alt="..."*/}
        {/*    effect="blur"*/}
        {/*    borderRadius={2}*/}
        {/*    maxWidth={600}*/}
        {/*    maxHeight={500}*/}
        {/*    sx={{*/}
        {/*        objectFit: 'cover',*/}
        {/*        boxShadow: '19px 20px 0px 0 rgb(140 152 164 / 13%)',*/}
        {/*        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',*/}
        {/*    }}*/}
        {/*/>*/}
        <Box
          maxWidth={600}
          maxHeight={500}
          width={1}
          height={1}
          sx={{
            objectFit: 'cover',
            boxShadow: '19px 20px 0px 0 rgb(140 152 164 / 13%)',
          }}
        >
          <CardMedia image={about} component="img" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
