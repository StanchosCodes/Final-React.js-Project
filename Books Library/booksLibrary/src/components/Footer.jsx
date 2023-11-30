export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div id="templatemo_footer">
                <a href="subpage.html">Home</a> | <a href="subpage.html">Search</a> | <a href="subpage.html">Books</a> | <a href="#">New Releases</a> | <a href="#">FAQs</a> | <a href="#">Contact Us</a><br />
                Copyright © 2023 - {currentYear} <a href="#"><strong>Book Library</strong></a>
            </div>
        </>
    );
}