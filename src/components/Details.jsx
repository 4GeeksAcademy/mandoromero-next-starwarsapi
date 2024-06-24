import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
            const data = await res.json();
            setDetail(data.res.properties);
        };
        fetchDetail();

    }, [id])

return (
    <div>
        <h1>{detail.name}</h1>
        <p>Gender: {detail.gender}</p>
        <p>Hair Color: {detail.hair_color}</p>
        <p>Eye Color: {detail.eye_color}</p>
    </div>
);
};
export default Detail;