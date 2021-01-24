import React from "react";
import PropTypes from "prop-types";

import "../assets/css/screen.css";
import "../assets/css/site.css";

const Layout = ({ children }) => {
    return (
        <>
            <header id="site-head" role="banner">
                <h1 className="blog-title">
                    <a href="/">SHIBBIR AHMED</a>
                </h1>

                <nav className="menu" role="navigation">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/reading">Reading</a></li>
                    </ul>
                </nav>
            </header>

            {children}

            <footer className="site-footer" role="contentinfo">
                <div className="inner">
                    <section className="copyright">
                        &copy; {new Date().getFullYear()} <a href="/">SHIBBIR AHMED</a>. ALL RIGHTS RESERVED.
                    </section>
                </div>
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
