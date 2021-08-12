import { createActions } from 'redux-actions';

export const { addTeam, removeTeam, removeAll } = createActions('ADD_TEAM', 'REMOVE_TEAM', 'REMOVE_ALL');

