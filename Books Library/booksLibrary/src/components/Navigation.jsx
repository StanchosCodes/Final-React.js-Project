import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/authContext'

export default function Navigation() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <div id="templatemo_menu">
            <ul>
                <li><Link to="/" className="current">Home</Link></li>
                {isAuthenticated && ( 
                    <div>
                        <li><Link to="/books">Books</Link></li>
                        <li><Link to="/books/create">Add Book</Link></li>
                        <li><Link to="/contacts">Contact</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                        <span><strong>Hi {username.substring(0, username.indexOf('@'))}!</strong></span>
                    </div>
                )}
                
                {!isAuthenticated && (
                    <div>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </div>
                )}
            </ul>
        </div>
    )
}