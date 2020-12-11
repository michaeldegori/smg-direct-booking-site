import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/PropertyDetails.css';

const PropertyDetails = (props) => {
  const [property, setProperty] = useState();

  useEffect(() => {
    api
      .get(`http://localhost:3000/properties/${props.match.params.id}`)
      .then((res) => {
        setProperty(res.data);
      });
  }, []);

  return (
    <div>
      <h1>{property?.listingTitle}</h1>
      <Link to={`/properties/edit/${property?._id}`}>Edit Property</Link>
    </div>
  );
};

export default PropertyDetails;
