import { useReducer, useContext, createContext } from 'react';
import storeReducer, { initialStore } from "../store"
const StoreContext = createContext()

export function StoreProvider({ children }) {
  // Initialize reducer with the initial state.
  const [store, dispatch] = useReducer(storeReducer, initialStore())
  // Provide the store and dispatch method to all child components.
  return <StoreContext.Provider value={{ store, dispatch }}>
      {children}
  </StoreContext.Provider>
}

export default function useGlobalReducer() {
  const { dispatch, store } = useContext(StoreContext)
  return { dispatch, store };
}
