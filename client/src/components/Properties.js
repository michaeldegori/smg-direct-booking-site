import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Properties.css';

const Properties = (props) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/properties')
      .then((res) => setProperties(res.data))
      .catch((err) => console.log(err));
  }, []);

  const listProperties = () => {
    return properties?.map((property) => {
      return (
        <div>
          <h1>{property.listingTitle}</h1>
          <Link to={`/properties/${property._id}`}>View Property</Link>
        </div>
      );
    });
  };

  return (
    <div>
      {listProperties()}
      <Link to="/properties/add">Add New Property</Link>
    </div>
  );
};

export default Properties;
