import { useState } from 'react'
import Header from './components/Header'
import './components/styles.css'
import Home from './components/Home'
import Books from './components/Books'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import BookCreate from './components/BookCreate'
import Login from './components/Login'
import Register from './components/Register'
import BookDetails from './components/BookDetails'
import AuthContext from './contexts/authContext'
import * as authService from './services/authService';
import Path from './paths'
import Logout from "./components/Logout";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (formData) => {
        const result = await authService.login(formData.email, formData.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    }

    const registerSubmitHandler = async (formData) => {
        const result = await authService.register(formData.email, formData.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate(Path.Home);
    }

    const authData = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        username: auth.username || auth.email,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <AuthContext.Provider value={ authData }>
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
        </AuthContext.Provider>
    )
}

export default App
