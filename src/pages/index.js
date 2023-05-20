import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout/Layout";

export default function Index({ data }) {
  const {
    site: {
      siteMetadata: { title, name },
    },
  } = data;

  return (
    <Layout>
      <h1>{title}</h1>

      <p>{name}</p>
      <Link to="/contact">Contact</Link>
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        name
      }
    }
  }
`;
