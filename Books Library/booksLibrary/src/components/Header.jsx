import { useState, useEffect } from "react";

import * as bookService from "../services/bookService";

import TopBook from "./TopBook";


export default function Header() {
    const [topBooks, setTopBooks] = useState([]);
    const [recentBooks, setRecentBooks] = useState([]);


    useEffect(() => {
        bookService.getTopRated()
            .then(result => {
                setTopBooks(result);
            });

        bookService.getRecent()
        .then(result => {
            setRecentBooks(result);
        });
    }, []);

    return (
        <>
            <div id="templatemo_header">
                <div id="templatemo_special_offers">
                    {topBooks.map(book => <TopBook key={book._id} {...book} />)}

                    {!topBooks.length && <h1>No books yet! Come back later!</h1>}
                </div>


                <div id="templatemo_new_books">
                    {recentBooks.map(book => <TopBook key={book._id} {...book} />)}

                    {!recentBooks.length && <h1>No books yet! Come back later!</h1>}
                </div>
            </div>
        </>
    );
}