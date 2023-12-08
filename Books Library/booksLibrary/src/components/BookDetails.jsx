import {useContext, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as bookService from '../services/bookService';
import * as commentService from '../services/commentService';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/authContext';

export default function BookDetails({ title, imageUrl, category, rate, description }) {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
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
        const comment = formData.get('comment');

        const newComment = await commentService.create(bookId, comment);

        setComments(state => [...state, {...newComment, owner: { email }}]);
    }

    const isCreator = userId === book._ownerId;

    const deleteClickHandler = async (e) => {
        const isConfirmed = confirm(`You are going to delete ${book.title}!`);

        if (isConfirmed) {
            await bookService.remove(bookId);

            navigate('/books');
        }
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
                    <div className="detail_button">
                        <Link to={`/books`}>Back</Link>
                        {isCreator && (
                            <>
                                <Link to={`/books/edit/${book._id}`}>Edit</Link>
                                <Link onClick={deleteClickHandler}>Delete</Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="cleaner">&nbsp;</div>
            </div>

            <article className="create_login_register_container">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addcommentHandler}>
                    <textarea name="comment" placeholder="Comment......" />
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

            <div className="comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(({_id, content, owner: { email }}) => (
                        <li key={_id} className="comment">
                            <p>{email} - {content}</p>
                        </li>
                    ))}
                </ul>
                {comments.length === 0 && (<p className="no-comment">No comments.</p>)}
            </div>

            <div className="cleaner_with_width">&nbsp;</div>
        </>
    )
}