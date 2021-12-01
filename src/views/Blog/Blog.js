import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  FooterNewsletter,
  Articles,
  Forms,
} from './components';
import {Form} from "../About/components";

const Blog = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box bgcolor={'main'}>
        <Container>
          <Articles />
        </Container>
      </Box>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
        <Box
            minHeight={'82vh'}
            display={'flex'}
            alignItems={'center'}
            bgcolor={'main'}
            id={"contact-us"}
        >
            <Container>
                <Form />
            </Container>
        </Box>
    </Main>
  );
};

export default Blog;
