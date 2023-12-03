export default function BookCreate() {
    return (
        <section>
            <form>
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