import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';

const CardBox = ({ data }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box component={Button} width={1} height={1} onClick={handleOpen}>
        <Box
          width={1}
          height={1}
          component={Card}
          boxShadow={0}
          bgcolor={'alternate.main'}
          sx={{
            boxShadow: 1,
          }}
        >
          <CardContent sx={{ padding: 3 }}>
            <ListItem component="div" disableGutters sx={{ padding: 0 }}>
              <ListItemAvatar sx={{ marginRight: 3 }}>
                <Avatar
                  src={data.image}
                  variant={'rounded'}
                  sx={{ width: 100, height: 100, borderRadius: 2 }}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{ margin: 0 }}
                primary={data.name}
                secondary={data.role}
                primaryTypographyProps={{ variant: 'h5', fontWeight: 700 }}
                secondaryTypographyProps={{ variant: 'subtitle1' }}
              />
            </ListItem>
          </CardContent>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'lg'}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 4,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            bgcolor: 'modal',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              p: { xs: 2, md: 4 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              width: 1,
              height: 1,
              boxShadow: 0,
            }}
          >
            <Avatar
              src={data.image}
              variant={'rounded'}
              sx={{
                width: theme.spacing(20),
                height: theme.spacing(20),
              }}
            />
            <Box marginLeft={{ xs: 0, sm: 4 }} marginTop={{ xs: 4, sm: 0 }}>
              <Box display={'flex'} alignItems={'center'} marginBottom={1}>
                <Typography fontWeight={700} variant={'h5'}>
                  {data.name}
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Typography>{data.role}</Typography>
              </Stack>
              <Typography variant={'subtitle2'} component={'p'}>
                {data.about}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Dialog>
    </Box>
  );
};

CardBox.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  }),
};

export default CardBox;
