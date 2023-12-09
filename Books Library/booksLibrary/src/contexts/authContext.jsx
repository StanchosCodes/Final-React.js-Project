import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import Path from '../paths';
import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('authState', {});

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
        userId: auth._id,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <AuthContext.Provider value={authData} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;