import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuDetail from "../components/MenuDetail";

function DetailPage() {
  const { id } = useParams();
  const [allPokemons, setAllPokemons] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getAllPokemons = async (id) => {
    try {
      const { data: dataPokemon } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setAllPokemons(dataPokemon);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setLoading(false);
    getAllPokemons(id);
  }, [id]);
  return (
    <div>
      <MenuDetail allPokemons={allPokemons} id={id} isLoading={isLoading} />
    </div>
  );
}

export default DetailPage;
