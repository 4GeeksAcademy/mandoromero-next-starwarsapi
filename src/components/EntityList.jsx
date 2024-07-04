import React from 'react';
import { Link } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../actions';
import useGlobalReducer from '/src/hooks/useGlobalReducer.jsx';

const EntityList = ({ entities, entityType }) => {
  const { store, dispatch } = useGlobalReducer();
  const { favorites } = store;

  return (
    <div className="card-deck d-flex col-10 overflow-auto mb-5 mx-auto">
      {entities.map(entity => {
        let derivedEntityType = entityType;

        if (typeof entityType === 'undefined') {
          if (entity.url.includes('people')) {
            derivedEntityType = 'characters';
          } else if (entity.url.includes('planets')) {
            derivedEntityType = 'planets';
          } else if (entity.url.includes('vehicles')) {
            derivedEntityType = 'vehicles';
          }
        }

        const isFavorite = favorites.some(fav => fav.uid === entity.uid);

        const handleFavorite = () => {
          if (isFavorite) {
            removeFromFavorites(dispatch, entity);
          } else {
            addToFavorites(dispatch, entity);
          }
        };

        return (
          <div key={entity.uid}>
            <div className="card mx-2" style={{ fontFamily:  "Star Wars, sans-serif", width: "300px", height: "410px", marginBottom: "10px", display: "flex", border: "3px black solid", color: "#ffe81f", backgroundColor: "#000000" }}>
              <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${derivedEntityType}/${entity.uid}.jpg`} alt={entity.name} width="100" height="225" />
              <div className="card-body" style={{ height: "5px", paddingBottom: "0", marginBottom: "0" }}>
                <div style={{ display: "flex", marginBottom: "0" }}>
                  <div style={{ width: "85%" }}>
                    <h5 className="card-title" style={{ marginBottom: "0"}}>{entity.name}</h5>
                  </div>
                  <button style={{ border: "none", marginLeft: "5px", marginRight: "0", backgroundColor: "#000000" }} onClick={handleFavorite}>
                    {isFavorite ? '💔' : '❤️'}
                  </button>
                </div>
              </div>
              <Link to={`/details/${derivedEntityType}/${entity.uid}`} className="btn" style={{ width: "200px", fontSize: "14px", marginTop: "10px", marginRight: "auto", marginLeft: "auto", marginBottom: "10px", backgroundColor: "#ffe81f" }}>Learn more!</Link>
            </div>  
          </div>
        );
      })}
    </div>
  );
};

export default EntityList;



