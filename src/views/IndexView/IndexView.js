import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Template, Form } from './components';

const IndexView = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });
  const theme = useTheme();

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });

  return (
    <Main>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://raw.githubusercontent.com/ericfzhu/demo/master/src/images/blue%20banner.png',
          )}
        />
        <Container>
          <Template />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://raw.githubusercontent.com/ericfzhu/demo/master/src/images/pink%20banner.png',
          )}
        />
        <Container>
          <Template />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://raw.githubusercontent.com/ericfzhu/demo/master/src/images/purple%20banner.png',
          )}
        />
        <Container>
          <Template />
        </Container>
      </Box>
      <Box
        minHeight={'82vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
        id={'contact-us'}
      >
        <Container>
          <Form />
        </Container>
      </Box>
    </Main>
  );
};

export default IndexView;
