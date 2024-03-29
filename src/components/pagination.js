import React from "react";

const Pagination = ({ currentPage, numPages }) => {
    const previousUrl = currentPage === 2 ? "/" : `/pages/${currentPage - 1}`;

    return (
        <nav className="pagination" role="navigation">
            {currentPage !== 1 ? (
                <a className="newer-posts" href={previousUrl}>
                    <i className="fa fa-chevron-circle-left"></i> Prev
                </a>
            ) : (
                <div />
            )}

            <span className="page-number">
                Page {currentPage} of {numPages}
            </span>

            {currentPage < numPages ? (
                <a className="older-posts" href={`/pages/${currentPage + 1}`}>
                    Next <i className="fa fa-chevron-circle-right"></i>
                </a>
            ) : (
                <div />
            )}
        </nav>
    );
};

export default Pagination;
