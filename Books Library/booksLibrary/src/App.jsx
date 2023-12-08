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
import BookEdit from "./components/BookEdit"
import GuestAuthGuard from './components/guards/GuestAuthGuard'
import AuthGuard from './components/guards/AuthGuard'

function App() {
    return (
        <AuthProvider>
            <div id="templatemo_container">
                <Navigation />
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path='/books' element={<GuestAuthGuard> <Books /> </GuestAuthGuard>} />
                    <Route path='/books/create' element={<GuestAuthGuard> <BookCreate /> </GuestAuthGuard>} />
                    <Route path='/books/details/:bookId' element={<GuestAuthGuard> <BookDetails /> </GuestAuthGuard>} />
                    <Route path='/books/edit/:bookId' element={<GuestAuthGuard> <BookEdit /> </GuestAuthGuard>} />
                    <Route path='/contacts' element={<GuestAuthGuard> <Contacts /> </GuestAuthGuard>} />
                    <Route path='/login' element={<AuthGuard> <Login /> </AuthGuard>} />
                    <Route path='/register' element={<AuthGuard> <Register /> </AuthGuard>} />
                    <Route path='/logout' element={<GuestAuthGuard> <Logout /> </GuestAuthGuard>} />
                </Routes>

                <Footer />
            </div>
        </AuthProvider>
    )
}

export default App
