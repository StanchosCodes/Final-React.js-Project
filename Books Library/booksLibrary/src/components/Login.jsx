import { useContext } from "react";

import useForm from "../hooks/useForm";
import AuthContext from "../contexts/authContext";

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { formData, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: "",
        password: ""
    });

    return (
        <section>
            <form id="login-form" onSubmit={onSubmit}>
                <div className="templatemo_container create_login_register_container">
                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter email..." 
                        onChange={onChange}
                        value={formData.email}
                    /><br />

                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter password..." 
                        onChange={onChange}
                        value={formData.password}
                    /><br />

                    <input className="btn submit" type="submit" value="Login" />
                </div>
            </form>
        </section>
    )
}