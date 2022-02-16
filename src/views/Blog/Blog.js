import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Articles } from './components';

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
    </Main>
  );
};

export default Blog;
