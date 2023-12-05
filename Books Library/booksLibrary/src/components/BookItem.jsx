import { Link } from "react-router-dom";

export default function BookItem({ _id, title, imageUrl, description }) {
    return (
        <>
            <div className="templatemo_product_box">
                <h1>{title}</h1>
                <img src={imageUrl} alt="image" />
                <div className="product_info">
                    <p>{description}</p>
                    <div className="detail_button"><Link to={`/books/details/${_id}`}>Details</Link></div>
                </div>
                <div className="cleaner">&nbsp;</div>
            </div>
            <div className="cleaner_with_width">&nbsp;</div>
        </>
    )
}