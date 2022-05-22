import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./signup-page.css";

const SignupPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="flex">Signup</h1>
            <div className="signup-container">
                <form className="flex">
                    <div className="input-container font-size-one">
                        <p>Full Name</p>
                        <input className="input" type="text" placeholder="Enter your full name" />
                    </div>
                    <div className="input-container font-size-one">
                        <p>Email address</p>
                        <input className="input" type="text" placeholder="take@notes.com" />
                    </div>
                    <div className="input-container font-size-one">
                        <p>Password</p>
                        <input className="input" type="text" placeholder="********" />
                    </div>
                    <div className="input-container font-size-one">
                        <p>Confirm Password</p>
                        <input className="input" type="text" placeholder="Re-Enter your password" />
                    </div>
                    <div className="radio-actions">
                        <label for="radio-unchecked">
                            <input className="radio-unchecked gap" name="radio" type="checkbox" />
                            I accept Terms & Conditions
                        </label>
                    </div>
                    <button className="button cursor margin-zero">Signup</button>
                    <div className="flex row">
                    <p className="signup-text font-size-one">Already have an account</p>
                    <Link to="/login" className="padding-one active-text cursor">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { SignupPage }