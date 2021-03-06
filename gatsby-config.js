module.exports = {
    siteMetadata: {
        title: "Shibbir Ahmed",
        description: "Articles on software engineering.",
        author: "Shibbir Ahmed"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images"
                    }
                ]
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Shibbir Ahmed",
                short_name: "GatsbyJS",
                start_url: "/",
                background_color: "#f7f0eb",
                theme_color: "#a2466c",
                display: "standalone",
                icon: "src/images/favicon.png"
            }
        }
    ]
};
