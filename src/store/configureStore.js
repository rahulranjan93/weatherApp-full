import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import WeatherReducer from '../reducers/reducer-weather';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      weather: WeatherReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
