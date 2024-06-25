import React from 'react';
import EntityList from './EntityList';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { removeFromFavorites } from '../actions';
import VehiclesList from './VehiclesList';

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