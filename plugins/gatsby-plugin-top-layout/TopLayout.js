import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '../../src/components/Page';

// import 'react-lazy-load-image-component/src/effects/blur.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'react-image-lightbox/style.css';
// import 'aos/dist/aos.css';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/sjmluo/anomaly/master/src/images/logo.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Contextually Situated Anomaly Detection</title>
        <meta name="theme-color" content="#ffffff" />
        {/*<meta*/}
        {/*  name="description"*/}
        {/*  content="Template website description"*/}
        {/*/>*/}
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/*<meta*/}
        {/*  property="og:image"*/}
        {/*  content="https://raw.githubusercontent.com/ericfzhu/demo/master/src/images/blue%20banner.png"*/}
        {/*/>*/}
        <meta
          property="og:title"
          content="Contextually Situated Anomaly Detection"
        />
        {/*<meta*/}
        {/*  property="og:description"*/}
        {/*  content="Template website description"*/}
        {/*/>*/}
        <meta
          property="og:url"
          content="https://sjmluo.github.io/anomaly/"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      <Page>
        {props.children}
      </Page>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
