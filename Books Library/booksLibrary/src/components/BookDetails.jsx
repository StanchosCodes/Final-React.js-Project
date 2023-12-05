import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import * as bookService from '../services/bookService'
import { Link } from 'react-router-dom';

export default function BookDetails({ title, imageUrl, category, rate, description }) {
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => setBook(result))
            .catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <>
            <div className="templatemo_product_box">
                <h1>{book.title}</h1>
                <img src={book.imageUrl} alt="image" />
                <div className="product_info">
                    <p>Category: {book.category}</p>
                    <p>Rating: {book.rate}</p>
                    <p>{book.description}</p>
                    <div className="detail_button"><Link to={`/books`}>Back</Link></div>
                </div>
                <div className="cleaner">&nbsp;</div>
            </div>
            <div className="cleaner_with_width">&nbsp;</div>
        </>
    )
}