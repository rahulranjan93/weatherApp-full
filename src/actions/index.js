import { weatherApiKey } from '../../config/keys';

const API_KEY = weatherApiKey;
import axios from 'axios';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${
  API_KEY
}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  return dispatch => {
    axios.get(url).then(res => dispatch({ type: FETCH_WEATHER, payload: res }));
  };
  // const request = axios.get(url)
  // return(
  //   {
  //     type: FETCH_WEATHER,
  //     payload : request
  //   }
  // )
}
