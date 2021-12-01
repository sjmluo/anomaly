import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Articles, Form } from './components';

const Blog = () => {

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
        id={'contact-us'}
      >
        <Container>
          <Form />
        </Container>
      </Box>
    </Main>
  );
};

export default Blog;
