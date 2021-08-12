import { addTeam, removeTeam, removeAll } from '../actions'

const initialState = {
  favourites: [],
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case addTeam.toString(): {
      const favourites = [...state.favourites];
      favourites.push(action.payload.team);
      return {
        ...state,
        favourites
      }
    }
    case removeTeam.toString(): {
      const favourites = [...state.favourites];
      const teamIndex = favourites.findIndex(team => team.id === action.payload.id);
      if(teamIndex === -1) return state;
      favourites.splice(teamIndex, 1);
      return {
        ...state,
        favourites
      }
    }
    case removeAll.toString(): {
      const favourites = [...state.favourites];
      favourites.splice(0, favourites.length);
      return {
        ...state,
        favourites
      }
    }
    default:
      return state
  }
}