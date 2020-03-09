import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";

export default class Reading extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [
                {
                    title: "Attitude Is Everything: Change Your Attitude... Change Your Life!",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/41uYDL7BThL._SX322_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Attitude-Everything-Change-Your-Life/dp/0979041031/"
                },
                {
                    title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51JF95r45vL._SX379_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure-dp-0134494164/dp/0134494164"
                },
                {
                    title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL._SX375_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215"
                },
                {
                    title: "How To Win Friends and Influence People",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/516c0M%2B4C%2BL._SX322_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/1439167346"
                },
                {
                    title: "Integrity: The Courage to Meet the Demands of Reality",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/41dZAEcGjVL._SX326_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Integrity-Courage-Meet-Demands-Reality/dp/006084969X/"
                },
                {
                    title: "Managing Humans: Biting and Humorous Tales of a Software Engineering Manager",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51d7c8CjTDL._SX331_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Managing-Humans-Humorous-Software-Engineering/dp/1484221575"
                },
                {
                    title: "Man's Search for Meaning",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/41s4xJZlEYL.jpg",
                    link: "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273"
                },
                {
                    title: "Peopleware: Productive Projects and Teams",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51Jef3ZRN-L._SX341_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Peopleware-Productive-Projects-Teams-3rd-dp-0321934113/dp/0321934113"
                },
                {
                    title: "Rapid Development: Taming Wild Software Schedules",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51A6XTZJ8DL._SX398_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Rapid-Development-Taming-Software-Schedules-dp-1556159005/dp/1556159005"
                },
                {
                    title: "Rich Dad Poor Dad",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680178"
                },
                {
                    title: "The 7 Habits of Highly Effective People",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51fEYMhtHoL.jpg",
                    link: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful-ebook/dp/B01069X4H0/"
                },
                {
                    title: "The Alchemist",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL.jpg",
                    link: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005"
                },
                {
                    title: "The Art of Mental Training - A Guide to Performance Excellence",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/41dA6b-5hHL._SX331_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Art-Mental-Training-Performance-Excellence/dp/0615913547"
                },
                {
                    title: "The Compound Effect",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51Bz60iDotL._SX359_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Compound-Effect-Darren-Hardy/dp/159315724X"
                },
                {
                    title: "The Mythical Man-Month",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51xCKsOn83L._SX334_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary-dp-0201835959/dp/0201835959"
                },
                {
                    title: "The Pragmatic Programmer",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052"
                },
                {
                    title: "To Pixar and Beyond",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/410a5m%2BN-zL._SX322_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Pixar-Beyond-Unlikely-Journey-Entertainment/dp/1786070812"
                },
                {
                    title: "Who Moved My Cheese?",
                    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51QGl7HfNyL._SX314_BO1,204,203,200_.jpg",
                    link: "https://www.amazon.com/Who-Moved-My-Cheese-Mazing/dp/0091816971"
                }
            ]
        };
    }

    render() {
        const bookItems = this.state.books.map((book, index) => (
            <a key={index} href={book.link}>
                <img src={book.thumbnail} alt={book.title} />
            </a>
        ));

        return (
            <Layout>
                <main className="content" role="main">
                    <SEO title="Projects" />
                    <article className="post">
                        <section className="post-content">
                            <p>
                                This page contains the list of books I have read or currently reading.
                                If you have any suggestions please feel free to let me know.
                                The order of the books is alphabetical.
                                This list was last updated in <strong>January 2020</strong>.
                            </p>
                            {bookItems.length > 0 && <div className="books">{bookItems}</div>}
                        </section>
                    </article>
                </main>
            </Layout>
        );
    }
}
