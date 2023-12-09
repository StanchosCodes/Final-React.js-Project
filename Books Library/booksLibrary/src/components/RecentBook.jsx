import { Link } from "react-router-dom";

export default function RecentBook({
    title,
    imageUrl,
    description,
    _id,

}) {
    return (
        <>
            <div className="templatemo_product_box" style={{display: 'block'}}>
                <h1>{title}</h1>
                <div className="inner-container">
                    <img className="home_image_panel" src={imageUrl} alt={title} />
                    <div className="product_info">
                        <p>{description}</p>
                        <div className="detail_button">
                            <Link to={`/books/details/${_id}`} >Details</Link>
                        </div>
                    </div>
                </div>
                <div className="cleaner">&nbsp;</div>
            </div>
                    
            <div className="cleaner_with_width">&nbsp;</div>
        </>
    )
}