import React from "react";

function MenuDetail({ allPokemons, isLoading }) {
  console.log(allPokemons);
  return isLoading ? (
    <p>Memuat ....</p>
  ) : (
    // <div>
    //   <div classNameName="card" style={{ width: "18rem" }}>
    //     <img
    //       src={allPokemons.sprites?.other.dream_world.front_default}
    //       classNameName="card-img-top"
    //       alt="..."
    //     ></img>
    //     <div classNameName="card-body">
    //       <h5 classNameName="card-title">{allPokemons.name}</h5>
    //       <p classNameName="card-text">
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <a href="/" classNameName="btn btn-primary">
    //         Height : {allPokemons.height}
    //       </a>
    //       <a href="/" classNameName="btn btn-primary">
    //         Weight : {allPokemons.weight}
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">{allPokemons.name}</h3>
            <div className="mb-1 text-muted">Height :{allPokemons.height}</div>
            <p className="mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="/" className="stretched-link">
              Continue reading
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              src={allPokemons.sprites?.other.dream_world.front_default}
              alt="caurra"
            />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">{allPokemons.name}</h3>
            <div className="mb-1 text-muted">Height :{allPokemons.height}</div>
            <p className="mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="/" className="stretched-link">
              Continue reading
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              src={allPokemons.sprites?.other.home.front_default}
              alt="caurra"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDetail;
