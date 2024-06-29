import React from 'react';
import EntityList from '../components/EntityList';
import useGlobalReducer from '../hooks/useGlobalReducer';

const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container">
      <h1>Characters</h1>
      <EntityList entities={store.characters} entityType={"characters"}/>
      <h1>Vehicles</h1>
      <EntityList entities={store.vehicles} entityType={"vehicles"}/>
      <h1>Planets</h1>
      <EntityList entities={store.planets} entityType={"planets"}/>
    </div>
  );
};

export default Home;



