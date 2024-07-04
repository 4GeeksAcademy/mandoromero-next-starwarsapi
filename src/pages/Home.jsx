import React from 'react';
import EntityList from '../components/EntityList';
import useGlobalReducer from '../hooks/useGlobalReducer';

const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container" style={{ fontFamily:  "Star Wars, sans-serif",}}>
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



