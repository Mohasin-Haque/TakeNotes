import { Navbar, Sidebar, NoteCard } from "../../components";


const TrashPage = () => {
    return(
        <div>
            <Navbar />
            <div className="home-page-container">
            <Sidebar />
            <div className="right-container">
            <h1 className="page-name">Trash</h1>
            <section className="note-card">
            <NoteCard />
            <NoteCard />
            </section>
            </div>
            </div>
        </div>
    )
}

export { TrashPage }