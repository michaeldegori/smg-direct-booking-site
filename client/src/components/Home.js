import React, { useState } from 'react';
import '../styles/Home.css';
import magGlyph from '../images/mag-glyph.png';

const Home = () => {
  const [buttonActivity, setButtonActivity] = useState({
    checkin: false,
    checkout: false,
    guests: false,
  });

  const handleButtonClick = (event) => {
    setButtonActivity({
      [event.target.name]: true,
    });
  };

  return (
    <div className="home">
      <div className="title-container">
        <div className="background-wrapper">
          <h1 className="text-light text-center">
            Smoky Mountain
            <br />
            Getaways
          </h1>
          <form className="container">
            <div className="form-group d-flex flex-column align-items-center">
              <div className="row d-flex flex-column align-items-center">
                <label
                  for="inputCheckin"
                  className="form-control-lg text-light m-0"
                >
                  check-in
                </label>
                <input
                  id="inputCheckin"
                  type="date"
                  name="checkin date"
                  placeholder="Add Date"
                  className="form-control-lg py-1 text-secondary rounded-pill bg-light border-0 rounded"
                />
              </div>
              <div className="row d-flex flex-column align-items-center">
                <label
                  for="inputCheckout"
                  className="form-control-lg text-light m-0"
                >
                  check-out
                </label>
                <input
                  id="inputCheckout"
                  type="date"
                  name="checkout date"
                  placeholder="Add Date"
                  className="form-control-lg py-1 text-secondary rounded-pill bg-light border-0 rounded"
                />
              </div>
              <div className="row d-flex flex-column align-items-center">
                <label
                  for="inputGuests"
                  className="form-control-lg text-light m-0"
                >
                  guests
                </label>
                <input
                  id="inputGuests"
                  type="number"
                  name="number of guests"
                  placeholder="add guests"
                  className="form-control-lg py-1 text-secondary rounded-pill bg-light border-0 rounded"
                />
              </div>
              <div className="row d-flex flex-column align-items-center">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary rounded-pill text-dark my-4 p-3"
                >
                  <img
                    src={magGlyph}
                    alt="magnifying glass"
                    className="search-btn"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
