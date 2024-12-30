import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => (
    <Layout>
        <main className="content" role="main">
            <Seo title="About" />
            <article className="post">
                <section className="post-content">
                    <h1>About Me!</h1>
                    <p>
                        Software Engineer with 12+ years of experience architecting, implementing, leading, and
                        launching web-based software products. Skilled in agile processes, backend and frontend
                        application development, and object-oriented and functional programming. Excel in team
                        collaboration and solution brainstorming. Provides leadership, training & feedback to ensure
                        that the team performs to the best of their abilities & delivers consistently.
                    </p>

                    <h3>You can find more about me in:</h3>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/shibbirahmed">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/shibbir_io">Twitter</a>
                        </li>
                        <li>
                            <a href="https://github.com/shibbir">GitHub</a>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    </Layout>
);

export default About;
