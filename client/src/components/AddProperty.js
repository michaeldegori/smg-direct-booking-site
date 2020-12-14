import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';
import '../styles/EditProperty.css';

const AddProperty = (props) => {
  const history = useHistory();

  const [photoFiles, setPhotoFiles] = useState(null);
  const [propertyDetails, setPropertyDetails] = useState({
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
        setPropertyDetails(res.data);
      })
      .catch((err) => {});
  }, []);

  // const handlePhotoFiles = (event) => {
  //
  //   setPhotoFiles(event.target.files[0]);
  // };

  const handlePhotoFiles = (event) => {
    setPhotoFiles(event.target.files[0]);
  };

  const handleChange = (event) => {
    setPropertyDetails({
      ...propertyDetails,
      [event.target.name]: event.target.value,
    });
  };

  const uploadPhotos = () => {
    const formData = new FormData();
    formData.append('photos', photoFiles);

    return api
      .put(
        `http://localhost:3000/properties/${propertyDetails._id}/photos`,
        formData
      )
      .then((res) => alert('Photos Uploaded Successfully'))
      .catch((err) => {
        alert('Upload Error');
      });
  };

  const submitEditProperty = (event) => {
    return api
      .put(
        `http://localhost:3000/properties/${propertyDetails._id}`,
        propertyDetails
      )
      .then((res) => {
        console.log('Property Updated');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function submit(event) {
    event.preventDefault();
    Promise.all([submitEditProperty(), uploadPhotos()])
      .then(() => {
        history.push(`/properties/${propertyDetails._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

export default EditProperty;
