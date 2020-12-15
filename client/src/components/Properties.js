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
        <Link to={`/properties/${property._id}`}>
          <div className="container-fluid container py-3">
            <h3 className="text-dark">Our properties</h3>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card mb-3">
                  <img
                    src={property.photos}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <p className="card-text text-dark">
                          Beds: {property.bedrooms}
                        </p>
                      </div>
                      <div className="col">
                        <p className="card-text text-dark">
                          Baths: {property.bathrooms}
                        </p>
                      </div>
                    </div>
                    <h5 className="card-title text-danger">
                      {property.listingTitle}
                    </h5>
                    <p className="card-text text-dark">
                      {property.description}
                    </p>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <section className="properites">
      {listProperties()}
      <Link to="/properties/add">Add New Property</Link>
    </section>
  );
};

export default Properties;
