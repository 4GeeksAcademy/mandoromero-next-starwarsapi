import React from 'react';
import EntityList from '../components/EntityList';
import useGlobalReducer from '../hooks/useGlobalReducer';

const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container">
      <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>CHARACTERS</h1>
      <EntityList entities={store.characters} entityType={"characters"}/>
      <h1 style={{ fontWeight: "bold" }}>VEHICLES</h1>
      <EntityList entities={store.vehicles} entityType={"vehicles"}/>
      <h1 style={{ fontWeight: "bold" }}>PLANETS</h1>
      <EntityList entities={store.planets} entityType={"planets"}/>
    </div>
  );
};

export default Home;



