import React from "react";
import PropTypes from "prop-types";

import "./screen.css";
import "./layout.css";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header/>

            <main className="content">{children}</main>

            <Footer/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;
