import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalReducer } from '/src/hooks/useGlobalReducer.jsx';
import { addToFavorites } from '../actions';

const EntityCard = ({ entity, addToFavorites }) => (
  <div className="card">
    <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${entity.uid}.jpg`} alt={entity.name} />
    <div className="card-body">
      <h5 className="card-title">{entity.name}</h5>
      <p className="card-text">Gender: {entity.gender}</p>
      <button onClick={() => addToFavorites(entity)}>❤️</button>
      <Link to={`/details/${entity.uid}`} className="btn btn-primary">Learn more!</Link>
    </div>
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

