import React, { Component } from "react";
import {Row, Col } from "reactstrap";
import { JContainerStyle, CenterEl } from "./j-container-styles";
import SectionTitle from "../comp-section-title/section-title";
import JContent from "../comp-j-content/j-content";
import WhatSVG from "../comp-what-svg/what-svg";
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
    const { TITLE, CONTENT } = this.props.content;
    return (
      <div>
        <CenterEl>
          <SectionTitle text={TITLE}></SectionTitle>
          <div>
                <WhatSVG></WhatSVG>

                <JContent text={CONTENT}></JContent>

          </div>
          <JContainerStyle></JContainerStyle>
        </CenterEl>
      </div>
    );
  }
}
export default JContainer;
