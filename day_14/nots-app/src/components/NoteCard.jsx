import { Link } from "react-router";
import Button from "./Button";

const NoteCard = ({ note, onDelete }) => (
  <div className="bg-white shadow p-4 rounded mb-4">
    <h2 className="text-lg font-bold">{note.title}</h2>
    <p className="text-sm mt-2">{note.content}</p>

    <div className="mt-4 flex gap-2">
      <Link to={`/edit/${note.id}`}>
      <Button
        text="Edit"
        
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      />
      </Link>

      <Button
        text="Delete"
        onClick={onDelete}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      />
    </div>
  </div>
);

export default NoteCard;
