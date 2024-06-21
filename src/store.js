export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",

        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    people: [],
    vehicles: [],
    planets: [],
    favorites: [],
  };
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'SET_PEOPLE':
        return {
          ...store,
          people: action.payload
        };

      case 'SET_VEHICLES':
        return {
          ...store,
          vehicles: action.payload
        };
      case 'SET_PLANETS':
        retun {
          ...store,
          planets: action.payload
        };
      case 'ADD_TO_FAVORITES':
        return {
          ...store,
          favorites: [...store.favorites, action.payload]
        };
      case 'REMOVE_FROM_FAVORITES':
        return {
          ...store,
          favorites: store.favorites.filter(item => item.uid !== action.payload.uid)
        }
    default:
      throw Error('Unknown action.');
  }    
}
