import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";

import Erro from "./pages/Erro";

import Header from "./components/Header";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Movie />} />
        <Route path="/favoritos" element={<Favorites />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
