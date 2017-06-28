import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './../reducers/root.reducer';
import logMiddleware from './../middleware/log.middleware';

const initialState = {
    recipes: [
        {
            name: 'Omelette'
        }
    ],
    ingredients: [
        {
            recipe: 'Omelette',
            name: 'Egg',
            quantity: 2
        }
    ]
};

const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(logMiddleware));

export default store;
