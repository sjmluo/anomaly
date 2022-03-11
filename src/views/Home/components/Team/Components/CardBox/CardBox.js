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
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

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
                primaryTypographyProps={{ variant: 'h6', fontWeight: 700 }}
                secondaryTypographyProps={{ variant: 'subtitle1' }}
              />
            </ListItem>
          </CardContent>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box bgcolor={'alternate.main'}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 1000,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Card
              sx={{
                p: { xs: 2, md: 4 },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: 1,
                height: 1,
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
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 1, md: 2 }}
                  marginY={2}
                  alignItems={'flex-start'}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={18}
                      height={18}
                      color={'primary.dark'}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </Box>
                    <Typography color={'primary'} variant={'subtitle2'}>
                      {'first.last@gmail.com'}
                    </Typography>
                  </Box>
                </Stack>
                <Typography variant={'subtitle2'} component={'p'}>
                  {data.about}
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Modal>
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
