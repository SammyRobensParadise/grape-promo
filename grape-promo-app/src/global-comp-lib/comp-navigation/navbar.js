import React, { Component } from "react";
import {
  NavigationContainer,
  NavigationBrand,
  NavigationChild
} from "./navbar-styles";
const NAVIGATION_SECTIONS  = {
    TOP_GRAPE: 'grape',
    WHAT: 'what',
    WHO: 'who',
    HOW: 'how'
}
class Navigation extends Component {
  constructor(props) {
    super(props);
    var {TOP_GRAPE,/*WHAT,WHO,HOW*/}  = NAVIGATION_SECTIONS
    this.state = {
      hasRenderedLocal: false,
      currentScrollPosition: 0,
      ActiveSectionStyle: TOP_GRAPE
    }
  }
  componentDidMount() {
    this.setState({
      hasRenderedLocal: true
    });
  }
  render() {
    return (
      <div>
        <NavigationContainer>
          <NavigationBrand id='grape'>Grape</NavigationBrand>
          <NavigationChild id='what'>What</NavigationChild>
          <NavigationChild id='who'>Who</NavigationChild>
          <NavigationChild id='how'>How</NavigationChild>
        </NavigationContainer>
      </div>
    );
  }
}
export default Navigation;
