import { Navbar, Sidebar, NoteCard } from "../../components"
import "./archive-page.css";


const ArchivePage = () => {
    return(
        <div>
            <Navbar />
            <div className="home-page-container">
            <Sidebar />
            <div className="right-container">
            <h1 className="page-name">Archived</h1>
            <section className="note-card">
            <NoteCard />
            <NoteCard />
            </section>
            </div>
            </div>
        </div>
    )
}

export { ArchivePage }