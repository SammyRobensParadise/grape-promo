import React, { Component } from "react";
import {
  CalltoActionButton,
  CenterEl
} from "./button-call-to-action-styles.js";
import { Link, Events, animateScroll as scroll } from "react-scroll";
import * as cssConstants from "../../../global-styling/css-constants";

class ButtonCallToAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasRenderedLocal: false,
      text: props
    };
  }
  componentDidMount() {
    this.setState({
      hasRenderedLocal: true
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };
  scrollToSection = nav => {};
  render() {
    const { text, nav, mobile_text } = this.props;
    const displayText =
      window.innerWidth < parseInt(cssConstants.breakSix, 10)
        ? mobile_text
        : text;

    return (
      <div>
        <CenterEl>
          <Link
            activeClass="active"
            className={nav}
            to={nav}
            spy={true}
            smooth={true}
            duration={700}
          >
            <CalltoActionButton onClick={() => this.scrollToSection(nav)}>
              {mobile_text === undefined ? text : displayText}
            </CalltoActionButton>
          </Link>
        </CenterEl>
      </div>
    );
  }
}
export default ButtonCallToAction;
