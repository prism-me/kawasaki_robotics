import React from "react";
import { connect } from "react-redux";
import { content } from "./../../data/data";
import "./Promo2.scss";
import carIcon from "./../../assets/Icons/sedan-car-model.png";
import healthCare from "./../../assets/Icons/healthcare.png";
import resident from "./../../assets/Icons/resident.png";
import smokingArea from "./../../assets/Icons/smoking-area.png";
import airport from "./../../assets/Icons/airport.png";
import graduationCap from "./../../assets/Icons/graduation-cap.png";
import factory from "./../../assets/Icons/factory.png";
import { FaCar, FaListUl, FaMoneyCheckAlt, FaSchlix } from "react-icons/fa";
import {
  BsFillPersonFill,
  BsFillHouseFill,
} from "react-icons/bs";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <h5
          className={`video-title ${this.props.activeLanguage === "arabic"
            ? "arabic-text-style"
            : "english"
            }`}
        >
          {
            content?.home?.videoSection?.title[
            this.props.activeLanguage
            ]
          }
        </h5>
        <section
          className={
            "promo-section" +
            (this.props.removeTopMargin ? "" : "")
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div
                  className={`section-heading mb-5 ${this.props.activeLanguage === "arabic"
                    ? "promo-arabic-text"
                    : "english"
                    }`}
                >
                  <h5 className="h5 mb-6 promo2-heading">
                    {
                      content?.home?.sections?.promoSection
                        ?.title[this.props.activeLanguage]
                    }
                  </h5>
                </div>
              </div>
            </div>
            <div
              className={`promo2-card-wrap ${this.props.activeLanguage === "arabic"
                ? "arabic-direction-reverse"
                : "english"
                } `}
            >
              <div
                className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                  ? "arabic-text"
                  : "english"
                  }`}
              >
                <div className={`card-body `}>
                  <div className="pb-2">
                    <span className="icon-md color-primary">
                      {/* <FaCar /> */}
                      <img
                        src={healthCare}
                        width="50"
                        alt="logo"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div
                    className={`pt-2 pb-3  ${this.props.activeLanguage === "arabic"
                      ? "promo-arabic-text"
                      : "english"
                      }`}
                  >
                    <h5>
                      {
                        content?.home?.sections
                          ?.promoSection?.firstReason[
                        this.props.activeLanguage
                        ]
                      }
                    </h5>
                  </div>
                </div>
              </div>

              <div
                className={`card single-promo-card single-promo-hover  promo2-card-style  ${this.props.activeLanguage === "arabic"
                  ? "arabic-text"
                  : "english"
                  }`}
              >
                <div className="card-body">
                  <div className="pb-2">
                    <span className="icon-md color-primary">
                      {/* <FaSchlix /> */}
                      <img
                        src={resident}
                        width="50"
                        alt="logo"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div
                    className={`pt-2 pb-3  ${this.props.activeLanguage === "arabic"
                      ? "promo-arabic-text"
                      : "english"
                      }`}
                  >
                    <h5>
                      {
                        content?.home?.sections
                          ?.promoSection?.secondReason[
                        this.props.activeLanguage
                        ]
                      }
                    </h5>
                  </div>
                </div>
              </div>

              <div
                className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                  ? "arabic-text"
                  : "english"
                  }`}
              >
                <div className="card-body">
                  <div className="pb-2">
                    <span className="icon-md color-primary">
                      {/* <BsFillPersonFill /> */}
                      <img
                        src={airport}
                        width="50"
                        alt="logo"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div
                    className={`pt-2 pb-3  ${this.props.activeLanguage === "arabic"
                      ? "promo-arabic-text"
                      : "english"
                      }`}
                  >
                    <h5>
                      {
                        content?.home?.sections
                          ?.promoSection?.thirdReason[
                        this.props.activeLanguage
                        ]
                      }
                    </h5>
                  </div>
                </div>
              </div>

              <div
                className={`card single-promo-card single-promo-hover promo2-card-style ${this.props.activeLanguage === "arabic"
                  ? "arabic-text"
                  : "english"
                  }`}
              >
                <div className="card-body">
                  <div className="pb-2">
                    <span className="icon-md color-primary">
                      {/* <FaListUl /> */}
                      <img
                        src={smokingArea}
                        width="50"
                        alt="logo"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div
                    className={`pt-2 pb-3  ${this.props.activeLanguage === "arabic"
                      ? "promo-arabic-text"
                      : "english"
                      }`}
                  >
                    <h5>
                      {
                        content?.home?.sections
                          ?.promoSection?.fourthReason[
                        this.props.activeLanguage
                        ]
                      }
                    </h5>
                  </div>
                </div>
              </div>

              <div
                className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                  ? "arabic-text"
                  : "english"
                  }`}
              >
                <div className="card-body">
                  <div className="pb-2">
                    <span className=" icon-md color-primary">
                      {/* <FaMoneyCheckAlt /> */}
                      <img
                        src={graduationCap}
                        width="50"
                        alt="logo"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div
                    className={`pt-2 pb-3  ${this.props.activeLanguage === "arabic"
                      ? "promo-arabic-text"
                      : "english"
                      }`}
                  >
                    <h5>
                      {
                        content?.home?.sections
                          ?.promoSection?.fifthReason[
                        this.props.activeLanguage
                        ]
                      }
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                  ? "arabic-text"
                  : "english"
                  }`}
              >
                <div className="card-body">
                  <div className="pb-2">
                    <span className=" icon-md color-primary">
                      {/* <FaMoneyCheckAlt /> */}
                      <img
                        src={factory}
                        width="50"
                        alt="logo"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div
                    className={`pt-2 pb-3  ${this.props.activeLanguage === "arabic"
                      ? "promo-arabic-text"
                      : "english"
                      }`}
                  >
                    <h5>
                      {
                        content?.home?.sections
                          ?.promoSection?.sixthReason[
                        this.props.activeLanguage
                        ]
                      }
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* <h5
          className={`video-title ${
            this.props.activeLanguage === "arabic"
              ? "arabic-text-style"
              : "english"
          }`}
        >
          {
            content?.home?.videoSection?.title[
              this.props.activeLanguage
            ]
          }
        </h5> */}
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(PromoSection);
