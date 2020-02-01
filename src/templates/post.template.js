import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import Disqus from "../components/disqus";

export default ({ data: { mdx } }) => {
    const { frontmatter } = mdx;

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
                        <div className="post-meta">
                            <time className="post-date">{frontmatter.date}</time>
                        </div>
                    </header>

                    <section className="post-content">
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </section>

                    <br />

                    <Disqus slug={frontmatter.slug} title={frontmatter.title} />
                </article>
            </main>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                slug
                title
                category
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
