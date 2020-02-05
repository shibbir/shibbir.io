import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Pagination from "../components/pagination";

export default function Posts({ data, pageContext }) {
    const Posts = data.allMdx.edges.map(edge => (
        <article className="preview" key={edge.node.id}>
            <header>
                <h1 className="post-title">
                    <a href={`/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</a>
                </h1>
                <div className="post-meta">
                    <time className="post-date">{edge.node.frontmatter.date}</time>
                </div>
            </header>

            <section className="post-excerpt">
                <p>{edge.node.frontmatter.excerpt}</p>

                <p className="readmore">
                    <a href={`/${edge.node.frontmatter.slug}`}>
                        Read this article <i className="fa fa-chevron-circle-right"></i>
                    </a>
                </p>
            </section>
        </article>
    ));

    return (
        <Layout>
            <SEO title="Home" keywords={["gatsby", "react"]} />

            {Posts}

            <Pagination numPages={pageContext.numPages} currentPage={pageContext.currentPage} />
        </Layout>
    );
}

export const pageQuery = graphql`
    query pageQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
            edges {
                node {
                    id
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                        excerpt
                        slug
                    }
                }
            }
        }
    }
`;
