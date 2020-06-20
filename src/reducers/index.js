import CitiesReducer from './cities_reducer';
import ActiveReducer from './active_city_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  active: ActiveReducer
});

export default rootReducer;

