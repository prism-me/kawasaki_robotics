import React from "react";
import _data from "../../data";
import imageOne from "./../../assets/sliderImages/IMG-4793.PNG";
import imageTwo from "./../../assets/sliderImages/IMG-4795.PNG";
import imageThree from "./../../assets/sliderImages/IMG-4796.PNG";
import imageFour from "./../../assets/sliderImages/IMG-4798.PNG";
import imageFive from "./../../assets/sliderImages/IMG-4800.PNG";
import { content } from "./../../data/data";

export default class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="screenshots"
          className="screenshots-section ptb-100 gray-light-bg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
                  {/* <h2>
                    App screenshots <br />{" "}
                    <span>Looks awesome</span>
                  </h2> */}
                  <p className="lead">
                    {
                      content?.home?.sections?.screenshots
                        ?.slogan[this.props.activeLanguage]
                    }
                    {/* Credibly synthesize multimedia based
                    networks vis-a-vis top-line growth
                    strategies. Continually leverage
                    existing worldwide interfaces */}
                  </p>
                </div>
              </div>
            </div>
            <div className="screen-slider-content mt-5">
              {/* <div className="screenshot-frame"></div> */}
              <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                <img
                  src={imageOne}
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src={imageTwo}
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src={imageThree}
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src={imageFour}
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src={imageFive}
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src={imageOne}
                  className="img-fluid"
                  alt="screenshots"
                />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
