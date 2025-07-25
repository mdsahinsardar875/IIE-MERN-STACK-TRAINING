import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { getNotes, saveNotes } from "../utils/localStorage";

const staticNotes = [
  {
    id: 1,
    title: "Note 1",
    content: "Content of Note 1",
  },
  {
    id: 2,
    title: "Note 2",
    content: "Content of Note 2",
  },
  {
    id: 3,
    title: "Note 3",
    content: "Content of Note 3",
  },
  {
    id: 4,
    title: "Note 4",
    content: "Content of Note 4",
  },
  {
    id: 5,
    title: "Note 5",
    content: "Content of Note 5",
  },
  {
    id: 6,
    title: "Note 6",
    content: "Content of Note 6",
  },
  {
    id: 7,
    title: "Note 7",
    content: "Content of Note 7",
  },
  {
    id: 8,
    title: "Note 8",
    content: "Content of Note 8",
  },
  {
    id: 9,
    title: "Note 9",
    content: "Content of Note 9",
  },
];

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
    setNotes(updatedNotes);
  };

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bolt mb-4"> ALL Notes</h1>
      {!notes.length === 0 && <p>No notes found</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={() => deleteNote(note.id)} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
