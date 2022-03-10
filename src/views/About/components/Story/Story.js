/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import about from '../../../../images/about.png';
import CardMedia from '@mui/material/CardMedia';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our story
            </Typography>
            <Typography component={'p'}>
              The use of sensor technologies underpins everyday life for
              Australians in many ways; ranging from wearable medical devices,
              all the way to localized smart home network devices. Such sensors
              tend to work in a distributed setting, whether in their own local
              network, or over the cloud. Thus, there is an urgent call to
              action when it comes developing solutions for the efficacy of
              sensor array networks for the intelligent monitoring of damage
              detection, damage localization, and context characterization. As a
              team, we have collectively recognized that there is a need to push
              for bleeding edge developments in the space of structural health
              monitoring, and aim to provide compelling, and interpretable
              solutions in this space.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <CardMedia image={about} component="img" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
