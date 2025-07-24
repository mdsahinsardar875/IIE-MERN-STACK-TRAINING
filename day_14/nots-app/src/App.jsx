import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
