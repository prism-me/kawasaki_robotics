import React from "react";
import { connect } from "react-redux";
import videoBackgroundImage from "./../../assets/fuu-j-r2nJPbEYuSQ-unsplash.jpg";
import { content } from "./../../data/data";
import "./video.scss";
import appleStoreImage from "./../../assets/ButtonIcons/apple-store.png";
import androidStoreImage from "./../../assets/ButtonIcons/google-store.png";
import davinciVideo from "./../../assets/Video/davinci-video.mp4";


class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }
  handleAndroidSubmit = (e) => {
    e.preventDefault();

    const finalURL = `https://play.google.com/store/apps/details?id=com.rafid.customer`;

    window.gtag_report_conversion(finalURL);
    return;
  }

  handleAppleSubmit = (e) => {
    e.preventDefault();

    const finalURL = `https://apps.apple.com/ae/app/buraq-rides-delivery/id1535514773`;

    window.gtag_report_conversion(finalURL);
    return;
  }
  render() {
    return (
      <React.Fragment>

        <section
          id="download"
          className="video-promo ptb-100 background-img"
          style={{
            backgroundImage: `url(${videoBackgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="video-promo-content mt-4 text-center">
                  <a
                    href={davinciVideo}
                    className="popup-youtube video-play-icon d-inline-block"
                  >
                    <span
                      className="ti-control-play"
                      style={{ color: "#2E3751" }}
                    ></span>
                  </a>
                  <h5
                    className={`overview-heading mt-4 text-white ${this.props.activeLanguage === "arabic"
                      ? "arabic-text-style"
                      : "english"
                      }`}
                  >
                    {
                      content?.home?.videoSection
                        ?.overviewHeading?.[
                      this.props.activeLanguage
                      ]
                    }
                  </h5>
                  <p
                    className={`overview-heading mt-4 text-white ${this.props.activeLanguage === "arabic"
                      ? "arabic-text-style"
                      : "english"
                      }`}
                  >
                    {
                      content?.home?.videoSection
                        ?.overviewDescription?.[
                      this.props.activeLanguage
                      ]
                    }
                  </p>
                  <button class="button btn solid-btn english header_cta" id="submit-footer">{
                    content?.home?.videoSection
                      ?.cta?.[
                    this.props.activeLanguage
                    ]
                  }</button>
                  {/* {this.props.showDownloadBtn &&
                    this.props.showDownloadBtn === true && ( */}
                  {/* <div className=" mt-5 app-download-btn-wrap">
                    <button
                      type="button"
                      className="app-download-button"
                    // onClick={this.handleAndroidSubmit}
                    >
                      <img
                        src={androidStoreImage}
                        alt="Playstore Icon"
                      />
                    </button>

                    <button
                      type="button"
                      className="app-download-button"
                    // onClick={this.handleAndroidSubmit} 
                    >
                      <img
                        src={appleStoreImage}
                        alt="Applestore Icon"
                      />
                    </button>
                    {/* </a> 
                  </div> */}
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(Video);
