import React, { useState, Component } from 'react';
import '../styles/Home.css';
import magGlyph from '../images/mag-glyph.png';
import background from '../images/smoky-background.jpg';
import {
  DateRangePicker,
  DateRangePickerWrapper,
  DayPickerRangeController,
} from 'react-dates';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  render() {
    return (
      <div className="home container-fluid">
        <div className="background-wrapper">
          <img
            src={background}
            alt="smoky mountains background"
            className="bg-img"
          />
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center">
            <h1
              className="text-white text-center my-5"
              style={{
                fontFamily: 'Rock Salt, cursive',
                lineHeight: '3.5rem',
              }}
            >
              Smoky Mountain
              <br />
              Getaways
            </h1>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Book one of our georgeous cabins today
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <DateRangePicker
                    withFullScreenPortal
                    autoFocus
                    block={true}
                    orientation="verticalScrollable"
                    minimumNights={3}
                    withFullScreenPortal={true}
                    numberOfMonths={6}
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) =>
                      this.setState({ startDate, endDate })
                    } // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={(focusedInput) =>
                      this.setState({ focusedInput })
                    } // PropTypes.func.isRequired,
                  />
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
            {/* <form className="container">
            <div className="form-group d-flex flex-column align-items-center">
              <div className="row d-flex flex-column align-items-center">
                <label
                  for="inputCheckin"
                  className="text-white align-self-start my-2"
                >
                  check-in
                </label>
                <input
                  id="inputCheckin"
                  type="date"
                  name="checkin date"
                  placeholder="Add Date"
                  className="text-secondary bg-white px-3 py-2 border-0 rounded"
                />
              </div>
              <div className="row d-flex flex-column align-items-center">
                <label
                  for="inputCheckout"
                  className="text-white align-self-start my-2"
                >
                  check-out
                </label>
                <input
                  id="inputCheckout"
                  type="date"
                  name="checkout date"
                  placeholder="Add Date"
                  className="text-secondary bg-white px-3 py-2 border-0 rounded"
                />
              </div>
              <div className="row d-flex flex-column align-items-center">
                <label
                  for="inputGuests"
                  className="text-white align-self-start my-2"
                >
                  guests
                </label>
                <input
                  id="inputGuests"
                  type="number"
                  name="number of guests"
                  placeholder="add guests"
                  className="text-secondary bg-white px-3 py-2 border-0 rounded"
                />
              </div>
              <div className="row d-flex flex-column align-items-center">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary rounded my-3 p-2 d-flex"
                >
                  <img
                    src={magGlyph}
                    alt="magnifying glass"
                    className="search-btn"
                  />
                </button>
              </div>
            </div>
          </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
