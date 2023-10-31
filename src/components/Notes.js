import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes } = context;
    return (
        <>
        <AddNote/>
        <div >
            <h2>Your Notes</h2>
            <div className='row '>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note} />
            })}
            </div>
        </div>
        </>
    )
}

export default Notes
