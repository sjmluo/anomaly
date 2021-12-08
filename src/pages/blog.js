import React from 'react';
import Blog from 'views/Blog';
import {graphql} from "gatsby";

const BlogPage = () => {
  return <Blog />;
};

export const query = graphql`
    query {
      allContentfulBlogPost {
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
            gatsbyImageData(layout: FIXED, width: 75)
          }
          gatsbyPath(filePath: "/blog/{contentfulBlogPost.title}")
        }
      }
    }
`

export default BlogPage;
