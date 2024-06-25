import React from 'react';
import EntityList from '../components/EntityList';
import useGlobalReducer from '../hooks/useGlobalReducer';
import VehiclesList from '../components/VehiclesList';

const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container">
      <h1>Characters</h1>
      <EntityList entities={store.vehicles} />
      <h1>Vehicles</h1>
      <VehiclesList entities={store.vehicles} />
      <h1>Planets</h1>
      <EntityList entities={store.planets} />
    </div>
  );
};

export default Home;