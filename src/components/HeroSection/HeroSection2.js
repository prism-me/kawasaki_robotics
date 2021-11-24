import React from "react";
import { connect } from "react-redux";
import headerImage from "./../../assets/mobile 1.png";
import laminar from "./../../assets/Laminar.png";
// import headerBackgroundImage from "./../../assets/fuu-j-r2nJPbEYuSQ-unsplash.jpg";
import headerBackgroundImage from "./../../assets/eb41ad0f-89c1-40b6-b977-0d7c37130f45.png";
import { content } from "./../../data/data";
import "./HerroSection2.scss";
import appleStoreImage from "./../../assets/ButtonIcons/apple-store.png";
import androidStoreImage from "./../../assets/ButtonIcons/google-store.png";

class HeroSection extends React.Component {
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
          className="hero-section-wrap pt-100 background-img"
          style={{
            backgroundImage: `url(${headerBackgroundImage})`,
          }}
        >
          <div className="container">
            <div
              className={`row align-items-center justify-content-between banner-section-row ${this.props.activeLanguage === "arabic"
                ? "banner-arabic-style"
                : "english"
                }`}
            >
              <div className="col-md-12 col-lg-12 col-12">
                <div
                  className={`hero-content-left text-white banner-section ${this.props.activeLanguage === "arabic"
                    ? "banner-arabic-heading"
                    : "english"
                    }`}
                >
                  <h1 className="text-white banner-heading">
                    {
                      content?.home?.sections?.header
                        ?.title?.[this.props.activeLanguage]
                    }
                  </h1>
                  <p className="lead">
                    {
                      content?.home?.sections?.header
                        ?.description2?.[
                      this.props.activeLanguage
                      ]
                    }
                  </p>
                  {/* <p className="lead top-lead">
                    {
                      content?.home?.sections?.header
                        ?.description?.[
                      this.props.activeLanguage
                      ]
                    }
                  </p> */}
                  <button class="button btn solid-btn english header_cta" id="submit-footer">{
                    content?.home?.sections?.header
                      ?.cta?.[
                    this.props.activeLanguage
                    ]
                  }</button>
                  {/* <p className="lead">
                    {
                      content?.home?.sections?.header
                        ?.description3?.[
                      this.props.activeLanguage
                      ]
                    }
                  </p> */}
                  {/* <div
                    className={`hero-section-button app-store-button-wrap ${this.props.activeLanguage === "arabic"
                      ? "hero-section-arabic-button"
                      : "english"
                      }`}
                  >
                    <button
                      type="button"
                      className="android-store"
                    // onClick={this.handleAndroidSubmit}
                    >
                      <img
                        src={androidStoreImage}
                        alt="Google Store"

                      />
                    </button>
                    <button
                      type="button"
                      className="apple-store-wrap"
                    // onClick={this.handleAppleSubmit} 
                    >
                      <img
                        src={appleStoreImage}
                        alt="Apple store"
                      />
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4 col-lg-4 d-none d-sm-block">
                <div
                  className="hero-animation-img banner-image"
                >
                  {/* <img
                    src={laminar}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                </div>
                {/* <p className="lead text-white mt-5 lead-below-image">
                  {
                    content?.home?.sections?.header
                      ?.description4?.[
                    this.props.activeLanguage
                    ]
                  }
                </p> */}
              </div>
            </div>

            {/* <div className="row">
              <ul className="list-inline counter-wrap">
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>2305</span>
                    <h6>Happy Client</h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>2145</span>
                    <h6>App Download</h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>2345</span>
                    <h6>Total Rates</h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    <span>2245</span>
                    <h6>Awards win</h6>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(HeroSection);
