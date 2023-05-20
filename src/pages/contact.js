import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout/Layout";

export default function Contact({ data }) {
  const {
    markdownRemark: { html },
  } = data;

  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
}

// export const pageQuery = graphql`
//   query ($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `;

export const query = graphql`
  {
    markdownRemark(frontmatter: { type: { eq: "bio" } }) {
      html
    }
  }
`;
