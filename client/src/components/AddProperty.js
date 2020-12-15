import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';
import '../styles/EditProperty.css';

const AddProperty = (props) => {
  const history = useHistory();

  const [photoFiles, setPhotoFiles] = useState({
    photos: null,
  });

  const [propertyDetails, setPropertyDetails] = useState({
    bedrooms: null,
    bathrooms: null,
    listingTitle: '',
    description: '',
    maxGuests: null,
    address: '',
    directions: '',
    checkinInstructions: '',
    wifiDetails: '',
    houseManual: '',
    houseRules: '',
    cancellationPolicy: '',
  });

  const handlePhotoFiles = (event) => {
    setPhotoFiles({
      photos: event.target.files[0],
    });
  };

  const handleChange = (event) => {
    setPropertyDetails({
      ...propertyDetails,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('photos', photoFiles.photos);
    debugger;
    Object.keys(propertyDetails).forEach((detailKey) => {
      debugger;
      formData.append(detailKey, propertyDetails[detailKey]);
    });

    return api
      .post('http://localhost:3000/properties', formData)
      .then((res) => {
        history.push('/properties');
        console.log('Property Uploaded Successfully');
      })
      .catch((err) => {
        alert('Upload Error');
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="file" name="photos" onChange={handlePhotoFiles} />
        <input
          type="number"
          name="bedrooms"
          placeholder="# of bedrooms"
          value={propertyDetails.bedrooms}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="# of bathrooms"
          value={propertyDetails.bathrooms}
          onChange={handleChange}
        />
        <input
          name="listingTitle"
          placeholder="listing title"
          value={propertyDetails.listingTitle}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="description"
          value={propertyDetails.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxGuests"
          placeholder="max # of guests"
          value={propertyDetails.maxGuests}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="address"
          value={propertyDetails.address}
          onChange={handleChange}
        />
        <textarea
          name="directions"
          placeholder="directions"
          value={propertyDetails.directions}
          onChange={handleChange}
        />
        <textarea
          name="checkinInstructions"
          placeholder="checkin instructions"
          value={propertyDetails.checkinInstructions}
          onChange={handleChange}
        />
        <textarea
          name="wifiDetails"
          placeholder="wifi info"
          value={propertyDetails.wifiDetails}
          onChange={handleChange}
        />
        <input
          name="houseManual"
          placeholder="house manual link"
          value={propertyDetails.houseManual}
          onChange={handleChange}
        />
        <textarea
          name="houseRules"
          placeholder="house rules"
          value={propertyDetails.houseRules}
          onChange={handleChange}
        />
        <input
          name="cancellationPolicy"
          placeholder="cancellation policy"
          value={propertyDetails.cancellationPolicy}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProperty;
