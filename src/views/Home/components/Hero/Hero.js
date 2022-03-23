import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import about from '/src/images/about.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './style.css';

const Hero = () => {
  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        {/*<Box data-aos={isMd ? 'fade-right' : 'fade-up'}>*/}
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            sx={{ fontWeight: 700 }}
          >
            Building the future in robust, interpretable, and scalable solutions
            for distributed machine learning problems.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
      >
        <Box
          maxWidth={540}
          maxHeight={323}
          width={1}
          height={1}
          sx={{
            objectFit: 'cover',
            boxShadow: '19px 20px 0px 0 rgb(140 152 164 / 13%)',
          }}
        >
          <Zoom>
            <Box component="img" src={about} height={'100%'} width={'100%'}/>
          </Zoom>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
