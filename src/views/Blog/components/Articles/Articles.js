import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { graphql, StaticQuery } from 'gatsby';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button } from 'gatsby-theme-material-ui';

const Blog = ({ node, theme }) => (
  <Box
    component={Card}
    width={1}
    height={1}
    borderRadius={0}
    boxShadow={0}
    display={'flex'}
    flexDirection={{ xs: 'column', md: 'row' }}
    sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
  >
    <Box
      sx={{
        width: { xs: 1, md: '30%' },
        '& .lazy-load-image-loaded': {
          height: 1,
          display: 'flex !important',
        },
      }}
    >
      {node.image.gatsbyImageData && (
        <Box
          component={GatsbyImage}
          height={'100%'}
          width={'100%'}
          image={node.image.gatsbyImageData}
          effect="blur"
          sx={{
            objectFit: 'cover',
            maxHeight: 200,
            borderRadius: 2,
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      )}
    </Box>
    <CardContent
      sx={{
        width: { xs: 1, md: '70%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography fontWeight={700} sx={{ textTransform: 'uppercase' }}>
        {node.title}
      </Typography>
      <Box marginY={1}>
        <Typography
          variant={'caption'}
          color={'text.secondary'}
          component={'i'}
        >
          {node.createdAt}
        </Typography>
      </Box>
      <Typography color="text.secondary">
        {node.description.description}
      </Typography>
      <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
        <Button
          to={node.gatsbyPath}
          endIcon={
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </Box>
          }
        >
          Read More
        </Button>
      </Box>
    </CardContent>
  </Box>
);

const Articles = () => {
  const theme = useTheme();
  return (
    <StaticQuery
      query={graphql`
        query {
          allBlogPosts: allContentfulBlogPost(
            sort: { fields: [createdAt], order: DESC }
           ) {
            nodes {
              createdAt(formatString: "DD MMMM YYYY")
              title
              image {
                gatsbyImageData(width: 2000)
              }
              gatsbyPath(filePath: "/blog/{contentfulBlogPost.title}")
              description {
                description
              }
            }
          }
        }
      `}
      render={(data) => (
        <Box>
          <Grid container spacing={4}>
            {data.allBlogPosts.nodes.map((node, i) => (
              <Grid item xs={12} key={i}>
                <Blog node={node} key={node.id} theme={theme} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    />
  );
};

Blog.propTypes = {
  node: PropTypes.shape({
    image: PropTypes.shape({
      gatsbyImageData: PropTypes.object,
    }),
    author: PropTypes.shape({
      name: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    description: PropTypes.shape({
      description: PropTypes.string,
    }),
    gatsbyPath: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      mode: PropTypes.string,
    }),
  }),
};

export default Articles;
