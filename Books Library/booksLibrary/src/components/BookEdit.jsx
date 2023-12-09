import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Path from '../paths';
import * as bookService from '../services/bookService'

export default function BookEdit() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({
        title: '',
        category: '',
        rate: '',
        imageUrl: '',
        description: '',
    });

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [bookId]);

    const editBookSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await bookService.edit(bookId, formData);

            navigate(Path.Books);
        } catch (error) {
            console.log(error);
        }
    }

    const onChange = (e) => {
        setBook(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section>
            <form id="edit" onSubmit={editBookSubmitHandler}>
                <div className="templatemo_container create_login_register_container">
                    <h1>Edit Book</h1>

                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Enter title..."
                        onChange={onChange}
                        value={book.title}
                    /><br />

                    <label htmlFor="category">Category:</label>
                    <input 
                        type="text" 
                        id="category" 
                        name="category" 
                        placeholder="Enter category..."
                        onChange={onChange}
                        value={book.category}
                    /><br />

                    <label htmlFor="rate">Rate:</label>
                    <input 
                        type="number" 
                        id="rate" 
                        name="rate" 
                        min="1" 
                        placeholder="1"
                        onChange={onChange}
                        value={book.rate}
                    /><br />

                    <label htmlFor="imageUrl">Image:</label>
                    <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        placeholder="Image URL..."
                        onChange={onChange}
                        value={book.imageUrl}
                    /><br />

                    <label htmlFor="description">Description:</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        placeholder="Description..."
                        onChange={onChange}
                        value={book.description}
                    /><br />

                    <input className="btn submit" type="submit" value="Edit" />
                </div>
            </form>
        </section>
    )
}