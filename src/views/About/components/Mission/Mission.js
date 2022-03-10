/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Mission = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our mission
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              • We are a <b>solutions-oriented team</b>, focused on solving the
              many outstanding problems that currently exist in the structural
              health monitoring field.
              <br />• We <b>aim to innovate</b> several technologies within
              Australia for the distributed sensor problem that focus on time
              series applications.
              <br />• We are <b>collaborative in nature</b>, and welcome the
              creation of new value, especially when we can convert theoretical
              intuitions into experimental success.
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
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our philosophy
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              We are motivated by a four-point design philosophy that focuses on
              the principles of adaptability, scalability, interpretability, and
              bleeding-edge innovation when comes to solving distributed
              learning problems which focus on contextually situated anomaly
              detection problems.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;
