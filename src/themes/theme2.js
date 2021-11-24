import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection2";
import PromoSection from "../components/PromoSection/Promo2";
import AboutSection from "../components/AboutUs/AboutUs2";
import FeatureSection from "../components/Features/Feature2";
import VideoSection from "../components/Video";
import PricingSection from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Screenshots from "../components/Screenshots";
import FaqSection from "../components/Faq";
import TeamMember from "../components/TeamMember";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import SubscribeSection from "../components/Subscribe";
import FooterSection from "../components/Footer";
import BuraqSlider from "../components/BuraqSlider";
import AboutBuraq from "../components/AboutBuraq";
import BottomTabNavigator from "../components/BottomTabNavigator/BottomTabNavigator";

class Theme extends Component {
  state = {
    activeLanguage: "english",
  };
  setActiveLanguage = (language) => {
    this.setState({ activeLanguage: language });
  };
  render() {
    return (
      <React.Fragment>
        <Header
          setLanguage={this.setActiveLanguage}
          bgColor="white"
        />
        <div className="main">
          <HeroSection
            activeLanguage={this.state.activeLanguage}
          />
          <AboutBuraq
            activeLanguage={this.state.activeLanguage}
          />
          <BuraqSlider
            activeLanguage={this.state.activeLanguage}
          />
          <PromoSection
            activeLanguage={this.state.activeLanguage}
          />
          {/* <AboutSection /> */}
          {/* <FeatureSection /> */}
          {/* <PricingSection showTitle={true} hideFaq={true} /> */}
          {/* <Testimonial /> */}

          <VideoSection
            showDownloadBtn={true}
            activeLanguage={this.state.activeLanguage}
          />

          {/* <Screenshots
            activeLanguage={this.state.activeLanguage}
          /> */}
          {/* <FaqSection /> */}
          {/* <TeamMember /> */}
          {/* <ContactSection /> */}
          {/* <TrustedCompany /> */}
        </div>
        <SubscribeSection
          activeLanguage={this.state.activeLanguage}
        />
        <FooterSection
          activeLanguage={this.state.activeLanguage}
        />
        {/* <BottomTabNavigator /> */}
      </React.Fragment>
    );
  }
}

export default Theme;
