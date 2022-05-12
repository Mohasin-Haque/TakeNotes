import { NoteCard } from "../NoteCard/NoteCard";
import "./note-field.css";

const NoteField = () => {
    return(
        <div>
        <form className="input-field">
        <input className="title border" type="text" placeholder="Note Title"/>
        <textarea className="note-description border"
        placeholder="Enter the note here" />
        </form>
        <div className="btn">
        <button className="button cursor">Pin <i class="fa-solid fa-thumbtack"></i></button>
        <button className="button cursor">Add Note</button>
        <button className="button btn-yellow cursor">Yellow</button>
        <button className="button btn-green cursor">Green</button>
        <button className="button btn-blue cursor">Blue</button>
        </div>
        <section className="note-card">
            <NoteCard />
            </section>
        </div>
    )
}

export { NoteField }