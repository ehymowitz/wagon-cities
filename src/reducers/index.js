import { combineReducers } from 'redux';
import CitiesReducer from './cities_reducer';

const rootReducer = combineReducers({
  cities: CitiesReducer,
});

export default rootReducer;

