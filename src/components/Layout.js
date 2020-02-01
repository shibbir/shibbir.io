import React from "react";
import PropTypes from "prop-types";

import "./screen.css";
import "./site.css";

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
							<a href="https://github.com/shibbir">github</a>
						</li>
						<li>
							<a href="https://twitter.com/shibbir_io">twitter</a>
						</li>
						<li>
							<a href="https://about.me/shibbir">about</a>
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
						Proudly published with <a href="https://pages.github.com/">GitHub Pages</a>
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
