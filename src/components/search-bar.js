import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onFormSubmit}>
          <div>
            <input
              className="input"
              value={this.state.term}
              placeholder="Enter the name of the city"
              onChange={this.onInputChange}
            />

            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { fetchWeather: term => dispatch(fetchWeather(term)) };
}
export default connect(null, mapDispatchToProps)(SearchBar);
