import React from 'react';
import api from '../services/api';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="title-container container jumbotron">
        <div className="page-header">
          <h1>
            Smoky Mountain
            <br />
            Getaways
          </h1>
        </div>
        <div className="btn-group btn-group-lg" role="group">
          <button type="button" class="btn btn-default">
            Checkin
          </button>
          <button type="button" class="btn btn-default">
            Checkout
          </button>
          <button type="button" class="btn btn-default">
            Guests
          </button>
        </div>
        {/* <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Checkin</label>
            <input type="date" name="checkin date" placeholder="Add Date" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Checkout</label>
            <input type="date" name="checkout date" placeholder="Add Date" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"># of Guests</label>
            <input
              type="number"
              name="number of guests"
              placeholder="Add Guests"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Home;
