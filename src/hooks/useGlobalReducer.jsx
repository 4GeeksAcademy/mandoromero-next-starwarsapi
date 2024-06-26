// import { useReducer, useContext, createContext } from 'react';

// const GlobalStateContext = createContext();
// const GlobalDispatchContext = createContext();

// const initialState = {
//   favorites: []
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_FAVORITES':
//       return {
//         ...state,
//         favorites: [...state.favorites, action.payload]
//       };
//     default:
//       return state;
//   }
// };

// export const StoreProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <GlobalStateContext.Provider value={state}>
//       <GlobalDispatchContext.Provider value={dispatch}>
//         {children}
//       </GlobalDispatchContext.Provider>
//     </GlobalStateContext.Provider>
//   );
// };

// export const useGlobalState = () => useContext(GlobalStateContext);
// export const useGlobalReducer = () => {
//   const dispatch = useContext(GlobalDispatchContext);
//   return { dispatch };
// };
import { useReducer, useContext, createContext } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const initialState = {
  favorites: [],
  people: [], // Initialize with empty array or data if needed
  vehicles: [], // Initialize with empty array or data if needed
  planets: [] // Initialize with empty array or data if needed
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    // Add other cases as necessary
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalReducer = () => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  return { state, dispatch };
};