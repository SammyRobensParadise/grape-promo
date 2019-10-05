import React, { Component } from "react"
import WhatAsset from './grape_promo_what_art.svg'
class WhatSVG extends Component {
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
          {<WhatAsset height={680} width={1300}></WhatAsset>}
      </div>
    );
  }
}
export default WhatSVG;
