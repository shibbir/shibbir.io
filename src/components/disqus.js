import React from "react";
import { Disqus } from "gatsby-plugin-disqus";

const DisqusComponent = ({ slug, title }) => {
    const config = {
        url: `https://shibbir.io${slug}`,
        identifier: slug,
        title
    };

    return <Disqus config={config} />;
};

export default DisqusComponent;
