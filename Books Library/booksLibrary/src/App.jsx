import { Routes, Route } from 'react-router-dom'

import Path from './paths'
import { AuthProvider } from './contexts/authContext'

import './components/styles.css'
import Home from './components/Home'
import Books from './components/Books'
import Login from './components/Login'
import Logout from "./components/Logout";
import Header from './components/Header'
import Footer from './components/Footer'
import BookEdit from "./components/BookEdit"
import Register from './components/Register'
import Contacts from './components/Contacts'
import Navigation from './components/Navigation'
import BookCreate from './components/BookCreate'
import BookDetails from './components/BookDetails'
import AuthGuard from './components/guards/AuthGuard'
import GuestAuthGuard from './components/guards/GuestAuthGuard'

function App() {
    return (
        <AuthProvider>
            <div id="templatemo_container">
                <Navigation />
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Books} element={<GuestAuthGuard> <Books /> </GuestAuthGuard>} />
                    <Route path={Path.BookCreate} element={<GuestAuthGuard> <BookCreate /> </GuestAuthGuard>} />
                    <Route path={Path.BookDetails} element={<GuestAuthGuard> <BookDetails /> </GuestAuthGuard>} />
                    <Route path={Path.BookEdit} element={<GuestAuthGuard> <BookEdit /> </GuestAuthGuard>} />
                    <Route path={Path.Contacts} element={<GuestAuthGuard> <Contacts /> </GuestAuthGuard>} />
                    <Route path={Path.Login} element={<AuthGuard> <Login /> </AuthGuard>} />
                    <Route path={Path.Register} element={<AuthGuard> <Register /> </AuthGuard>} />
                    <Route path={Path.Logout} element={<GuestAuthGuard> <Logout /> </GuestAuthGuard>} />
                </Routes>

                <Footer />
            </div>
        </AuthProvider>
    )
}

export default App
