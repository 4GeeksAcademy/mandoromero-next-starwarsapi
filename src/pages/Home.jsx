import React from 'react';
import EntityList from '../components/EntityList';
import useGlobalReducer from '../hooks/useGlobalReducer';

const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container" style={{ fontFamily:  "death star, san-serif", width: "100%", height: "100%", margin: "0", padding: "100px", backgroundColor: "#000", color: "#ffe81f" }}>
      <h1 style={{ fontSize: "55px" }}>CHARACTERS</h1>
      <EntityList entities={store.characters} entityType={"characters"}/>
      <h1 style={{ fontSize: "55px" }}>VEHICLES</h1>
      <EntityList entities={store.vehicles} entityType={"vehicles"}/>
      <h1 style={{ fontSize: "55px" }}>PLANETS</h1>
      <EntityList entities={store.planets} entityType={"planets"}/>
    </div>
  );
};

export default Home;



