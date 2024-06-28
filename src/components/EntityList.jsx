import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalReducer } from '/src/hooks/useGlobalReducer.jsx';
import { addToFavorites } from '../actions';

const EntityCard = ({ entity, addToFavorites }) => (
  <div className="card" style={{ width: "200px", height: "250px", marginBottom: "10px", display: "flex", border: "3px black solid", color: "#ffe81f", backgroundColor: "#000000"  }}>
    <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${entity.uid}.jpg`} alt={entity.name} width="100" height="100"/>   
    <div className="card-body">
      <div style={{ display: "flex" }}>
        <div style={{ width: "85%" }}>
          <h6 className="card-title">{character.name}</h6>
        </div>
        <button style={{ border: "none", marginLeft: "5px", marginRight: "0", backgroundColor: "#000000" }} onClick={() => addToFavorites(entity)}>❤️</button>
      </div>
    </div>    
    <p className="card-text" style={{ margin: "0", fontSize: "12px" }}>Model: {vehicle.model}</p>
    <p className="card-text" style={{ margin: "0", fontSize: "12px" }}>Crew: {vehicle.crew}</p>
    <p className="card-text" style={{ margin: "0", fontSize: "12px" }}>Passangers: {vehicle.passangers}</p> 
    <Link to={`/details/${entity.uid}`} className="btn" style={{ fontSize: "14px", marginTop: "5px", marginRight: "0", marginLeft: "55px", marginBottom: "0", backgroundColor: "#ffe81f" }}>Learn more!</Link>
  </div>
);

const EntityList = ({ entities }) => {
  const { dispatch } = useGlobalReducer();

  return (
    <div className="card-deck">
      {entities.map(entity => (
        <EntityCard key={entity.uid} entity={entity} addToFavorites={(entity) => addToFavorites(dispatch, entity)} />
      ))}
    </div>
  );
};

export default EntityList;

