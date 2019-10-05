import React, { Component } from "react"
import LandingAsset from './grape_promo.svg'
class LandingSVG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasRenderedLocal: false,
    };
  }
  componentDidMount() {
    this.setState({
      hasRenderedLocal: true
    });
  }
  render() {
    return (
      <div>
          {<LandingAsset></LandingAsset>}
      </div>
    );
  }
}
export default LandingSVG;
