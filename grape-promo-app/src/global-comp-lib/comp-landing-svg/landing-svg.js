import React, { Component } from "react";
import LandingAsset from "./grape_promo.svg";

class LandingSVG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasRenderedLocal: false
    };
  }
  componentDidMount() {
    this.setState({
      hasRenderedLocal: true
    });
  }
  render() {
    const heightParam = window.innerWidth < 600 ? window.innerWidth - 100 : 600;
    const widthParam = window.innerWidth - 30;
    return (
      <div>
        {<LandingAsset height={heightParam} width={widthParam}></LandingAsset>}
      </div>
    );
  }
}
export default LandingSVG;
