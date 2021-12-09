import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
          {node.author.name} - {node.date}
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

const mock = [
  {
    image:
      'https://images.unsplash.com/photo-1555432384-3b2fa7b650c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'All about K-Means Clustering',
    author: {
      name: 'Eric Zhu',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
    date: '01 Dec',
  },
  {
    image:
      'https://images.unsplash.com/photo-1602464729960-f95937746b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Gaussian Mixture Models Explained',
    author: {
      name: 'Eric Zhu',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '30 Nov',
  },
  {
    image:
      'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'What is Spectral Clustering?',
    author: {
      name: 'Eric Zhu',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '28 Nov',
  },
];

const Articles = () => {
  const theme = useTheme();
  return (
    <StaticQuery
      query={graphql`
        query {
          allBlogPosts: allContentfulBlogPost {
            nodes {
              contentful_id
              date
              createdAt
              author {
                name
              }
              body {
                raw
              }
              title
              image {
                gatsbyImageData(width: 2000)
              }
              gatsbyPath(filePath: "/blog/{contentfulBlogPost.title}")
              id
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

export default Articles;
