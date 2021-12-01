import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
  Application,
  Form,
} from './components';

const About = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Story />
      </Container>
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      {/*<Container>*/}
      {/*  <Team />*/}
      {/*</Container>*/}
      {/*<Box bgcolor={'alternate.main'}>*/}
      {/*  <Container>*/}
      {/*    <Partners />*/}
      {/*  </Container>*/}
      {/*</Box>*/}
      {/*<Contact />*/}
      {/*<Container>*/}
      {/*  <Gallery />*/}
      {/*</Container>*/}
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

export default About;
