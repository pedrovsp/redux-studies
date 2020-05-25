import { createStore, combineReducers } from 'redux';
import { Numbers, numbers } from '../store/reducers/numbers';

export interface RootState {
    numbers: Numbers
}

const reducers = combineReducers({
    numbers: numbers
});

export const storeConfig = () => {
    return createStore(reducers);
}