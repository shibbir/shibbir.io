import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";

const Readings = () => {
    const se_books = [
        // {
        //     title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
        //     link: "https://www.google.com/books/edition/Clean_Architecture/8ngAkAEACAAJ"
        // },
        // {
        //     title: "Code: The Hidden Language of Computer Hardware and Software",
        //     link: "https://www.google.com/books/edition/Code/iNfPEAAAQBAJ"
        // },
        // {
        //     title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
        //     link: "https://www.google.com/books/edition/Domain_driven_Design/xColAAPGubgC"
        // },
        // {
        //     title: "Managing Humans: Biting and Humorous Tales of a Software Engineering Manager",
        //     link: "https://www.google.com/books/edition/Managing_Humans/T8C-DAAAQBAJ"
        // },
        {
            title: "Peopleware: Productive Projects and Teams",
            link: "https://www.google.com/books/edition/Peopleware/TVQUAAAAQBAJ"
        },
        {
            title: "The Mythical Man-Month",
            link: "https://www.google.com/books/edition/The_Mythical_Man_Month/Yq35BY5Fk3gC"
        },
        {
            title: "The New One Minute Manager",
            link: "https://www.google.com/books/edition/The_New_One_Minute_Manager/jXydBAAAQBAJ"
        },
        // {
        //     title: "The Passionate Programmer: Creating a Remarkable Career in Software Development",
        //     link: "https://www.google.com/books/edition/The_Passionate_Programmer/FvJePgAACAAJ"
        // },
        {
            title: "The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win",
            link: "https://www.google.com/books/edition/The_Phoenix_Project/H6x-DwAAQBAJ"
        },
        {
            title: "The Pragmatic Programmer",
            link: "https://www.google.com/books/edition/The_Pragmatic_Programmer/LhOlDwAAQBAJ"
        },
        {
            title: "To Pixar and Beyond",
            link: "https://www.google.com/books/edition/To_Pixar_and_Beyond/Nh69DwAAQBAJ"
        }
    ].map((book, index) => (
        <a key={index} href={book.link}>{book.title}</a>
    ));

    const misc_books = [
        // {
        //     title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad",
        //     link: "https://www.google.com/books/edition/Atomic_Habits/Jrx6EAAAQBAJ"
        // },
        {
            title: "Attitude Is Everything",
            link: "https://www.google.com/books/edition/Attitude_is_Everything/OppErgEACAAJ"
        },
        {
            title: "Eat That Frog!",
            link: "https://www.google.com/books/edition/Eat_That_Frog/MRbVRdmP630C"
        },
        {
            title: "Factfulness",
            link: "https://www.google.com/books/edition/Factfulness/N94sDwAAQBAJ"
        },
        {
            title: "How To Win Friends and Influence People",
            link: "https://www.google.com/books/edition/How_to_Win_Friends_and_Influence_People/vOb1EAAAQBAJ"
        },
        // {
        //     title: "Integrity: The Courage to Meet the Demands of Reality",
        //     link: "https://www.google.de/books/edition/_/Hz4w0kxsnI0C"
        // },
        {
            title: "Man's Search for Meaning",
            link: "https://www.google.de/books/edition/_/RcIS-b6SxcIC"
        },
        {
            title: "Never Split the Difference: Negotiating as if Your Life Depended on It",
            link: "https://www.google.de/books/edition/Never_Split_the_Difference/RmdqCgAAQBAJ"
        },
        {
            title: "Rich Dad Poor Dad",
            link: "https://www.google.com/books/edition/Rich_Dad_Poor_Dad/myUCBQAAQBAJ"
        },
        {
            title: "Sapiens: A Brief History of Humankind",
            link: "https://www.google.com/books/edition/Sapiens/1EiJAwAAQBAJ"
        },
        // {
        //     title: "The 7 Habits of Highly Effective People",
        //     link: "https://www.google.com/books/edition/The_7_Habits_of_Highly_Effective_People/0XupDAAAQBAJ"
        // },
        {
            title: "The Alchemist",
            link: "https://www.google.com/books/edition/_/ZI3gAQAACAAJ"
        },
        {
            title: "The Art of Mental Training - A Guide to Performance Excellence",
            link: "https://www.google.com/books/edition/The_Art_of_Mental_Training/25UhngEACAAJ"
        },
        {
            title: "The Compound Effect",
            link: "https://www.google.com/books/edition/_/g5pytAEACAAJ"
        },
        {
            title: "The Psychology of Money: Timeless Lessons on Wealth, Greed and Happiness",
            link: "https://www.google.com/books/edition/The_Psychology_of_Money/TnrrDwAAQBAJ"
        },
        // {
        //     title: "The Richest Man in Babylon",
        //     link: "https://www.google.com/books/edition/The_Richest_Man_In_Babylon/5RVgEAAAQBAJ"
        // },
        // {
        //     title: "Think and Grow Rich",
        //     link: "https://www.google.com/books/edition/_/wjgNAAAACAAJ"
        // },
        {
            title: "Who Moved My Cheese?",
            link: "https://www.google.com/books/edition/Who_Moved_My_Cheese/toxlBwAAQBAJ"
        }
    ].map((book, index) => (
        <a key={index} href={book.link}>{book.title}</a>
    ));

    return (
        <Layout>
            <Seo title="Book Recommendations" />
            <article>
                <section>
                    <p>
                        From <a href="https://en.wikipedia.org/wiki/Chacha_Chaudhary">Chaha Chowdhury</a> comics to the detective novel series <a href="https://en.wikipedia.org/wiki/Tin_Goyenda">Tin Goyenda</a> or the spy-thriller series <a href="https://en.wikipedia.org/wiki/Masud_Rana_(fictional_character)">Masud Rana</a>, my love for books has always been a source of joy and comfort.
                        However, after my introduction to Computers in late 2006, I wasn't the same reader I used to be.
                        Still, I always try to go back to it whenever I get the chance.
                        Over the past 10 years, my reading preferences have mostly changed towards the world of Software Engineering.
                        The below list is a reflection of that preference.
                        These are the books that I have read and I can recommend them to anyone interested in making a career in Software Development.
                    </p>

                    <h3>Software Engineering</h3>
                    <div className="books">{se_books}</div>

                    <h3>Miscellaneous</h3>
                    <div className="books">{misc_books}</div>
                </section>
            </article>
        </Layout>
    );
};

export default Readings;
