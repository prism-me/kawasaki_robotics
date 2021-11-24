import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./buraqSlider.scss";
import { content } from "./../../data/data";

function VideoSlider(props) {
  return (
    <div className="video-slider">
      <Container>
        <Row
          className={`video-row ${props.activeLanguage === "arabic"
              ? "about-arabic-style"
              : "english"
            }`}
        >
          <h5>
            {
              content?.home?.sliderSection?.sliderHeading[
              props.activeLanguage
              ]
            }
          </h5>

          <p className="about-text-detail">
            {
              content?.home?.sliderSection?.sliderDescription[
              props.activeLanguage
              ]
            }
          </p>
        </Row>
      </Container>

      <Carousel
        dynamicHeight={false}
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        centerMode
        stopOnHover={true}
        centerSlidePercentage={`${window.screen.width > 900 ? 41 : 65
          }`}
        className="video-carousel center"
        interval={3000}
      >
        {content?.home?.sliderSection?.sliderData?.map(
          (x, index) => (
            <div>
              <div className="slide-content">
                
              </div>
              <div
                className="video-image-wrapper"
              // onClick={() => {
              //   setCurrentIndex(index);
              //   setOpenVideo(true);
              // }}
              >
                <h5
                  className={`slider-heading ${
                    props.activeLanguage === "arabic"
                      ? "slider-arabic-title"
                      : "english"
                  }`}
                >
                  {x?.[props.activeLanguage].text}
                </h5>
                <p className="about-text-detail">
                {x?.[props.activeLanguage].description}
                </p>
                {/* <img
                  src={x?.[props.activeLanguage].image}
                  alt=""
                /> */}
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}

export default VideoSlider;
