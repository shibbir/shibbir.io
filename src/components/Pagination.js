import React from 'react';

export default class Pagination extends React.Component {
    render() {
        const { currentPage, numPages } = this.props;
        const previousUrl = currentPage === 2 ? '/' : `/pages/${currentPage - 1}`;

        return (
            <nav className="pagination" role="navigation">
                {currentPage !== 1 ? (
                    <a className="newer-posts" href={previousUrl}><i className="fa fa-chevron-circle-left"></i> Newer</a>
                ) : (
                    <div/>
                )}

                <span className="page-number">Page {currentPage} of {numPages}</span>

                {currentPage < numPages ? (
                    <a className="older-posts" href={`/pages/${currentPage + 1}`}>Older <i className="fa fa-chevron-circle-right"></i></a>
                ) : (
                    <div/>
                )}
            </nav>
        )
    }
};
