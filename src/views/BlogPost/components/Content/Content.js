/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import 'katex/dist/katex.min.css';

const Content = ({ data }) => {
  return (
    <Box maxWidth="100%">
      <Box
        sx={{
          px: {
            xs: 4,
            sm: 4,
            md: 6,
          },

          '& .blog-body': {
            '& p': {
              maxWidth: '100%',
              textAlign: 'left',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              '& .render-viewer-fatal, .render-viewer-error, .render-viewer-invalid': {
                display: 'none !important',
              },
            },
            '& img': {
              maxWidth: { xs: '90%', md: '50%' },
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
              display: 'block',
            },
              '& .embedVideo-iframe': {
                width: '100%',
              }
          },
        }}
      >
        <div
          className="blog-body"
          dangerouslySetInnerHTML={{
            __html: data.text.childMarkdownRemark.html,
          }}
        />
      </Box>
      <Box paddingY={4}>
        <Divider />
      </Box>
    </Box>
  );
};

Content.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.element,
      }),
    }),
    author: PropTypes.shape({
      name: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  }),
};

export default Content;
