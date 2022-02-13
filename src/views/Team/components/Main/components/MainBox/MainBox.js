import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Popup } from '../index';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from "@mui/material/styles";

const MainBox = ({ item }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
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
          filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
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
      <Box flexGrow={1} />
      <Box component={CardActions} justifyContent={'flex-start'}>
        <Button
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
          onClick={() => setOpen(true)}
        >
          Bio
        </Button>
        <Popup
          open={open}
          onClose={() => setOpen(false)}
          item={item}
        />
      </Box>
    </Box>
  );
};

MainBox.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  }),
};

export default MainBox;