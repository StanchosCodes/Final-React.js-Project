import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div id="templatemo_menu">
            <ul>
                <li><Link to="/" className="current">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
            </ul>
        </div>
    )
}