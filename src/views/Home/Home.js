import React from 'react';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, Story, Mission, Applications, Team } from './components';

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
      <Container>
        <Applications />
      </Container>
      <Container>
        <Team />
      </Container>
    </Main>
  );
};

export default Home;
