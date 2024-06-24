

export const fetchPeople = async (dispatch) => {
    const response = await fetch ('https://www.swapi.tech/api/people');
    const data = await response.json();
    dispatch({type: 'SET_PEOPLE', payload: data.results});
};

export const fetchVehicles = async (dispatch) => {
    const response = await fetch ('https://www.swapi.tech/api/vehicles');
    const data = await response.json();
    dispatch ({type: 'SET_VEHICLES', payload: data.results});
};

export const fetchPlanets = async (dispatch) => {
    const response = await fetch ('https://www.swapi.tech/api/planets');
    const data = await response.json();
    dispatch ({type: 'SET_PLANETS', payload: data.results});
};

export const addToFavorites = (dispatch, entity) => {
    dispatch({type: 'ADD_TO_FAVORITES', payload: entity});
};

export const removeFromFavorites = (dispatch, entity) => {
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: entity});
};

async function fetchAndStoreData(url, key) {
    let res = await fetch(url);
    let data = await res.json();
    localStorage.setItem(key, JSON.stringify(data.results));
    return data.results;
  }