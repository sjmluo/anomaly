import React from 'react';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {Hero, Story, Mission, Applications } from './components';

const Home = () => {
  return (
    <Main colorInvert={true}>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Story />
      </Container>
      <Container>
        <Mission />
      </Container>
      {/*<Container maxWidth={800} paddingY={'0 !important'}>*/}
      {/*  <Divider />*/}
      {/*</Container>*/}
        <Container>
            <Applications/>
        </Container>
    </Main>
  );
};

export default Home;
