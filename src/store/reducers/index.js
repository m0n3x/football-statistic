import {
  addTeam
} from '../actions'
import {
  removeTeam
} from '../actions'

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
      favourites.splice(favourites.indexOf(action.payload.team), 1)
      return {
        ...state,
        favourites
      }
    }
    default:
      return state
  }
}