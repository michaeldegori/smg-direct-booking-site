import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';
import '../styles/EditProperty.css';

const EditProperty = (props) => {
  const history = useHistory();

  const [propertyEdit, setPropertyEdit] = useState({
    photos: '',
    bedrooms: 0,
    bathrooms: 0,
    listingTitle: '',
    description: '',
    maxGuests: 0,
    address: '',
    directions: '',
    checkinInstructions: '',
    wifiDetails: '',
    houseManual: '',
    houseRules: '',
    cancellationPolicy: '',
  });

  useEffect(() => {
    api
      .get(`http://localhost:3000/properties/${props.match.params.id}`)
      .then((res) => {
        setPropertyEdit(res.data);
      })
      .catch((err) => {});
  }, []);

  const handleChange = (event) => {
    setPropertyEdit({
      ...propertyEdit,
      [event.target.name]: event.target.value,
    });
  };

  const submitEditProperty = (event) => {
    event.preventDefault();
    api
      .put(`http://localhost:3000/properties/${propertyEdit._id}`, propertyEdit)
      .then((res) => {
        history.push(`/properties/${propertyEdit._id}`);
        console.log('Property Updated');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submitEditProperty}>
        <input
          type="file"
          name="photos"
          placeholder="photos"
          value={propertyEdit.photos}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="# of bedrooms"
          value={propertyEdit.bedrooms}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="# of bathrooms"
          value={propertyEdit.bathrooms}
          onChange={handleChange}
        />
        <input
          name="listingTitle"
          placeholder="listing title"
          value={propertyEdit.listingTitle}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="description"
          value={propertyEdit.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxGuests"
          placeholder="max # of guests"
          value={propertyEdit.maxGuests}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="address"
          value={propertyEdit.address}
          onChange={handleChange}
        />
        <textarea
          name="directions"
          placeholder="directions"
          value={propertyEdit.directions}
          onChange={handleChange}
        />
        <textarea
          name="checkinInstructions"
          placeholder="checkin instructions"
          value={propertyEdit.checkinInstructions}
          onChange={handleChange}
        />
        <textarea
          name="wifiDetails"
          placeholder="wifi info"
          value={propertyEdit.wifiDetails}
          onChange={handleChange}
        />
        <input
          name="houseManual"
          placeholder="house manual link"
          value={propertyEdit.houseManual}
          onChange={handleChange}
        />
        <textarea
          name="houseRules"
          placeholder="house rules"
          value={propertyEdit.houseRules}
          onChange={handleChange}
        />
        <input
          name="cancellationPolicy"
          placeholder="cancellation policy"
          value={propertyEdit.cancellationPolicy}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditProperty;
