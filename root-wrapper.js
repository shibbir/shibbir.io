import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Highlight, themes } from "prism-react-renderer";

const components = {
    pre: props => {
        const className = props.children.props.className || "";
        const matches = className.match(/language-(?<lang>.*)/);

        return (
            <Highlight
                code={props.children.props.children.trim()}
                language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""}
                theme={themes.nightOwl}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        );
    }
};

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;
