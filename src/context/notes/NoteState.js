import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState=(props)=>{
      let note=[
        {
          "_id": "653fe5fg59e1deb61d6d119c108",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:17.439Z",
          "__v": 0
        },
        {
          "_id": "6d53fe55be1debfgn616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe5d5be1denjb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe5d5be1ddgeb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe5d5bedfg1dedb616dd119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe5d5be1deb61fgh6d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1debdsrg616d1d19c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1debn616d119dc10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1ddeb616d11wd9c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(note);

      const addNote=(title,description,tag)=>{
            console.log('Adding');
            const Note={
                "_id": "653fe55be5deb61wsd6d119c10a",
                "user": "65337b7c8f6f6caed328dc77",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2023-10-30T17:18:19.070Z",
                "__v": 0
              }
            setNotes(note.concat(Note))
      }

      const deleteNote=(id)=>{
            console.log(id);
            const newNotes = notes.filter((note)=>{return note._id!==id});
            setNotes(newNotes);
      }

      const editNote=(id,title,description,tag)=>{
            for(let index=0;index<notes.length;index++){
                const element=notes[index];
                if(element._id===id){
                    element.title=title;
                    element.description=description;
                    element.tag=tag;
                }
            }
      }
      return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
      )
}

export default NoteState;