export default function Login() {
    return (
        <section>
            <form>
                <div className="templatemo_container create_login_register_container">
                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter email..." /><br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter password..." /><br />

                    <input className="btn submit" type="submit" value="Login" />
                </div>
            </form>
        </section>
    )
}