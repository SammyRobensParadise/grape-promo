import React, { Component } from "react";
import {
  CalltoActionButton,
  CenterEl
} from "./button-call-to-action-styles.js";
import * as Scroll from "react-scroll";
import {
  Link,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
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
    const { text, nav } = this.props;

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
              {text}
            </CalltoActionButton>
          </Link>
        </CenterEl>
      </div>
    );
  }
}
export default ButtonCallToAction;
