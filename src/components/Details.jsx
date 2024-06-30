import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const {entity} = useParams();
    const [detail, setDetail] = useState({});
    let entityType = "";

    useEffect(() => {
        if(entity == 'characters') {
            entityType = 'people'
        }
        else {
            entityType = entity
        }
        const fetchDetail = async () => {
            const res = await fetch(`https://www.swapi.tech/api/${entityType}/${id}`);
            const data = await res.json();
            setDetail(data.result.properties);
        };
        fetchDetail();

    }, [])

return (
    <div>
        <h1>{detail.name}</h1>
        <p>Gender: {detail.gender}</p>
        <p>Birth Yeear: {detail.birth_year}</p>
        <p>Hair Color: {detail.hair_color}</p>
        <p>Eye Color: {detail.eye_color}</p>
        <p>Species: {detail.species}</p>
        <p>Mass: {detail.mass}</p>
        <p>Model: {detail.model}</p>
        <p>Manufacturer: {detail.manufacurer}</p>
        <p>Class: {detail.class}</p>
        <p>Cost: {detail.cost}</p>
        <p>Speed: {detail.speed}</p>
        <p>Length: {detail.length}</p>
        <p>Cargo Capacity: {}detail.cargo_capacity</p>
        <p>Mimimum Crew: {detail.minimum_crew}</p>
        <p>Passengers: {detail.passengers}</p>
    </div>
);
};


export default Detail;
