/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import aircraft from '/src/images/aircraft.svg';
import bridge from '/src/images/bridge.svg';
import building from '/src/images/building.svg';
import { FadeBox } from './Components';

const data = [
  {
    application: 'Aircraft',
    image: aircraft,
    description:
      'Aircraft often have difficulty being analyzed in the structural health monitoring field due to the large degree of false positives that can arise throughout standard operation. This is because aircraft undergo multiple, different flight phases (i.e. various context shifts), which makes it challenging to differentiate between time signal changes that have occurred either due to a change in flight pattern, or from actual damage.',
  },
  {
    application: 'Building',
    image: building,
    description:
      'It is common for buildings to be continually analyzed for the purpose of structural health monitoring. Typically vast sensor arrays of different kinds can be found throughout a building due to this. However, the main difficulty with buildings is the steady accrual of damage over time, which makes it hard to know when to trigger an alarm.',
  },
  {
    application: 'Bridge',
    image: bridge,
    description:
      'Bridges are subject to various forms of stresses on a daily basis, whether it be environmental (wind, rain, hail, changing temperature), pedestrian (walking, jumping, running), as well as dynamic, load-bearing tasks (trains, trucks, cars). As such, they represent a form of contextually-situated anomaly detection problem which necessitates careful phase-shift analysis, that also experiences co-variate shifting problems, whilst experiencing seasonal changes in load-bearing potential.',
  },
];

const Applications = () => {
  const theme = useTheme();

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={theme.palette.alternate.main}
      // data-aos={'fade-up'}
    >
      <Typography
        variant="h4"
        gutterBottom
        align={'center'}
        sx={{
          fontWeight: 900,
        }}
      >
        Applications
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
        {data.map((item, i) => (
          <Box maxWidth={300} marginTop={2} marginRight={8} key={i}>
            <FadeBox data={item} />
            {/*<Box component="img" height={1} width={1} src={item} alt="..." />*/}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Applications;
