import React from "react";
import axios from "axios";

import SEO from "../components/seo";
import Layout from "../components/layout";

export default class RecommendedReading extends React.Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios.get("https://www.googleapis.com/books/v1/users/109441212183176902645/bookshelves/1001/volumes?key=AIzaSyAqAjDNHD5ru0hohLErrpaRDkLLrGGFctk").then(response => {
            this.setState({books: response.data.items});
        });
    }

    render() {
        const bookItems = this.state.books.map(book =>
            <a key={book.id} href={book.volumeInfo.canonicalVolumeLink}><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/></a>
        );

        return (
            <Layout>
                <SEO title="Projects" />
                <div class="container">
                    {bookItems.length > 0 && <div class="books">{bookItems}</div>}
                </div>
            </Layout>
        );
    }
}
