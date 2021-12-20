/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const Content = ({ data }) => {
  const theme = useTheme();
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <b>
          <font color={theme.palette.primary.main}>{text}</font>
        </b>
      ),
      [MARKS.ITALIC]: (text) => (
        <i>
          <font color={theme.palette.primary.main}>{text}</font>
        </i>
      ),
      [MARKS.UNDERLINE]: (text) => <script src={text}/>,
      [MARKS.CODE]: (text) => <TeX math={text} />,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noreferrer">
          {children}
        </a>
      ),
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <code><script src={children}/></code>,

      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,

      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      // [BLOCKS.PARAGRAPH]: (node, children) => {
      //   if (node.content[0].value === '') {
      //     return <br />;
      //   } else {
      //     return <p>{children}</p>;
      //   }
      // },
      [BLOCKS.QUOTE]: (children) => (
        <blockquote>
          <>"{children.content[0].content[0].value}"</>
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target;
        if (description === "dummy") {
          return
        }
        return (
          <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
        );
      },
    },
  };
  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        {renderRichText(data.body, options)}
      </Box>
      <code>{`gist:weirdpattern/ce54fdb1e5621b5966e146026995b974#syntax.text`}</code>
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
    body: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string
    }),
    createdAt: PropTypes.string
  })
};

export default Content;
