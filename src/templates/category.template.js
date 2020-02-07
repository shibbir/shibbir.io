import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";

export default function Posts({ data }) {
    const Posts = data.allMdx.edges.map(edge => (
        <article className="preview" key={edge.node.id}>
            <header>
                <h1 className="post-title">
                    <a href={`/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</a>
                </h1>
                <div className="post-meta">
                    <time className="post-date">Posted on {edge.node.frontmatter.date}</time> — in{" "}
                    <a href={`/categories/${edge.node.frontmatter.category}`}>{edge.node.frontmatter.category}</a>
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
            <SEO title="Blog" keywords={["gatsby", "react"]} />

            {Posts}
        </Layout>
    );
}

export const pageQuery = graphql`
    query($category: String) {
        allMdx(
            filter: { frontmatter: { category: { eq: $category } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                        excerpt
                        slug
                        category
                    }
                }
            }
        }
    }
`;
