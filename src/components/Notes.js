import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div >
            <h2>Your Notes</h2>
            <div className='row '>
            {notes.map((note) => {
                return <Noteitem note={note} />
            })}
            </div>
        </div>
    )
}

export default Notes
