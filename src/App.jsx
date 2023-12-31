import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
