import React, { Component } from "react";
import { render } from "react-dom";
import styled, { css } from "styled-components";
import Header from "./Header";
import Destinations from "./Destinations";
import PopularDirections from "./PopularDirections";
import Slider from "./Slider";
import Offers from "./Offers";
import Articles from "./Articles";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Destinations />
        <PopularDirections />
        <div className="hidden-xs hidden-sm">
          <Slider />
        </div>
        <Offers /> 
        <Articles />
        <MobileApp />
        <Footer /> 
      </div>
    );
  }
}

export default App;
