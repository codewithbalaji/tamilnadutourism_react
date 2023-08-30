import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import PlaceToVisit from './pages/PlaceToVisit';
import Navigation from './components/Navigation';
import BestTimeToVisit from './pages/BestTimeToVisit';
import Food from './pages/Food';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placetovisit" element={<PlaceToVisit />} />
        <Route path="/besttimetovisit" element={<BestTimeToVisit />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </div>
  );
};

export default App;
