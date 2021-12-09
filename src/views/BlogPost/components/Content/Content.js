/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const Content = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <b className="font-bold"><font color={theme.palette.primary.main}>{text}</font></b>
        },
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { gatsbyImageData, description } = node.data.target
                return (
                    <GatsbyImage
                        image={getImage(gatsbyImageData)}
                        alt={description}
                        className="mb-10"
                    />
                )
            },
        }
    }
  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        {renderRichText(data.body, options)}
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

export default Content;
