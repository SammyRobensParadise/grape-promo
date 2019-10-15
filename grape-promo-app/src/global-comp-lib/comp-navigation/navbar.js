import React, { Component } from "react";
import {
  NavigationContainer,
  NavigationBrand,
  NavigationChild
} from "./navbar-styles";
import {
  Link,
} from "react-scroll";

const NAVIGATION_SECTIONS = {
  TOP_GRAPE: "grape",
  WHAT: "what",
  WHO: "who",
  HOW: "how"
};
class Navigation extends Component {
  constructor(props) {
    super(props);
    var { TOP_GRAPE} = NAVIGATION_SECTIONS;
    this.state = {
      hasRenderedLocal: false,
      currentScrollPosition: 0,
      ActiveSectionStyle: TOP_GRAPE
    };
  }
  componentDidMount() {
    this.setState({
      hasRenderedLocal: true
    });
  }
  render() {
    const { WHAT, WHO, HOW } = this.props.navoptions;
    return (
      <div>
        <NavigationContainer>
          <NavigationBrand id="grape">Grape</NavigationBrand>
          <Link
            activeClass="active"
            className={WHAT}
            to={WHAT}
            spy={true}
            smooth={true}
            duration={700}
          >
            <NavigationChild id="what">What</NavigationChild>
          </Link>
          <Link
            activeClass="active"
            className={WHO}
            to={WHO}
            spy={true}
            smooth={true}
            duration={700}
          >
            <NavigationChild id="who">Who</NavigationChild>
          </Link>
          <Link
            activeClass="active"
            className={HOW}
            to={HOW}
            spy={true}
            smooth={true}
            duration={700}
          >
            <NavigationChild id="how">How</NavigationChild>
          </Link>
        </NavigationContainer>
      </div>
    );
  }
}
export default Navigation;
