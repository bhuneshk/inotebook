import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState=(props)=>{
      const note=[
        {
          "_id": "653fe559e1deb616d119c108",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:17.439Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1deb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1deb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1deb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1deb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1deb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1deb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1deb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        },
        {
          "_id": "653fe55be1deb616d119c10a",
          "user": "65337b7c8f6f6caed328dc77",
          "title": "My Task",
          "description": "Wake me up always good for health",
          "tag": "Important",
          "date": "2023-10-30T17:18:19.070Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(note);
      return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
      )
}

export default NoteState;