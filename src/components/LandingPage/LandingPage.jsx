import "./landing-page.css";
import notesLogo from "./notesLogo.png";

const LandingPage = () =>{
    return(
        <div>
            <header className="header">
                <nav className="navbar">
                <h2>TakeNotes</h2>
                <h2><i className='fas fa-sun'></i></h2>
                </nav>
            </header>
            <div className="main-container">
               <div className="container">
                   <div className="content">
                       <h3>Meet your modern</h3>
                       <h1 className="active-text">Note Taking App</h1>
                       <p className="description"> Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts</p>
                   </div>
                       <button className="button cursor">Join Now</button>
                       <p className="description active-text cursor">Already have an account?</p>   
               </div>
               <img className="image" src={notesLogo} alt="error" />
               </div>
        </div>
    )
}

export { LandingPage } 