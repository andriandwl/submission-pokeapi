import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pokemon.css";
const PokemonThumb = ({ id, image, name, type, _callback }) => {
  const style = type + " thumb-container";
  return (
    <div className="col-lg-3">
      <div className={style}>
        <div className="card p-3 mb-2">
          <Link
            to={`/detailPoke/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon bg-transparent">
                  <img src={image} alt="poke" height="300vh" width="300vh" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">{name}</h3>
              <div className="mt-5">
                <div className="mt-3">
                  <span className="text1">#{id}</span>
                  <div className="bg-transparent">
                    <span>{type}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <img src={image} alt={name} />
      <div classNameName="detail-wrapper">
        <h3>{name}</h3>
        <div classNameName="number">
          <small>{id}</small>
        </div>
        <small>Type: {type}</small>
      </div> */}
    </div>
  );
};

export default PokemonThumb;
