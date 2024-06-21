import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext} from "../store";
import { addToFavorites } from '../actions';


const EntityCard = ({entity, addToFavorites}) => (

    <div className="card">
        <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${entity.uid}.jpg`} alt={entity.name} />
        <div className="card-body">
            <h5 className="card-title">{entity.name}</h5>
            <p className="card-text">Gender: {entity.gender}</p>
            <button onClick={() => addToFavorites(entity)}>❤️</button>
            <Link to={`/details/${entity.uid}`} className="btn btn-primary">Learn More!</Link>
        </div>
    </div>
);

const EntityList = ({entites}) => {
    const { dispatch} = useContext(StoreContext);

    return (
        <div className="card-deck">
            {entites.map(entity => (
                <EntityCard key={entity.uid} entity={entity} addToFavorites={(entity)  => addToFavorites(dispatch, entity)} />
            ))}
        </div>
    );
};

export default EntityList;