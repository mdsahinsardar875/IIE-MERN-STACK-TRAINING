import React, { useEffect } from "react";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { getNotes, saveNotes } from "../utils/localStorage";
import { useNavigate, useParams } from "react-router";

function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const note = getNotes().find((n) => n.id === id);
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, []);

  const handleUpdate = () => {
    const notes = getNotes().map((n) =>
      n.id === id ? { ...n, title, content } : n
    );
    saveNotes(notes);
    navigate("/notes");
  };

  console.log(title, content);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-yellow-100 shadow-md rounded-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Create New Note
      </h1>

      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        label="Content"
        value={content}
        rows={4}
        onChange={(e) => setContent(e.target.value)}
        className="w-full mb-6 resize-none px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Button
        text="Save Note"
        onClick={handleUpdate}
        className="w-full bg-blue-300 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      />
    </div>
  );
}

export default EditNote;
