import "./landing-page-comp.css";
import notesLogo from "./notesLogo.png";
import { Link } from "react-router-dom";

const LandingPageComp = () => {
    return (
        <div>
            <div className="main-container">
                <div className="container">
                    <div className="content">
                        <h3>Meet your modern</h3>
                        <h1 className="active-text">Note Taking App</h1>
                        <p className="description"> Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts</p>
                    </div>
                    <Link to="/home"><button className="button cursor">Join Now</button></Link>
                    <Link to="/login"><p className="description active-text cursor">Already have an account?</p></Link>
                    <Link to="/signup"><p className="description active-text cursor">Signup</p></Link>
                </div>
                <img className="image" src={notesLogo} alt="error" />
            </div>
        </div>
    )
}

export { LandingPageComp } 