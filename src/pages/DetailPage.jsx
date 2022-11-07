import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuDetail from "../components/MenuDetail";

function DetailPage() {
  const { id } = useParams();
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemons = async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const responseJson = await response.json();

      setAllPokemons(responseJson);
    };
    getAllPokemons(id);
  }, [id]);
  return (
    <div>
      <MenuDetail allPokemons={allPokemons} id={id} />
    </div>
  );
}

export default DetailPage;
