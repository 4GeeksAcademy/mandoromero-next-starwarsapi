import React, { useState, useEffect } from "react";

function Home() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch data from the API and save it to state and local storage
        async function fetchData() {
            const peopleData = await fetchAndStoreData('https://swapi.dev/api/people/?format=json', 'people');
            setPeople(peopleData);

            const planetsData = await fetchAndStoreData('https://swapi.dev/api/planets/?format=json', 'planets');
            setPlanets(planetsData);

            const vehiclesData = await fetchAndStoreData('https://swapi.dev/api/vehicles/?format=json', 'vehicles');
            setVehicles(vehiclesData);

            setLoading(false);
        }

        // Read data from local storage or fetch if not available
        function readOrFetchData(key, fetchFunction) {
            const storedData = localStorage.getItem(key);
            if (storedData) {
                return JSON.parse(storedData);
            } else {
                fetchFunction();
            }
        }

        // Read data from local storage first
        const storedPeople = readOrFetchData('people', fetchData);
        const storedPlanets = readOrFetchData('planets', fetchData);
        const storedVehicles = readOrFetchData('vehicles', fetchData);

        if (storedPeople) setPeople(storedPeople);
        if (storedPlanets) setPlanets(storedPlanets);
        if (storedVehicles) setVehicles(storedVehicles);

        // Fetch data if not available in local storage
        if (!storedPeople || !storedPlanets || !storedVehicles) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, []);

    // Function to fetch data and save it to local storage
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
            <p>Hello World</p>
            {/* Render your data here */}
        </div>
    );
}

export default Home;

