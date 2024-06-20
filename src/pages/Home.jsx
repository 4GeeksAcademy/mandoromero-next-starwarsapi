import React, { useState, useEffect } from "react";

function Home() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const peopleData = await fetchAndStoreData('https://swapi.tech/api/people/?format=json', 'people');
            setPeople(peopleData);

            const planetsData = await fetchAndStoreData('https://swapi.tech/api/planets/?format=json', 'planets');
            setPlanets(planetsData);

            const vehiclesData = await fetchAndStoreData('https://swapi.tech/api/vehicles/?format=json', 'vehicles');
            setVehicles(vehiclesData);

            setLoading(false);
        }

        function readOrFetchData(key) {
            const storedData = localStorage.getItem(key);
            if (storedData) {
                return JSON.parse(storedData);
            }
            return null;
        }

        const storedPeople = readOrFetchData('people');
        const storedPlanets = readOrFetchData('planets');
        const storedVehicles = readOrFetchData('vehicles');

        if (storedPeople && storedPlanets && storedVehicles) {
            setPeople(storedPeople);
            setPlanets(storedPlanets);
            setVehicles(storedVehicles);
            setLoading(false);
        } else {
            fetchData();
        }
    }, []);

    async function fetchAndStoreData(url, key) {
        let res = await fetch(url);
        let data = await res.json();
        localStorage.setItem(key, JSON.stringify(data.results));
        return data.results;
    }

    console.log('people', people);
    console.log('planets', planets);
    console.log('vehicles', vehicles);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>Star Wars Data</h1>
            <h2>People</h2>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>
            <h2>Planets</h2>
            <ul>
                {planets.map((planet, index) => (
                    <li key={index}>{planet.name}</li>
                ))}
            </ul>
            <h2>Vehicles</h2>
            <ul>
                {vehicles.map((vehicle, index) => (
                    <li key={index}>{vehicle.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
