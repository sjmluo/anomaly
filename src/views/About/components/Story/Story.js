/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
              Fusce pellentesque, ligula quis pharetra convallis, elit ipsum congue velit, sed tempor orci eros nec
              magna. Pellentesque feugiat lacus ut magna suscipit porta. Praesent porta neque a auctor tincidunt. In
              imperdiet lorem ut metus pellentesque, malesuada egestas mauris mattis.
              <br />
              <br />
              Curabitur bibendum sem eu luctus egestas. Sed non tincidunt urna. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Fusce in nisi et ligula imperdiet pharetra. Donec viverra
              augue a pharetra viverra. Donec porttitor at enim sed pellentesque.
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
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
