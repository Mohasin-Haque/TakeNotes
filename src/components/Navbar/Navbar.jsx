import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                   <Link to="/" className="header"><h2 className="cursor">TakeNotes</h2></Link>
                   <h2><i className='fas fa-sun cursor'></i></h2>
                </nav>
            </header>
        </div>
    )
}

export { Navbar }