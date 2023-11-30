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
            <h1>All Books Here</h1>

            {books.map(book => (
                <BookItem key={book._id} {...book} />
            ))}
        </>
    )
}