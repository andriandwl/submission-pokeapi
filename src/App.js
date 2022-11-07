import React from "react";
import { Route, Routes } from "react-router-dom";
import Kategori from "./components/Kategori";
import Kategori2 from "./components/Kategori2";
import Kategori3 from "./components/Kategori3";
import Kategori4 from "./components/Kategori4";
// import { Route, Routes } from "react-router-dom";
// import Main from "./components/Main";
// import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
// import DetailPage from "./pages/DetailPage";
// import logo from "./assets/thai-food.png";
// import PokemonDetails from "./components/PokemonDetails";

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailPoke/:id" element={<DetailPage />} />
          <Route path="/kategori/1" element={<Kategori />} />
          <Route path="/kategori/2" element={<Kategori2 />} />
          <Route path="/kategori/3" element={<Kategori3 />} />
          <Route path="/kategori/4" element={<Kategori4 />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
