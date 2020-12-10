import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Properties = (props) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/properties')
      .then((res) => setProperties(res.data))
      .catch((err) => console.log(err));
  });

  const listProperties = () => {
    return properties?.map((property) => {
      return (
        <div>
          <h1>{property.listingTitle}</h1>
          <Link to={`/property/${property._id}`}>See Details</Link>
        </div>
      );
    });
  };

  return <div>{listProperties()}</div>;
};

export default Properties;
