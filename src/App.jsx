import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/Moviedetails";
import Moviehunt from "./components/Moviehunt";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Moviehunt />} />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
