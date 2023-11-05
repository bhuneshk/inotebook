import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = 'http://127.0.0.1:5000';
    let note=[];
    const [notes, setNotes] = useState(note);
    
    const fetchNotes=async ()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMzdiN2M4ZjZmNmNhZWQzMjhkYzc3In0sImlhdCI6MTY5Nzg4NjM4Nn0.26P2WZLWg_hWhVRrwuIy20sdxGvIeFLRS0ZOqnQz8YA'
            },
        })
        const json= await response.json();
        setNotes(json);
    }

    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMzdiN2M4ZjZmNmNhZWQzMjhkYzc3In0sImlhdCI6MTY5Nzg4NjM4Nn0.26P2WZLWg_hWhVRrwuIy20sdxGvIeFLRS0ZOqnQz8YA'
            },
            body: JSON.stringify({title, description, tag})
        })
        fetchNotes();
    }

    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMzdiN2M4ZjZmNmNhZWQzMjhkYzc3In0sImlhdCI6MTY5Nzg4NjM4Nn0.26P2WZLWg_hWhVRrwuIy20sdxGvIeFLRS0ZOqnQz8YA'
            },
            
        })
        const newNotes = notes.filter((note) => { return note._id !== id });
        props.showAlert('Deleted Successfully','success');
        setNotes(newNotes);
    }

    const editNote = async (id, title, description, tag) => {
        console.log('running',id,title,description,tag);
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMzdiN2M4ZjZmNmNhZWQzMjhkYzc3In0sImlhdCI6MTY5Nzg4NjM4Nn0.26P2WZLWg_hWhVRrwuIy20sdxGvIeFLRS0ZOqnQz8YA'
            },
            body: JSON.stringify({ title, description, tag })
        })
        let newNote=JSON.parse(JSON.stringify(notes));

        for (let index = 0; index < notes.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                setNotes(newNote);
                break;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;