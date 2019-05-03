import React from 'react';
import Disqus from 'disqus-react';

export default class DisqusWrapper extends React.Component {
    render() {
        const disqusShortname = 'shibbir';
        const disqusConfig = {
            url: `https://shibbir.io${this.props.slug}`,
            title: this.props.title
        };

        return (
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        );
    }
}
