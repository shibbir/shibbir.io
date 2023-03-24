import React from "react";
import { graphql, Link } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Disqus from "../components/disqus";

function PostTemplate({ data: { mdx }, children }) {
    return (
        <Layout>
            <main className="content" role="main">
                <article className="post">
                    <header>
                        <h1 className="post-title">{mdx.frontmatter.title}</h1>
                        <div className="post-meta">
                            <time className="post-date">Posted on {mdx.frontmatter.date}</time> — in{" "}
                            <Link to={`/categories/${mdx.frontmatter.category}`}>{mdx.frontmatter.category}</Link>
                        </div>
                    </header>

                    <section className="post-content">
                        {children}
                    </section>

                    <br />

                    <Disqus slug={mdx.frontmatter.slug} title={mdx.frontmatter.title} />
                </article>
            </main>
        </Layout>
    );
};

export const Head = ({ data: { mdx } }) => <Seo title={mdx.frontmatter.title} />;

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            id
            frontmatter {
                slug
                title
                category
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;

export default PostTemplate;
