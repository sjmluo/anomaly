import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import {
  mlin,
  gvio,
  lazzizi,
  malamdari,
  pcheema,
  sluo,
  twang,
  ychin,
} from '/src/images/people';


const mock = [
  {
    name: 'Simon Luo',
    image: sluo,
    role: 'Project Lead',
  },
  {
    name: 'Lamiae Azzizi',
    image: lazzizi,
    role: 'Project Personnel / Technical Lead',
  },
  {
    name: 'Prasad Cheema',
    image: pcheema,
    role: 'Technical Lead',
  },
  {
    name: 'Gareth Vio',
    image: gvio,
    role: 'Technical Advisor',
  },
  {
    name: 'Mehrisadat Makki Alamdari',
    image: malamdari,
    role: 'Technical Advisor',
  },
  {
    name: 'Tony Wang',
    image: twang,
    role: 'Engineering Lead',
  },
  {
    name: 'Yee Chin',
    image: ychin,
    role: 'Engineering Lead',
  },
  {
    name: 'Michael Lin',
    image: mlin,
    role: 'placeholder',
  }
];

const Main = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.image}
                  title={item.name}
                  sx={{
                    height: { xs: 340, md: 400 },
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
                <Box component={CardContent}>
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant={'body2'} color="text.secondary">
                    {item.role}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
