import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
function About() {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update()
  }, [])
  
  return (
    <div>
      This is About {a.state.name}
    </div>
  )
}

export default About
