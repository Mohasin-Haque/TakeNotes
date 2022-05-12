import { Navbar, Sidebar } from "../../components"
import { NoteField } from "../../components/NoteField/NoteField"
import "./home-page.css"

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