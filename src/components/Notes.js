import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = (props) => {
    const [note,setNote]=useState({title:"", description:"", tag:""});
    const context = useContext(NoteContext);
    const { notes, fetchNotes,editNote } = context;
    useEffect(() => {
        fetchNotes()
    }, [])
    const ref = useRef(null);
    const refClose = useRef(null);
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id,title:currentNote.title,description:currentNote.description,tag:currentNote.tag})
    }
    const handleclick=()=>{
        editNote(note.id,note.title,note.description,note.tag);
        refClose.current.click();
        props.showAlert('Updated Successfully','success');
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value});
    }
    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3" >
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={note.title} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} value={note.tag}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" onClick={handleclick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <h2>Your Notes</h2>
                <h5>{notes.length===0 && 'No Notes to Display'}</h5>
                <div className='row '>
                    {notes.map((note) => {
                        return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes
