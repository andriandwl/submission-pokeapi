import React from "react";

function MenuDetail({ allPokemons }) {
  console.log(allPokemons);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{allPokemons.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Height : {allPokemons.height}
          </a>
          <a href="/" className="btn btn-primary">
            Weight : {allPokemons.weight}
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuDetail;
