import { useContext } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../contexts/authContext'
import Path from '../paths';

export default function Navigation() {
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <div id="templatemo_menu">
            <ul>
                <li><Link to={Path.Home} className="current">Home</Link></li>
                {isAuthenticated && ( 
                    <div>
                        <li><Link to={Path.Books}>Books</Link></li>
                        <li><Link to={Path.BookCreate}>Add Book</Link></li>
                        <li><Link to={Path.Contacts}>Contact</Link></li>
                        <li><Link to={Path.Logout}>Logout</Link></li>
                        <span><strong>Hi {email.substring(0, email.indexOf('@'))}!</strong></span>
                    </div>
                )}
                
                {!isAuthenticated && (
                    <div>
                        <li><Link to={Path.Login}>Login</Link></li>
                        <li><Link to={Path.Register}>Register</Link></li>
                    </div>
                )}
            </ul>
        </div>
    )
}