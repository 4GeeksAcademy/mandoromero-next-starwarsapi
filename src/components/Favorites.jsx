import React from 'react';
import EntityList from './EntityList';
import { useGlobalReducer } from '/src/hooks/useGlobalReducer.jsx';
import { removeFromFavorites } from '../actions';

const Favorites = () => {
    const {store, dispatch} = useGlobalReducer();
    const {favorites} = store;

    return(
        <div className="container">
            <h1>Favorites</h1>
            <EntityList entities={favorites} addToFavorites={(entity) => removeFromFavorites(dispatch, entity)}  /> 
            <VehiclesList vehicles={favorites} addToFavorites={(vehicle) => removeFromFavorites(disoatch, vehicle)} />
        </div>

    );
};



export default Favorites;

