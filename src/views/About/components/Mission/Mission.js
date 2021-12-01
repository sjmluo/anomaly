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
              Nulla et pharetra tellus. Etiam commodo pellentesque rhoncus.
              Curabitur lobortis a turpis quis gravida. Integer ultricies risus
              sed enim luctus, quis maximus eros consectetur. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
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
              Integer et faucibus dolor. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Duis eu ligula
              iaculis, vehicula orci non, facilisis lorem. Mauris euismod
              imperdiet leo suscipit sodales. Phasellus dignissim mollis sapien,
              sed tincidunt nisi auctor eget.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;
