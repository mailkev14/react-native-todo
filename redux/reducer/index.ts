import { combineReducers } from 'redux';

import { AppState } from '../../models/state.interface';

import TodoReducer from './TodoReducer';

export const rootReducer = combineReducers<AppState>({
    todos: TodoReducer
});