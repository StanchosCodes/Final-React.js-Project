import * as bookService from '../services/bookService'
import { useNavigate } from 'react-router-dom';

export default function BookCreate() {
    const navigate = useNavigate();

    const createBookSubmitHandler = async (e) => {
        e.preventDefault();

        // const {
        //     title,
        //     category,
        //     rate,
        //     imageUrl,
        //     description
        // } = Object.fromEntries(new FormData(e.currentTarget));

        const bookData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await bookService.create(bookData);

            navigate('/books');
        } catch (error) {
            // show error in ui toastr sweetalert kind of
            console.log(error);
        }
    }

    return (
        <section>
            <form id="create" onSubmit={createBookSubmitHandler}>
                <div className="templatemo_container create_login_register_container">
                    <h1>Add Book</h1>

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter title..." /><br />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter category..." /><br />

                    <label htmlFor="rate">Rate:</label>
                    <input type="number" id="rate" name="rate" min="1" placeholder="1" /><br />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Image URL..." /><br />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" placeholder="Description..."></textarea><br />

                    <input className="btn submit" type="submit" value="Add" />
                </div>
            </form>
        </section>
    )
}