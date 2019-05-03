import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';
import Pagination from '../components/Pagination';

export default class Posts extends React.Component {
    render() {
        const Posts = this.props.data.allMdx.edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />);

        return (
            <Layout>
                <SEO title="Home" keywords={['gatsby', 'react']} />

                {Posts}

                <Pagination
                    numPages={this.props.pageContext.numPages}
                    currentPage={this.props.pageContext.currentPage}
                />
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query pageQuery($skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        path
                        title
                        excerpt
                    }
                }
            }
        }
    }
`
