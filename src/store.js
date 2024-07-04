export const initialStore = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return {
    cards: [],
    characters: [],
    vehicles: [],
    planets: [],
    favorites: storedFavorites,
  };
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PEOPLE':
      return {
        ...state,
        characters: action.payload,
      };
    case 'SET_VEHICLES':
      return {
        ...state,
        vehicles: action.payload,
      };
    case 'SET_PLANETS':
      return {
        ...state,
        planets: action.payload,
      };
    case 'ADD_TO_FAVORITES': {
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    }
    case 'REMOVE_FROM_FAVORITES': {
      const updatedFavorites = state.favorites.filter(item => item.uid !== action.payload.uid);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    }
    default:
      return state;
  }
};

export default storeReducer;
