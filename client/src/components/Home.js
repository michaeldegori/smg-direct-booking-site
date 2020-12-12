import React, { useState } from 'react';
import background from '../images/smoky-background.jpg';
import '../styles/Home.css';

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
          <h1 class="text-light">
            Smoky Mountain
            <br />
            Getaways
          </h1>
          <div className="container">
            <form>
              <div className="form-group">
                <div>
                  <label
                    for="inputCheckin"
                    className="form-control-lg text-light m-0"
                  >
                    check-in
                  </label>
                  <br />
                  <input
                    id="inputCheckin"
                    type="date"
                    name="checkin date"
                    placeholder="Add Date"
                    className="form-control-lg text-secondary bg-light border-0 rounded"
                  />
                </div>
                <div>
                  <label
                    for="inputCheckout"
                    className="form-control-lg text-light m-0"
                  >
                    check-out
                  </label>
                  <br />
                  <input
                    id="inputCheckout"
                    type="date"
                    name="checkout date"
                    placeholder="Add Date"
                    className="form-control-lg text-secondary bg-light border-0 rounded"
                  />
                </div>
                <div>
                  <label
                    for="inputGuests"
                    className="form-control-lg text-light m-0"
                  >
                    guests
                  </label>
                  <br />
                  <input
                    id="inputGuests"
                    type="number"
                    name="number of guests"
                    placeholder="add guests"
                    className="form-control-lg text-secondary bg-light border-0 rounded"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary text-dark font-weight-bold"
              >
                search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
