/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import 'katex/dist/katex.min.css';

const Content = ({ data }) => {
  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.text.childMarkdownRemark.html,
          }}
        />
      </Box>
      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Box>
            <Typography fontWeight={600}>{data.author.name}</Typography>
            <Typography color={'text.secondary'}>{data.createdAt}</Typography>
          </Box>
        </Box>
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
