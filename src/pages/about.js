import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => (
    <Layout>
        <Seo title="About" />
        <article>
            <section>
                <h3>About Myself!</h3>
                <p>
                    Software Engineer with 12+ years of experience architecting, implementing, leading, and
                    launching web-based software products. Skilled in agile processes, backend and frontend
                    application development, and object-oriented and functional programming. Excel in team
                    collaboration and solution brainstorming. Provides leadership, training & feedback to ensure
                    that the team performs to the best of their abilities & delivers consistently.
                </p>

                <h4>You can find more about me in:</h4>
                <div className="books">
                    <a href="https://www.linkedin.com/in/shibbirahmed">LinkedIn</a>
                    <a href="https://twitter.com/shibbir_io">Twitter</a>
                    <a href="https://github.com/shibbir">GitHub</a>
                </div>
            </section>
        </article>
    </Layout>
);

export default About;
