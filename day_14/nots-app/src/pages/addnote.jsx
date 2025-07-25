import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { getNotes, saveNotes } from "../utils/localStorage";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigte = useNavigate();

  const handleSubmit = () => {
    const newNote = {
      id: uuidv4(),
      title,
      content: content,
    };
     const updatedNotes = [...getNotes(), newNote];
     saveNotes(updatedNotes);
     console.log(updatedNotes);
     
     navigte("/notes");
  };

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
        onClick={handleSubmit}
        className="w-full bg-blue-300 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      />
    </div>
  );
};

export default AddNote;
