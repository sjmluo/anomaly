/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import 'katex/dist/katex.min.css';

const Content = ({ data }) => {
  return (
    <Box>
      <Box
        sx={{
          px: {
            xs: 0,
            sm: 4,
            md: 6,
          },
          maxWidth: '1100px',
          '& .blog-body': {
            '& div, img': {
              maxWidth: '100%',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
            },
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
