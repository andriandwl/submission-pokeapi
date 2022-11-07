import React, { useEffect, useState } from "react";
import PokemonThumb from "./PokemonThumb";

function Main() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
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
        allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div className="app-contaner">
      <div className="pokemon-container">
        <div className="container">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Poke...."
            />
            <button
              className="btn btn-md btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Cari
            </button>
            <div className="btn-group">
              <button className="btn btn-secondary btn-md" type="button">
                Kategori
              </button>
              <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="all-container gap-2">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {allPokemons.map((pokemonStats, index) => (
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />
            ))}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
