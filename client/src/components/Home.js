import React from 'react';
import api from '../services/api';
import '../styles/Home.css';

const Home = () => {
  return (
    <div class="home">
      <div className="container-md">
        <form action="">
          <input type="date" name="checkin date" />
          <input type="date" name="checkout date" />
          <button type="submit">Search</button>
        </form>
        <h1>Smoky Mountain Getaways</h1>
      </div>
    </div>
  );
};

export default Home;
