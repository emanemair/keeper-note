import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(notes){
  return (
<Note 
    id={notes.key} 
    noteTitle={notes.title}
    noteContent ={notes.content}
    />
  );
  
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(note => (<Note 
        id={note.key} 
    noteTitle={note.title}
    noteContent ={note.content}/>))}
      <Footer />
    </div>
  );
}

export default App;
