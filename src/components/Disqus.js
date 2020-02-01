import React from "react";
import Disqus from "disqus-react";

export default ({ slug, title }) => {
    const disqusShortname = "shibbir";
    const disqusConfig = {
        url: `https://shibbir.io${slug}`,
        title: title
    };

    return <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};
