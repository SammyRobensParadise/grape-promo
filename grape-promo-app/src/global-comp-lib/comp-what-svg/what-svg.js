import React, { Component } from "react"
import WhatAsset from './comp-what-lib/grape_promo_what_art.svg'
import {WhatSVGStyles} from './what-svg-styles'
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
          <WhatSVGStyles>
          <WhatAsset height={610} width={600}></WhatAsset>
          </WhatSVGStyles>
      </div>
    );
  }
}
export default WhatSVG;
