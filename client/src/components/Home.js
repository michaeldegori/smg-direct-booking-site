import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Home = (props) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/properties')
      .then((res) => setProperties())
      .catch((err) => console.log(err));
  });

  const listProperties = () => {
    return properties.map(property => {
      return (
        <div>
          <h1>{property.listingTitle}</h1>
        </div>
      )
    })
  }

  return <div>
    {listProperties()}
  </div>;
};

export default Home;
