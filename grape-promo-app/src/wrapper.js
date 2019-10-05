import React, { Component } from "react";
import Container from "./global-comp-lib/comp-title/wrapper-styles";
import TitleLarge from "./global-comp-lib/comp-title/title-main";
import Navigation from "./global-comp-lib/comp-navigation/navbar";
import Inform from "./global-comp-lib/comp-call-to-action/inform";
import ButtonCallToAction from "./global-comp-lib/comp-cta-button/button-call-to-action-styles.js/button-call-to-action";
import LandinSVG from "./global-comp-lib/comp-landing-svg/landing-svg";
import SectionTitle from "./global-comp-lib/comp-section-title/section-title";
//text constants
const FIND_OUT_HOW = "Find out How";
const TITLE = "Grape";
const WHAT_SECTION_TITLE = "What";
class Wrapper extends Component {
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
    return (
      <Container>
        <Navigation />
        <TitleLarge>{TITLE}</TitleLarge>
        <Inform></Inform>
        <ButtonCallToAction text={FIND_OUT_HOW}></ButtonCallToAction>
        <LandinSVG></LandinSVG>
        <SectionTitle text={WHAT_SECTION_TITLE}></SectionTitle>
      </Container>
    );
  }
}
export default Wrapper;
