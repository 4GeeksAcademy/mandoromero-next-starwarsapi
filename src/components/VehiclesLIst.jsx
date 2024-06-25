import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { addToFavorites } from '../actions';


const vehicleCard = ({ vehicle, addToFavorites }) => (
    <div className="card" style={{ width: "200px", height: "250px", marginBottom: "10px", display: "flex", border: "3px black solid", color: "#ffe81f", backgroundColor: "#000000"  }}>
        <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicle/${vehicle.uid}.jpg`} alt={entity.name} width="100" height="100"/>
        <div className="card-body">
            <div style={{ display: "flex" }}>
                <div style={{ width: "85%" }}>
                    <h6 className="card-title">{entity.name}</h6>
                </div>
                <button style={{ border: "none", marginLeft: "5px", marginRight: "0", backgroundColor: "#000000" }} onClick={() => addToFavorites(entity)}>❤️</button>
            </div>
        </div>    
        <p className="card-text" style={{ margin: "0", fontSize: "12px" }}>Model: {vehicles.model}</p>
        <p className="card-text" style={{ margin: "0", fontSize: "12px" }}>Crew: {vehicles.crew}</p>
        <p className="card-text" style={{ margin: "0", fontSize: "12px" }}>Passangers: {vehicles.passangers}</p> 
        <Link to={`/details/${vehicles.uid}`} className="btn" style={{ fontSize: "14px", marginTop: "5px", marginRight: "0", marginLeft: "55px", marginBottom: "0", backgroundColor: "#ffe81f" }}>Learn more!</Link>
    </div>
);

const VehiclesList = ({ vehicles }) => {
    const { dispatch } = useGlobalReducer();
  
    return (
      <div className="card-deck">
        {vehicles.map(vehicle => (
          <VehiclesCard key={vehicle.uid} vehicle={vehicle} addToFavorites={(vehicle) => addToFavorites(dispatch, vehicle)} />
        ))}
      </div>
    );
  };

  export default VehiclesList;
  
