import { addTeam, removeTeam, removeAll } from '../actions'

const initialState = {
  favourites: [],
}

export default function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case addTeam.toString(): {
      const favourites = state.favourites.concat(payload.team);
      return {
        favourites
      }
    }
    case removeTeam.toString(): {
      const favourites = [...state.favourites];
      const teamIndex = favourites.findIndex(team => team.id === payload.id);
      if(teamIndex === -1) return state;
      favourites.splice(teamIndex, 1);
      return {
        favourites
      }
    }
    case removeAll.toString(): {
      return initialState;
    }
    default:
      return state
  }
}