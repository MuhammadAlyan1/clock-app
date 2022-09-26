import { useState } from 'react';

const useFetchLocation = () => {
  const [userLocation, setUserLocation] = useState('');
  const fetchLocation = async () => {
    const URL = 'https://api.ipregistry.co/39.40.30.237?key=r5dg9j863zw3bk8o';
    const response = await fetch(URL);
    const data = await response.json();
    const city = data.location.city;
    const country = data.location.country.name;
    setUserLocation(`${city}, ${country}`);
  };

  fetchLocation();

  return userLocation;
};

export default useFetchLocation;
