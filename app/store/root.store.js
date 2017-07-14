import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './../reducers/root.reducer';
import logMiddleware from './../middleware/log.middleware';
import apiMiddleware from './../middleware/api.middleware';

// enabling Redux Dev Tools
let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(logMiddleware, apiMiddleware));

export default store;
