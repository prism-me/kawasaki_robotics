import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import carImage from "./../../assets/About/about-img.jpg";
import person2 from "./../../assets/DSC04426.JPG";
import person1 from "./../../assets/Fabrizio.jpeg";
import sliderEnglish1 from "./../../assets/sliderImages/airlife-sa-stand-alone-device1.png";
import { content } from "./../../data/data";
import "./aboutBuraq.scss";

const AboutBuraq = (props) => {
  return (
    <div className="about-buraq-wrap">
      <Container>
        <Row
          className={`about-buraq-row ${props.activeLanguage === "arabic"
            ? "about-arabic-style"
            : "english"
            }`}
        >
          <Col xs={12} sm={6}>
            <div
              className={`about-text-wrap ${props.activeLanguage === "arabic"
                ? "about-arabic-text-wrap"
                : "english"
                }`}
            >
              <div
                className={`${props.activeLanguage === "arabic"
                  ? "about-arabic-text"
                  : "english"
                  }`}
              >
                <h5 className="about-buraq-heading">
                  {
                    content?.home?.aboutSection?.title[
                    props.activeLanguage
                    ]
                  }
                </h5>
                <p className="about-text-detail">
                  {
                    content?.home?.aboutSection[
                    props.activeLanguage
                    ]
                  }
                </p>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex justify-content-center"
          >
            <div className="about-image-wrap">
              <img src={sliderEnglish1} alt="car" />
            </div>
          </Col>
        </Row>
        <div className="webinar_title">
          <h5>
            Speakers for the webinar
          </h5>
        </div>

        <Row>
          <Col xs={12} sm={6}>
            <div className="speakers_data">
              <img src={person1} width={300} />
              <h2>Fabrizio Vagli</h2>
              <span>Sales and Marketing Director</span>
              <p>AIRLIFE SWISS AG
                HVAC Engineer, EMBA in International Management and Affairs
                25 years of experience in the HVAC industry.
                Experienced through all phases in the lifetime of an HVAC plant, from design, installation up to commissioning and maintaining.</p>

            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="speakers_data">
              <img src={person2} width={300} />
              <h2>Elina Krassotina</h2>
              <span>Business Development & Marketing</span>
              <p>DAVINCI MENAGROUP DWCLLC
                MSc Strategic Marketing
                B.S. Computer Engineer
                8 years of Pre-sales & Consultancy experience in MENA region
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutBuraq;
