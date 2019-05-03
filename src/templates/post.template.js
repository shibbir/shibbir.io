import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

import Disqus from "../components/Disqus";
import Layout from "../components/Layout";

export default ({ data: { mdx } }) => {
    const { fields, frontmatter } = mdx;

    return (
        <Layout>
            <main className="content" role="main">
                <article className="post">
                    <Helmet>
                        <title>{frontmatter.title}</title>
                    </Helmet>

                    <header>
                        <h1 className="post-title">{frontmatter.title}</h1>
                        <div className="post-meta tags">Posted in {frontmatter.category}</div>
                        <div className="post-meta"><time className="post-date">{frontmatter.date}</time></div>
                    </header>

                    <section className="post-content"><MDXRenderer>{mdx.code.body}</MDXRenderer></section>

                    <br/>

                    <Disqus slug={fields.slug} title={frontmatter.title} />
                </article>
            </main>
        </Layout>
    );
}

export const pageQuery = graphql`
    query ($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
            id
            fields {
                slug
            }
            frontmatter {
                path
                title
                category
                date(formatString: "MMMM DD, YYYY")
            }
            code {
                body
            }
        }
    }
`;
