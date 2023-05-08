import React from "react";
import { graphql, Link } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Pagination from "../components/pagination";

export default function Posts({ data, pageContext }) {
    const Posts = data.allMdx.edges.map(edge => (
        <article className="preview" key={edge.node.id}>
            <header>
                <h1 className="post-title">
                    <Link to={`/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                </h1>
                <div className="post-meta">
                    <time className="post-date">Posted on {edge.node.frontmatter.date}</time> — in{" "}
                    <Link to={`/categories/${edge.node.frontmatter.category}`}>{edge.node.frontmatter.category}</Link>
                </div>
            </header>

            <section className="post-excerpt">
                <p>{edge.node.frontmatter.excerpt}</p>

                <p className="readmore">
                    <Link to={edge.node.frontmatter.slug}>
                        Read this article <i className="fa fa-chevron-circle-right"></i>
                    </Link>
                </p>
            </section>
        </article>
    ));

    return (
        <Layout>
            <Seo title="Blog" keywords={["gatsby", "react"]} />

            {Posts}

            <Pagination numPages={pageContext.numPages} currentPage={pageContext.currentPage} />
        </Layout>
    );
}

export const query = graphql`
    query ($skip: Int!, $limit: Int!) {
        allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
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
