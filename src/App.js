import React from "react";
import { Route, Routes } from "react-router-dom";
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
        </Routes>
      </main>
    </div>
  );
};

export default App;
