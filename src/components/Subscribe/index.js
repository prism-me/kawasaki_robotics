import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./subscribe.scss";
import { content } from "./../../data/data";

const initialObject = {
  email: "",
};

const Subscribe = (props) => {
  const [isSubscribe, setIsSubscribe] =
    useState(initialObject);

  //!--- Handle OnChange---
  const handleOnChange = (e) => {
    e.preventDefault();
    let updatedValue = { ...isSubscribe };
    updatedValue[e.target.name] = e.target.value;
    setIsSubscribe(updatedValue);
  };
  //!--- Handle Submit---
  const handleSubmit = (e) => {
    let updatedData = { ...isSubscribe };
    e.preventDefault();
    if (updatedData.email === "") {
      alert("Please enter your valid email");
      return;
    }
    axios
      .post(
        `https://buraqapp.com/buraqApis/public/api/subscribe`,
        updatedData
      )
      .then((response) => {
        if (
          response.status === 200 ||
          response.status === 201
        ) {
          alert(
            "Your request has been submitted, you will be contacted soon."
          );
          setIsSubscribe(initialObject);
        }
      })
      .catch((err) =>
        alert(
          "Something went wrong, please check your internet connection"
        )
      );
  };

  return (
    <React.Fragment>
      <div
        className="shape-img subscribe-wrap py-3"
        style={{
          paddingTop: "1rem",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h5
              className={`subscribe-header-wrap ${
                props.activeLanguage === "arabic"
                  ? "subscribe-arabic-text"
                  : "english"
              }`}
            >
              {
                content?.home?.subscribeSection?.title[
                  props.activeLanguage
                ]
              }
            </h5>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 col-md-6">
              <div className="subscribe-form-wrap">
                <Form
                  method="post"
                  className="subscribe-form subscribe-form-footer"
                >
                  <div className="d-flex align-items-center input-button-wrap">
                    <input
                      type="text"
                      className="form-control input"
                      id="email-footer"
                      name="email"
                      placeholder="info@yourdomain.com"
                      value={isSubscribe.email}
                      onChange={handleOnChange}
                    />
                    <button
                      className={`button btn solid-btn ${
                        props.activeLanguage === "arabic"
                          ? "subscribe-arabic-text"
                          : "english"
                      }`}
                      id="submit-footer"
                      onClick={handleSubmit}
                    >
                      {
                        content?.home?.subscribeSection
                          ?.buttonText?.[
                          props.activeLanguage
                        ]
                      }
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Subscribe;
