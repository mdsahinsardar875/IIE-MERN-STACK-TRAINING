import { Link } from "react-router";

const Navbar = () => (
  <nav className="bg-blue-700 text-white px-5 py-3">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">📝 notes app</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/create-note">Create Note</Link>
      </div>
    </div>
  </nav>
);
export default Navbar;