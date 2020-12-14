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
      <section className="home">
        <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${background})`,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            zIndex: -1,
          }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-8 col-lg-7"></div>
            </div>
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
              <div className="col-sm-5">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">
                      Your perfect getaway is waiting for you
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
                        <div className="form-group">
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
        </div>
        <div className="container-fluid container py-3 mt-4">
          <h2 className="h3">What our guests have to say about us</h2>
          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card mb-3">
                <img
                  src="https://images.unsplash.com/photo-1533654793924-4fc4949fb71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <img
                  src="https://images.unsplash.com/photo-1520908695049-da13395b27a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid container bg-success display-1">
            3rd section
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
