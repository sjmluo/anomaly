import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import { Link } from 'gatsby-theme-material-ui';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display={'flex'} component="a" width={200}>
            <Link display={'flex'} width={80} to="/">
              <Box
                component={'img'}
                src={
                  mode === 'light'
                    ? 'https://raw.githubusercontent.com/ericfzhu/demo/9778acc41dba64707e687c760af97e9aadac11e2/src/images/logo.svg'
                    : 'https://raw.githubusercontent.com/ericfzhu/demo/9778acc41dba64707e687c760af97e9aadac11e2/src/images/logo.svg'
                }
                height={1}
                width={1}
                title="website title"
              />
            </Link>
            <Box
              display={'flex'}
              component="a"
              width={40}
              href="https://www.linkedin.com/"
              target="_blank"
              marginTop={0.25}
              marginLeft={4}
            >
              <Box
                component={'img'}
                src="https://raw.githubusercontent.com/ericfzhu/demo/03fa58419e1ef3c8461dd7d3395e6d0c4a9d6023/src/images/linkedin.svg"
                height={1}
                width={1}
                color={'primary'}
              />
            </Box>
            <Box
              display={'flex'}
              component="a"
              width={40}
              href="https://www.twitter.com/"
              target="_blank"
              marginTop={0.25}
              marginLeft={2}
            >
              <Box
                component={'img'}
                src="https://raw.githubusercontent.com/ericfzhu/demo/03fa58419e1ef3c8461dd7d3395e6d0c4a9d6023/src/images/twitter.svg"
                height={1}
                width={1}
              />
            </Box>
            <Box
              display={'flex'}
              component="a"
              width={40}
              href="https://www.github.com/"
              target="_blank"
              marginTop={0.25}
              marginLeft={2}
            >
              <Box
                component={'img'}
                src="https://raw.githubusercontent.com/ericfzhu/demo/03fa58419e1ef3c8461dd7d3395e6d0c4a9d6023/src/images/github.svg"
                height={1}
                width={1}
              />
            </Box>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={4}>
              <Link
                underline="none"
                // component="a"
                to="/about"
                color="text.primary"
                variant={'subtitle2'}
              >
                About
              </Link>
            </Box>
            <Box marginTop={1} marginRight={4}>
              <Link
                underline="none"
                // component="a"
                to="/team"
                color="text.primary"
                variant={'subtitle2'}
              >
                Team
              </Link>
            </Box>
            <Box marginTop={1}>
              <Link
                underline="none"
                // component="a"
                to="/blog"
                color="text.primary"
                variant={'subtitle2'}
              >
                Blog
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; template copyright
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
