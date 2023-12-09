import { useContext } from "react"

import useForm from "../hooks/useForm";
import AuthContext from "../contexts/authContext"

const ConfirmPassword = {
    confirmPass: "confirm-password"
};

export default function Register(){
    const {registerSubmitHandler} = useContext(AuthContext);
    const { formData, onChange, onSubmit } = useForm(registerSubmitHandler, {
        email: "",
        password: "",
        [ConfirmPassword.confirmPass]: ""
    })

    return (
        <section>
            <form id="register-form" onSubmit={onSubmit}>
                <div className="templatemo_container create_login_register_container">
                    <h1>Register</h1>

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

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                        placeholder="Confirm password..." 
                        onChange={onChange}
                        value={formData[ConfirmPassword.confirmPass]}
                    /><br />

                    <input className="btn submit" type="submit" value="Register" />
                </div>
            </form>
        </section>
    )
}