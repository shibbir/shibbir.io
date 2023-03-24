const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                            slug
                            category
                        }
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("Error loading MDX result", result.errors);
    }

    const posts = result.data.allMdx.edges;
    const postsPerPage = 5;
    const numPages = Math.ceil(posts.length / postsPerPage);
    const postTemplate = path.resolve("./src/templates/post.template.js");

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? "/" : `/pages/${i + 1}`,
            component: path.resolve("./src/templates/posts.template.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage: i + 1,
                numPages
            }
        });
    });

    posts.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: { id: node.id }
        });

        createPage({
            path: `categories/${node.frontmatter.category}`,
            component: path.resolve("./src/templates/category.template.js"),
            context: { category: node.frontmatter.category }
        });
    });
};
