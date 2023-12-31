import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className='container mt-3'>
      <h1>WikiCountries: Your Guide to the World</h1>
      <div className='list-group'>
        {countries.map(country => (
          <Link
            key={country.alpha3Code}
            to={`/${country.alpha3Code}`}
            className='list-group-item list-group-item-action'
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name.common} Flag`}
              style={{ width: '32px', marginRight: '10px' }}
            />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
