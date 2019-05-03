import React from "react";

export default ({ post }) => (
    <article className="preview">
        <header>
            <h1 className="post-title"><a href={post.frontmatter.path}>{post.frontmatter.title}</a></h1>
            <div className="post-meta"><time className="post-date">{post.frontmatter.date}</time></div>
        </header>

        <section className="post-excerpt">
            <p>{post.frontmatter.excerpt}</p>

            <p className="readmore">
                <a href={post.frontmatter.path}>Read this article <i className="fa fa-chevron-circle-right"></i></a>
            </p>
        </section>
    </article>
);
