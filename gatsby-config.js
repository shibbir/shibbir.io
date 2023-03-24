module.exports = {
    siteMetadata: {
        title: "Shibbir Ahmed",
        description: "Articles on software development.",
        author: "Shibbir Ahmed"
    },
    plugins: [
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [{
                    resolve: "gatsby-remark-images"
                }]
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Shibbir Ahmed",
                short_name: "Gatsby",
                start_url: "/",
                background_color: "#663399",
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/images/favicon.png"
            }
        },
        {
            resolve: "gatsby-plugin-disqus",
            options: { shortname: process.env.DISQUS_SHORTNAME }
        }
    ]
};
