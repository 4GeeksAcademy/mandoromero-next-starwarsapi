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
                        <p>Gender: {detail.properties.gender}</p>
                        <p>Birth Year: {detail.properties.birth_year}</p>
                        <p>Hair Color: {detail.properties.hair_color}</p>
                        <p>Eye Color: {detail.properties.eye_color}</p>
                        <p>Species: {detail.properties.species}</p>
                        <p>Mass: {detail.properties.mass}</p>
                        <p>Description: {detail.description}</p>
                    </div>
            )}
            {entityType === "vehicles" && (
                    <div>
                        <p>Model: {detail.properties.model}</p>
                            <p>Manufacturer: {detail.properties.manufacturer}</p>
                            <p>Class: {detail.properties.class}</p>
                            <p>Cost: {detail.properties.cost}</p>
                            <p>Speed: {detail.properties.speed}</p>
                            <p>Length: {detail.properties.length}</p>
                            <p>Cargo Capacity: {detail.properties.cargo_capacity}</p>
                            <p>Mimimum Crew: {detail.properties.minimum_crew}</p>
                            <p>Passengers: {detail.properties.passengers}</p>
                            <p>Description: {detail.description}</p>
                    </div>
            )}
                {entityType === "planets" && (
                    <div>
                    
                    </div>
            )}
            
        
        </div>
    );
};


export default Detail;
