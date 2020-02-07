import React from "react";
import PropTypes from "prop-types";

import "../assets/css/screen.css";
import "../assets/css/site.css";

const Layout = ({ children }) => {
    return (
        <>
            <header id="site-head" role="banner">
                <h1 className="blog-title">
                    <a href="/">Shibbir Ahmed</a>
                </h1>

                <nav className="menu" role="navigation">
                    <ul>
                        <li>
                            <a href="https://github.com/shibbir">
                                <i className="fa fa-github fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/shibbir_io">
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shibbirahmed/">
                                <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/1493274/shibbir-ahmed">
                                <i className="fa fa-stack-overflow fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/shibbir.io/">
                                <i className="fa fa-instagram fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="content">{children}</main>

            <footer className="site-footer" role="contentinfo">
                <div className="inner">
                    <section className="copyright">
                        &copy; {new Date().getFullYear()} <a href="/">SHIBBIR AHMED</a>. ALL RIGHTS RESERVED.
                    </section>
                    <section className="poweredby">
                        Proudly published with <a href="https://www.netlify.com/">netlify</a>
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
