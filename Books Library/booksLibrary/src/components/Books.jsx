import { useEffect, useState } from 'react';

import * as bookService from '../services/bookService';

import BookItem from './BookItem';

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll()
            .then(result => setBooks(result))
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div id='templatemo_content'>
                <h1>{books.length === 0 ? ("No books yet! Come back later.") : ("All Books")}</h1>

                {books.map(book => (
                    <BookItem key={book._id} {...book} />
                ))}
            </div>
        </>
    )
}