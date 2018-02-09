import React from 'react';
import DashboardPage from '../components/DashboardPage';
import SearchBar from '../components/search-bar';
import WeatherList from '../components/weather-list';
import Header from '../components/Header';

const AppRouter = () => (
  <div>
    <Header />
    <SearchBar />
    <WeatherList />
  </div>
);

export default AppRouter;
