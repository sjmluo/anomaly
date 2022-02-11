import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from 'views/BlogPost';
import { graphql } from 'gatsby';

import 'katex/dist/katex.min.css';

const BlogPostPage = ({ data }) => {
  return <BlogPost data={data.contentfulBlogPost} />;
};

BlogPostPage.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.object,
  }),
};

export default BlogPostPage;

export const query = graphql`
  query($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      author {
        name
      }
      title
      text {
        childMarkdownRemark {
          html
        }
      }
      createdAt(formatString: "DD MMMM YYYY")
    }
  }
`;
