import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuDetail from "../components/MenuDetail";

function DetailPage() {
  const { id } = useParams();
  const [allPokemons, setAllPokemons] = useState([]);

  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async (id) => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        const findPoke = allPokemons.find((poke) => poke.id === id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons(id);
  }, []);
  return (
    <div>
      <MenuDetail {...allPokemons} id={id} />
    </div>
  );
}

export default DetailPage;
