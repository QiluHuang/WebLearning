import React from "react";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Note from "../../components/Note/Note.jsx";
import notes from "../../notes.js";


function createNotes(noteItem) {
    return (
      <Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
      />
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        {notes.map(createNotes)}
        <Footer />
      </div>
    );
  }

export default App;
