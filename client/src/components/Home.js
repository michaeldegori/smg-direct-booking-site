import React, { useState, Component } from 'react';
import '../styles/Home.css';
import walkerLiving from '../images/walker-living.jpeg';
import easyPorch from '../images/easy-porch.jpeg';
import walkerView from '../images/walker-view.webp';
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
                <img src={walkerLiving} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 class="card-title text-danger">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </h5>
                  <p className="card-text">
                    Awesome! Amazing! Beautiful! I cannot say enough about this
                    cabin and our long weekend in the mountains. This cabin had
                    anything and everything that we needed. It was immaculate
                    and smelled so good when we walked inside. We loved it and
                    the plus was that it's close to everything that you need or
                    want. We made a couple of trips to the Pigeon Forge Island,
                    which by the way, was AMAZING!!! I would definitely
                    recommend this cabin and my whole family agreed this will be
                    a family tradition. Great host also.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      - Paulette, Walker's Retreat
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <img src={easyPorch} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 class="card-title text-danger">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </h5>
                  <p className="card-text">
                    We really enjoyed our stay, Michael is very responsive and
                    helped us immediately for whatever we asked. Cabin has lot
                    of amenities and location is one of the best. It has lot of
                    space for recreational activities and stunning view from all
                    the sides. It's very clean and exactly as shown in the pics.
                    We will definitely book other properties offered by Michael
                    and will book this whenever we visit Smokey mountain again.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      -Chhayank, Easy's Retreat
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <img src={walkerView} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 class="card-title text-danger">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </h5>
                  <p className="card-text">
                    This was a great place to stay. A short drive to
                    entertainment, food, entertainment, and of course, the
                    National Park. We really enjoyed the option of eating
                    breakfast and dinner here and saving a few extra dollars for
                    entertainment. You could just stay on the deck and enjoy the
                    privacy and beautiful views but you should definitely visit
                    the parks and some of the local distilleries... in that
                    order. The rooms were clean, comfortable, and was nicely
                    decorated to give it a cabin-like feel. This was great for a
                    couple's get-away and also had a nice collection of games
                    for family time. The hot tub and gas grill were nice
                    touches. When we come back to this area we will certainly
                    stay here again. Thanks Michael and Debra!
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      -Scott, Walker's Retreat
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
