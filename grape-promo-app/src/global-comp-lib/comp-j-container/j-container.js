import React, { Component } from "react";
import { JContainerStyle, CenterEl,ButtonContainer } from "./j-container-styles";
import SectionTitle from "../comp-section-title/section-title";
import JContent from "../comp-j-content/j-content";
import WhatSVG from "../comp-what-svg/what-svg";
import ButtonCallToAction from '../comp-cta-button/button-call-to-action-styles.js/button-call-to-action.js'
import * as CONSTANTS from '../../constants'

class JContainer extends Component {
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
    const { TITLE, CONTENT,BUTTON_TEXT } = this.props.content;
    return (
      <div>
        <CenterEl>
          <JContainerStyle>
            <SectionTitle text={TITLE}></SectionTitle>
            <div>
              <WhatSVG></WhatSVG>
              <JContent text={CONTENT}></JContent>
            </div>
            <div>

            </div>
          </JContainerStyle>
          <ButtonContainer>
            <ButtonCallToAction text={BUTTON_TEXT} nav={CONSTANTS.NAVHOOKS.WHO}></ButtonCallToAction>
            </ButtonContainer>
        </CenterEl>
      </div>
    );
  }
}
export default JContainer;
