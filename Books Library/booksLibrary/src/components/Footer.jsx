import { Link } from "react-router-dom";

import Path from "../paths";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div id="templatemo_footer">
                <Link to={Path.Home}>Home</Link> | <Link to={Path.Books}>Books</Link> | <Link to={Path.Contacts}>Contact Us</Link><br />
                Copyright © 2023 - {currentYear} <Link to={Path.Home}><strong>Book Library</strong></Link>
            </div>
        </>
    );
}