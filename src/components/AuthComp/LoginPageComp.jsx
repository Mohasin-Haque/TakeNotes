import { Link } from "react-router-dom";

const LoginPageComp = () => {
    return(
        <div>
            <div className="signup-container">
                <form className="flex">
                    <div className="input-container font-size-one">
                        <p>Email address</p>
                        <input className="input" type="text" placeholder="take@notes.com" />
                    </div>
                    <div className="input-container font-size-one">
                        <p>Password</p>
                        <input className="input" type="text" placeholder="********" />
                    </div>
                    <div className="radio-actions">
                        <label for="radio-unchecked">
                            <input className="radio-unchecked gap" name="radio" type="checkbox" />
                            Remember Me
                        </label>
                    </div>
                    <button className="button cursor margin-zero">Login</button>
                    <div className="flex row">
                    <p className="signup-text font-size-one">New user?</p>
                    <Link to="/signup" className="padding-one active-text cursor">Signup</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { LoginPageComp }