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
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            showCaptions: true,
                            markdownCaptions: true,
                            quality: 100,
                            maxWidth: 900
                        }
                    }
                ]
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
                display: "minimal-ui",
                icon: "src/assets/favicon.png"
            }
        },
        {
            resolve: "gatsby-plugin-disqus",
            options: { shortname: process.env.DISQUS_SHORTNAME }
        },
        {
            resolve: "gatsby-omni-font-loader",
            options: {
                enableListener: true,
                preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
                web: [
                    {
                        name: "Open Sans",
                        file: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
                    }
                ]
            }
        }
    ]
};
