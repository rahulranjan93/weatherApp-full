import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log([action.payload.data].concat(state));
      console.log(action.payload);
      console.log(action.payload.data);
      return [action.payload.data].concat(state);
  }
  return state;
}
