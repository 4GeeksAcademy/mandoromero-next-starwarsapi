import React, { useState, useEffect } from "react";



 function Home() {

	const [people, setPeople] = useStat([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [loading, setLoading] = useState(true);

useEffect => {
	async function fetchPeople() {
		let res = await fetch('https://www.swapi.co/api/people/?format=json');
		let data = await res.json();
		setPeople(data.results);
	}

	async function fetchPlanets() {
		let res = await fetch('https://www.swapi.co/api/people/?format=json');
		let data = await res.json();
		setPlanets(data.results);	
	}

	async function fetchVehicles() {
		let res = await fetch('https://www.swapi.co/api/vehicles/?format=json');
		let data = await res.json();
		setVehicles(data.results);
	}


	fetchPeople();
	fetchPlanets();
	fetchVehicles();

}, []
 
console.log('data', people);
console.log('data', planets);
console.log('data', vehicles);

return (
	<div classNama="container">
		<p>Hello World</p>	
	</div>
);
};
 
	export default Home;

