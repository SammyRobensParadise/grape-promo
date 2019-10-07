import React, { Component } from "react";
import Container from "./global-comp-lib/comp-title/wrapper-styles";
import TitleLarge from "./global-comp-lib/comp-title/title-main";
import Navigation from "./global-comp-lib/comp-navigation/navbar";
import Inform from "./global-comp-lib/comp-call-to-action/inform";
import ButtonCallToAction from "./global-comp-lib/comp-cta-button/button-call-to-action-styles.js/button-call-to-action";
import LandinSVG from "./global-comp-lib/comp-landing-svg/landing-svg";
import JContainer from './global-comp-lib/comp-j-container/j-container'
import KContainer from './global-comp-lib/comp-k-container/k-container'
//text constants
const FIND_OUT_HOW = "Find out How";
const TITLE = "Grape";
const INFORM_TEXT = 'We are working to build a platform that will change the way people learn code'
const WHAT_SECTION_= {
  TITLE: "What",
  CONTENT: "So you’ve built something beautiful. But you want to share it with people — and you don’t just want to share it, you want people to use it. Grape will change the way people learn how to code but giving people the power to create comprehensive, cutting edge tutorials about software and tech that can be used by everyone, for everyone. Grape will allow people of all skill levels to learn document and explan their coding knowledge without the overhead of subscription-based services for new learners.",
  BUTTON_TEXT: 'Find out who is making grape…'
}
const WHO_SECTION_ = {
  TITLE: "Who",
  CONTENT: "We are Waterloo Engineers on a mission to design a system that will improve the way the way all people learn and document software.",
  BUTTON_TEXT: "Learn how we are building grape…",
  SAMMY_DEF:  "Sammy Robens-Paradise Systems Design Engineering ‘23",
  ASH_DEF:  "Ash Raji Mechatronics Engineering ‘22",
  ANDREW_DEF: "Andrew Mouchantaf Mechatronics Engineering ‘22"
}
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
        <Inform text={INFORM_TEXT}></Inform>
        <ButtonCallToAction text={FIND_OUT_HOW}></ButtonCallToAction>
        <LandinSVG></LandinSVG>
        
        <JContainer content={WHAT_SECTION_}>
        </JContainer>
        <KContainer content={WHO_SECTION_}></KContainer>
      </Container>
    );
  }
}
export default Wrapper;
