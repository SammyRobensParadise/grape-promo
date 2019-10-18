import React, { Component } from "react";
import { LContainerStyle, CenterEl, SpacingArea } from "./l-container-styles";
import SectionTitle from "../comp-section-title/section-title";
import Inform from "../comp-call-to-action/inform";
import TimelineSVG from './l-comp-lib/grape_timeline_image.svg'
class LContainer extends Component {
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
    const { TITLE, CONTENT } = this.props.content;
    const heightParam = window.innerWidth < 500 ? window.innerWidth - 100 : 500;
    const widthParam = window.innerWidth < 500 ? window.innerWidth - 100 : window.innerWidth - 250;
    return (
      <div>
        <CenterEl>
          <LContainerStyle>
            <SectionTitle text={TITLE}></SectionTitle>
            <SpacingArea>
              <Inform text={CONTENT}></Inform>
            </SpacingArea>
            <div>
                <TimelineSVG height={heightParam} width={widthParam}></TimelineSVG>
            </div>
          </LContainerStyle>
        </CenterEl>
      </div>
    );
  }
}
export default LContainer;
