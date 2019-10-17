import React, { Component } from "react";
import WhatAsset from "./comp-what-lib/grape_promo_what_art.svg";
import { WhatSVGStyles } from "./what-svg-styles";
import * as cssConstants from "../../global-styling/css-constants";
class WhatSVG extends Component {
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
    const sizeParams =
      window.innerWidth < parseInt(cssConstants.breakOne, 10) &&
      window.innerWidth >= parseInt(cssConstants.breakThree, 10)
        ? { heightParam: 500, widthParam: 590 }
        : window.innerWidth < parseInt(cssConstants.breakThree, 10) &&
          window.innerWidth >= parseInt(cssConstants.breakFour)
        ? { heightParam: 450, widthParam: 450 }
        : window.innerWidth < parseInt(cssConstants.breakFour, 10)
        ? { heightParam: 350, widthParam: 350 }
        : { heightParam: 610, widthParam: 600 };
    return (
      <div>
        <WhatSVGStyles>
          <WhatAsset
            height={sizeParams.heightParam}
            width={sizeParams.widthParam}
          ></WhatAsset>
        </WhatSVGStyles>
      </div>
    );
  }
}
export default WhatSVG;
