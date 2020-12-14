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
      <section className="home container-fluid">
        <div class="container-fluid container bg-primary display-1">
          1st section
        </div>
        <div class="container-fluid container bg-secondary display-1">
          2nd section
        </div>
        <div class="container-fluid container bg-success display-1">
          3rd section
        </div>
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
            <div className="col-sm-4 px-0">
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Find the time to get away to one of our gorgeous mountain
                    cabins
                  </h5>
                  <form>
                    <div className="form-group">
                      <label className="mb-1">
                        When will you be joining us?
                      </label>
                      <DateRangePicker
                        withPortal
                        block={true}
                        orientation="verticalScrollable"
                        minimumNights={3}
                        withFullScreenPortal={true}
                        numberOfMonths={4}
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
                      <div class="form-group">
                        <label
                          for="exampleFormControlSelect1"
                          className="mt-2 mb-1"
                        >
                          Total Guests
                        </label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                        </select>
                      </div>
                      <button
                        className="btn btn-primary text-white"
                        style={{ width: '100%' }}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
