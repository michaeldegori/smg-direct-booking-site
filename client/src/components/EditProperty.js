import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const EditProperty = (props) => {
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
    Axios.get(`http://localhost:3000/properties/${props.match.params.id}`).then(
      (res) => {
        setPropertyEdit(res.data);
      }
    );
  }, []);

  const handleChange = (event) => {
    setPropertyEdit({
      ...propertyEdit,
      [event.target.name]: event.target.value,
    });
  };

  const submitEditProperty = (event) => {
    event.preventDefault();

    Axios.put(
      `http://localhost:3000/properties/${propertyEdit._id}`,
      propertyEdit
    )
      .then((res) => {
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
          placeholder={propertyEdit.photos}
          value={propertyEdit.photos}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bedrooms"
          placeholder={propertyEdit.bedrooms}
          value={propertyEdit.bedrooms}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bathrooms"
          placeholder={propertyEdit.bathrooms}
          value={propertyEdit.bathrooms}
          onChange={handleChange}
        />
        <input
          type="text"
          name="listingTitle"
          placeholder={propertyEdit.listingTitle}
          value={propertyEdit.listingTitle}
          onChange={handleChange}
        />
        <input
          type="textarea"
          name="description"
          placeholder={propertyEdit.description}
          value={propertyEdit.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxGuests"
          placeholder={propertyEdit.maxGuests}
          value={propertyEdit.maxGuests}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder={propertyEdit.address}
          value={propertyEdit.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="directions"
          placeholder={propertyEdit.directions}
          value={propertyEdit.directions}
          onChange={handleChange}
        />
        <input
          type="textarea"
          name="checkinInstructions"
          placeholder={propertyEdit.checkinInstructions}
          value={propertyEdit.checkinInstructions}
          onChange={handleChange}
        />
        <input
          type="textarea"
          name="wifiDetails"
          placeholder={propertyEdit.wifiDetails}
          value={propertyEdit.wifiDetails}
          onChange={handleChange}
        />
        <input
          type="text"
          name="houseManual"
          placeholder={propertyEdit.houseManual}
          value={propertyEdit.houseManual}
          onChange={handleChange}
        />
        <input
          type="textarea"
          name="houseRules"
          placeholder={propertyEdit.houseRules}
          value={propertyEdit.houseRules}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cancellationPolicy"
          placeholder={propertyEdit.cancellationPolicy}
          value={propertyEdit.cancellationPolicy}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditProperty;
