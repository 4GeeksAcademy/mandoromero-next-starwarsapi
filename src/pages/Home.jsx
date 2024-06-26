// import React from 'react';
// import EntityList from '../components/EntityList';
// import { useGlobalReducer } from '/src/hooks/useGlobalReducer.jsx';


// const Home = () => {
//   const { store } = useGlobalReducer();

//   return (
//     <div className="container">
//       <h1>People</h1>
//       <EntityList entities={store.people} />
//       <h1>Vehicles</h1>
//       <EntityList entities={store.vehicles} />
//       <h1>Planets</h1>
//       <EntityList entities={store.planets} />
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import EntityList from '../components/EntityList';
import { useGlobalState, useGlobalReducer } from '/src/hooks/useGlobalReducer.jsx';

const Home = () => {
  const state = useGlobalState();
  const { dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <h1>People</h1>
      <EntityList entities={state.people} />
      <h1>Vehicles</h1>
      <EntityList entities={state.vehicles} />
      <h1>Planets</h1>
      <EntityList entities={state.planets} />
    </div>
  );
};

export default Home;
