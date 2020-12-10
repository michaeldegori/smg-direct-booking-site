import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const PropertyDetails = (props) => {
  const [property, setProperty] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:3000/properties/${props.match.params.id}`).then(
      (res) => {
        setProperty(res.data);
      }
    );
  }, []);

  return <div></div>;
};

export default PropertyDetails;
