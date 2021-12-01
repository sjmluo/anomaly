import React from 'react';
import Typed from 'react-typed';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h2"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          We are{' '}
          <Typography color={'primary'} component={'span'} variant={'inherit'}>
            <Typed
              strings={['mattis.', 'elementum.', 'pulvinar.']}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1500}
              loop={true}
            />
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
