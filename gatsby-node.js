const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        resolve(
            graphql(`{
                    allMdx(
                        sort: { order: DESC, fields: [frontmatter___date] },
                        limit: 1000
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    path
                                }
                            }
                        }
                    }
            }`).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                const posts = result.data.allMdx.edges.filter(item => item.node.frontmatter.type !== 'page');
                const postsPerPage = 4;
                const numPages = Math.ceil(posts.length / postsPerPage);

                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path: i === 0 ? "/" : `/pages/${i + 1}`,
                        component: path.resolve("./src/templates/posts.template.js"),
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            currentPage: i + 1,
                            numPages: numPages
                        }
                    });
                });

                posts.forEach((post) => {
                    createPage({
                        path: post.node.frontmatter.path,
                        component: path.resolve("./src/templates/post.template.js")
                    })
                });
            })
        );
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: "slug",
            node,
            value
        });
    }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.mdx?$/,
                    use: [
                        "babel-loader",
                        "@mdx-js/loader"
                    ]
                }
            ]
        }
    });
}
