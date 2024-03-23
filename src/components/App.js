import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes(prevVal => {
      return [...prevVal, newNote]
    })
  }
  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((value, index) => {
        return (index !== id)
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((notesItems, index) => {
        return (<Note key={index} id={index} title={notesItems.title} content={notesItems.content} onDelete={deleteNote} />)
      })}
      <Footer />
    </div>
  );
}

export default App; 
