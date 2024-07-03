import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id, entity } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [entityType, setEntityType] = useState('');

    useEffect(() => {
        let type = entity === 'characters' ? 'people' : entity;
        setEntityType(type);
        const fetchDetail = async () => {
            const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
            const data = await res.json();
            setDetail(data.result);
            setLoading(false);
        };
        fetchDetail();

    }, [])
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {entityType === "people" && (
                    <div>
                        <h1>{detail.properties.name}</h1>
                        <p>ID: {detail.uid}</p>
                        <p>Gender: {detail.properties.gender}</p>
                        <p>Birth Year: {detail.properties.birth_year}</p>
                        <p>Hair Color: {detail.properties.hair_color}</p>
                        <p>Height: {detail.properties.height}</p>
                        <p>Species: {detail.properties.species}</p>
                        <p>Mass: {detail.properties.mass}</p>
                        <p>Description: {detail.description}</p>
                    </div>
            )}
            {entityType === "vehicles" && (
                    <div>
                        <h1>{detail.properties.name}</h1>
                        <p>ID: {detail.uid}</p>
                        <p>Model: {detail.properties.model}</p>
                        <p>Manufacturer: {detail.properties.manufacturer}</p>
                        <p>Vehicle Class: {detail .properties.vehicle_class}</p>
                        <p>Cost: {detail.properties.cost_in_credits}</p>
                        <p>Speed: {detail.properties.Max_atmosphering_speed}</p>
                        <p>Length: {detail.properties.length}</p>
                        <p>Cargo Capacity: {detail.properties.cargo_capacity}</p>
                        <p>Crew: {detail.properties.crew}</p>
                        <p>Passengers: {detail.properties.passengers}</p>
                        <p>Films: {detail.properties.films}</p>
                        <p>Description: {detail.description}</p>
                    </div>
            )}
                {entityType === "planets" && (
                    <div>
                        <h1>{detail.properties.name}</h1>
                        <p>ID: {detail.uid}</p>
                        <p>Diameter: {detail.properties.diameter}</p>
                        <p>Rotation Period: {detail.properties.rotation_period}</p>      
                        <p>Orbital Period:  {detail.properties.orbital_period}</p>
                        <p>Gravity: {detail.properties.gravity}</p>
                        <p>Population: {detail.properies.population}</p>
                        <p>Climate: {detail.properties.climate}</p>
                        <p>Terrain: {detail.properies.terrain}</p>
                    </div>
            )}
        </div>
    );
};


export default Detail;
