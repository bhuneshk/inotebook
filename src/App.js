import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null);
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
