import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numbers: (state, action) => {
        return {
            min: 1,
            max: 10
        }
    }
});

export const storeConfig = () => {
    return createStore(reducers);
}