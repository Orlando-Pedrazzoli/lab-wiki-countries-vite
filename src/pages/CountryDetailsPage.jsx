import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryDetailsPage() {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(response => {
        setCountry(response.data);
      });
  }, [countryId]);

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</h1>
      <p>
        <strong>Name:</strong> {country.name.common}
      </p>{' '}
      <p>
        <strong>Capital:</strong> {country.capital[0]}
      </p>
      <p>
        <strong>Area:</strong> {country.area} km²
      </p>
      <div>
        <h3>Borders:</h3>
        <ul>
          {country.borders.map(border => (
            <li key={border}>
              <Link to={`/${border}`}>{border}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CountryDetailsPage;
