import { Link } from "react-router-dom";

export default function BookItem({ _id, title, imageUrl, description }) {
    return (
        <>
            <div className="templatemo_product_box" style={{display: 'flex'}}>
                <img className="image_panel" src={imageUrl} alt="image" />
                <div className="product_info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="detail_button">
                        <Link to={`/books/details/${_id}`}>Details</Link>
                    </div>
                </div>
                <div className="cleaner">&nbsp;</div>
            </div>
            <div className="cleaner_with_width">&nbsp;</div>
        </>
    )
}