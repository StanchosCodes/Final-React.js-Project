export default function Register(){
    return (
        <section>
            <form>
                <div className="templatemo_container create_login_register_container">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter email..." /><br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter password..." /><br />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password..." /><br />

                    <input className="btn submit" type="submit" value="Register" />
                </div>
            </form>
        </section>
    )
}