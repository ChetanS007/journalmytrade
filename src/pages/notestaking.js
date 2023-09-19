

import React, { useEffect, useState } from "react";
import Textarea from "react-expanding-textarea";
import newID from "./utils/id";
import EditableInput from "./EditableInput";

const Notestaking = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const cards = notes.map((note) => (
    <div className="card" key={note.id}>
      <h2>
        <input
          className="noteTitle"
          value={note.title}
          onChange={(event) => {
            note.title = event.target.value;
            updateNote(note);
          }}
        />
      </h2>
      <Textarea
        className="noteContent"
        defaultValue={note.content}
        onChange={(event) => {
          note.content = event.target.value;
          updateNote(note);
        }}
      />
      <button onClick={() => deleteNote(note)}>Delete</button>
    </div>
  ));

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    setNotes((oldNotes) => [
      ...oldNotes,
      {
        id: newID(),
        title: "New note",
        content: "Write something interesting."
      }
    ]);
  };

  const updateNote = (note) => {
    setNotes((oldNotes) =>
      [...oldNotes.filter((n) => n.id !== note.id), note].sort(
        (a, b) => a.id - b.id
      )
    );
  };

  const deleteNote = (note) => {
    setNotes((oldNotes) => oldNotes.filter((n) => n.id !== note.id));
  };

  return (
    <div className="app">
      <h1 className="page-title">React Notes</h1>
      {cards}
      <button onClick={createNote}>Create new</button>
      <button onClick={() => setNotes([])}>Reset</button>
    </div>
  );
};

export default Notestaking;
