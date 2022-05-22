import { Navbar, SignupPageComp } from "../../components";
import "./signup-page.css";

const SignupPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="flex">Signup</h1>
            <SignupPageComp />
        </div>
    )
}

export { SignupPage }