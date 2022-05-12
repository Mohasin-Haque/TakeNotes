import "./note-card.css";

const NoteCard = () => {
    return(
        <div>
            <div className="card-container border">
                <h2 className="note-title">Title of Note</h2>
                <p className="note-description">This is description of the notes. Since this is a notes card, it should wrap in it,</p>  
               <i
            className="fa-solid fa-box-archive cursor"
          ></i>
            </div>
        </div>
    )
}

export { NoteCard }