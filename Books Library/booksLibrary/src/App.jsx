import Header from './components/Header'
import './components/styles.css'
import Home from './components/Home'
import Books from './components/Books'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import BookCreate from './components/BookCreate'
import Login from './components/Login'
import Register from './components/Register'
import BookDetails from './components/BookDetails'
import { AuthProvider } from './contexts/authContext'
import Path from './paths'
import Logout from "./components/Logout";

function App() {
    return (
        <AuthProvider>
            <div id="templatemo_container">
                <Navigation />
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path='/books' element={<Books />} />
                    <Route path='/books/create' element={<BookCreate />} />
                    <Route path='/books/details/:bookId' element={<BookDetails />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>

                <Footer />
            </div>
        </AuthProvider>
    )
}

export default App
