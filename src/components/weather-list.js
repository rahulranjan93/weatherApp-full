import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import MyMapComponent from './MyMapComponent';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    //console.log(temps)
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <div style={{ width: '200px', marginLeft: '52px' }}>
            <MyMapComponent
              className="content"
              isMarkerShown
              lat={lat}
              lon={lon}
            />
          </div>
        </td>
        <td>
          <Chart className="content" data={temps} color="red" />
        </td>
        <td>
          <Chart className="content" data={pressures} color="blue" />
        </td>
        <td>
          <Chart className="content" data={humidities} color="green" />
        </td>
      </tr>
    );
  }
  render() {
    console.log(this.props.weather);
    return (
      <div>
        {this.props.weather.length == 0 ? (
          ''
        ) : (
          <table>
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
              </tr>
            </thead>

            <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
          </table>
        )}
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //ES6 syntax
}

export default connect(mapStateToProps)(WeatherList);
