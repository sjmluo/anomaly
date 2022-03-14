import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const FadeBox = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box component={Button} width={1} height={1} onClick={handleChange}>
      <Box
        width={1}
        height={1}
        component={Card}
        boxShadow={0}
        bgcolor={'background.block'}
        // position='absolute'
        left='50%'
        top='50%'
        transform='translate(-50%, -50%)'
        sx={{
            overflow:'hidden',
            cursor:'pointer',
            '.container:hover .flap::after': {
                transform: 'translatex(300px)'
            },
            '.container:hover .flap::before': {
                transform: 'translatex(300px)'
            }
        }}
      >
          <Typography
              class="content"
              height={1}
              width={1}
              position='absolute'
              translate='translatey(-50%)'
              textAlign='justify'
          >{data.description}</Typography>
        <Box
          class="flap"
          component="img"
          height={1}
          width={1}
          src={data.image}
          alt="..."
          sx={{
              "& ::after": {
                  position: 'absolute',
                  // content: "",
                  height: '100%',
                  width: '50%',
                  right: '0',
                  // background: url("https://pbs.twimg.com/profile_images/1347260174176710658/2GfSZ1i__400x400.jpg") white;
                  // background-position: -200px;
              // background-repeat: no-repeat,
              transition: '1s',
              },
              '& ::before': {
                  position: 'absolute',
                  // content: "",
                  height: '100%',
                  width: '50%',
                  // background: url("https://pbs.twimg.com/profile_images/1347260174176710658/2GfSZ1i__400x400.jpg") white;
                  // background-position: -200px;
                  // background-repeat: no-repeat,
                  transition: '1s',
              }
          }}
        />
      </Box>
    </Box>
  );
};

FadeBox.propTypes = {};

export default FadeBox;
