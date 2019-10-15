import React, { Component } from "react";
import Container from "./global-comp-lib/comp-title/wrapper-styles";
import TitleLarge from "./global-comp-lib/comp-title/title-main";
import Navigation from "./global-comp-lib/comp-navigation/navbar";
import Inform from "./global-comp-lib/comp-call-to-action/inform";
import ButtonCallToAction from "./global-comp-lib/comp-cta-button/button-call-to-action-styles.js/button-call-to-action";
import LandinSVG from "./global-comp-lib/comp-landing-svg/landing-svg";
import JContainer from "./global-comp-lib/comp-j-container/j-container";
import KContainer from "./global-comp-lib/comp-k-container/k-container";
import LContainer from "./global-comp-lib/comp-l-container/l-container";
import Footer from "./global-comp-lib/comp-footer/footer";
//text constants
import * as CONSTANTS from "./constants";
//libs
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

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
  handlePolicy = b => {
    alert(true);
  };
  render() {
    return (
      <Container>
        <Navigation navoptions={CONSTANTS.NAVHOOKS}/>
        <Element name={CONSTANTS.NAVHOOKS.LANDING}>
        <TitleLarge>{CONSTANTS.TITLE}</TitleLarge>
        </Element>
        <Inform text={CONSTANTS.INFORM_TEXT}></Inform>
        <ButtonCallToAction
          text={CONSTANTS.FIND_OUT_HOW}
          nav={CONSTANTS.NAVHOOKS.WHAT}
        ></ButtonCallToAction>
        <LandinSVG></LandinSVG>
        <Element name={CONSTANTS.NAVHOOKS.WHAT}>
          <JContainer content={CONSTANTS.WHAT_SECTION_}></JContainer>
        </Element>
        <Element name={CONSTANTS.NAVHOOKS.WHO}>
          <KContainer content={CONSTANTS.WHO_SECTION_}></KContainer>
        </Element>
        <Element NAME={CONSTANTS.NAVHOOKS.HOW}>
          <LContainer content={CONSTANTS.HOW_SECTION_}></LContainer>
        </Element>
        <Footer
          content={CONSTANTS.FOOTER_SECTION_}
          hasClickedPolicy={this.handlePolicy}
        ></Footer>
      </Container>
    );
  }
}
export default Wrapper;
