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
          <h1>
            Smoky Mountain
            <br />
            Getaways
          </h1>
          <form className="forms">
            <div className="input-container">
              <div>
                <label>Check-in</label>
                <input type="date" name="checkin date" placeholder="Add Date" />
              </div>
              <div>
                <label>Check-out</label>
                <input
                  type="date"
                  name="checkout date"
                  placeholder="Add Date"
                />
              </div>
              <div>
                <label>Guests</label>
                <input
                  type="number"
                  name="number of guests"
                  placeholder="Add guests"
                />
              </div>
            </div>
            <button type="submit" className="submitBtn">
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
