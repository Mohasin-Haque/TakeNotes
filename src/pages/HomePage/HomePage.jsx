import { Navbar, Sidebar, NoteField } from "../../components";
import "./home-page.css";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="home-page-container">
            <Sidebar />
            <NoteField />
            </div>
        </div>
    )
}

export { HomePage }