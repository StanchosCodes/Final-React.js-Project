import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import * as bookService from '../services/bookService';
import * as commentService from '../services/commentService';
import { Link } from 'react-router-dom';

export default function BookDetails({ title, imageUrl, category, rate, description }) {
    const [book, setBook] = useState({});
    const [comments, setComments] = useState([]);
    const { bookId } = useParams();

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => setBook(result))
            .catch(error => {
                console.log(error)
            });

        commentService.getAll(bookId)
            .then(result => setComments(result))
            .catch(error => {
                console.log(error)
            });
    }, [bookId]);

    const addcommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username');
        const comment = formData.get('comment');

        const newComment = await commentService.create(bookId, username, comment);

        setComments(state => [...comments, newComment]);
    }

    return (
        <>
            <div className="templatemo_product_box">
                <h1>{book.title}</h1>
                <img src={book.imageUrl} alt={book.title} />
                <div className="product_info">
                    <p>Category: {book.category}</p>
                    <p>Rating: {book.rate}</p>
                    <p>{book.description}</p>
                    <div className="detail_button"><Link to={`/books`}>Back</Link></div>
                </div>
                <div className="cleaner">&nbsp;</div>
            </div>

            <article className="create_login_register_container">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addcommentHandler}>
                    <input type="text" name="username" placeholder="Username......" />
                    <textarea name="comment" placeholder="Comment......" />
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

            <div className="comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(({_id, username, content}) => (
                        <li key={_id} className="comment">
                            <p>{username} - {content}</p>
                        </li>
                    ))}
                </ul>
                {comments.length === 0 && (<p className="no-comment">No comments.</p>)}
            </div>

            <div className="cleaner_with_width">&nbsp;</div>
        </>
    )
}