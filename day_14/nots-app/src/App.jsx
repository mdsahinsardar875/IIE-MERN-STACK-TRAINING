import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import AddNote from "./pages/addnote";
import Notes from "./pages/notes";
import EditNote from "./pages/editnote";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-note" element={<AddNote />} />
        <Route path="/edit/:id" element={<EditNote />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
