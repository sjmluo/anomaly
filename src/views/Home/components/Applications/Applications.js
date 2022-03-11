/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import aircraft from '/src/images/aircraft.svg';
import bridge from '/src/images/bridge.svg';
import bookshelf from '/src/images/bookshelf.svg';

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
        {[aircraft, bridge, bookshelf].map((item, i) => (
          <Box maxWidth={300} marginTop={2} marginRight={8} key={i}>
            <Box component="img" height={1} width={1} src={item} alt="..." />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Applications;
