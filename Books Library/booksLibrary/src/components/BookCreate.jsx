export default function BookCreate() {
    return (
        <div>
            <form>
                <div className="templatemo_container">
                    <h1>Add Book</h1>

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter category..." />

                    <label htmlFor="rate">Rate:</label>
                    <input type="number" id="rate" name="rate" min="1" placeholder="1" />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Image URL..." />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" placeholder="Description..."></textarea>

                    <input className="btn submit" type="submit" value="Add Book" />
                </div>
            </form>
        </div>
    )
}