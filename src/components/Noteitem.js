import React,{ useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const Noteitem = (props) => {
    const context=useContext(NoteContext);
    const {deleteNote}=context;
    return (
        <div className="card col-md-3 mx-4 my-2" >
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description}</p>
                    <hr />
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(props.note._id)}}></i>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{props.updateNote(props.note)}} ></i>
                </div>
        </div>
    )
}

export default Noteitem
