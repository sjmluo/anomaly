import React from 'react';
import BlogPost from 'views/BlogPost';
import { graphql } from 'gatsby';

import 'katex/dist/katex.min.css';

const BlogPostPage = ({ data }) => {
  return <BlogPost data={data.contentfulBlogPost} />;
};

export default BlogPostPage;

export const query = graphql`
  query($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      author {
        name
      }
      title
      createdAt(formatString: "DD MMMM YYYY")
      body {
        raw
        references {
          contentful_id
          description
          gatsbyImageData(width: 1000)
          __typename
        }
      }
    }
  }
`;
