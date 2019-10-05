import React, { Component } from "react";
import Container from "./styles/wrapper-styles";
import TitleLarge from './styles/title-main'
import Navigation from './global-comp-lib/comp-navigation/navbar'
import Inform from './global-comp-lib/comp-call-to-action/inform'
import ButtonCallToAction from './global-comp-lib/comp-cta-button/button-call-to-action-styles.js/button-call-to-action'
//text constants
const FIND_OUT_HOW  = 'Find out How'
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
          <Navigation/>
          <TitleLarge>Grape</TitleLarge>
          <Inform></Inform>
          <ButtonCallToAction text={FIND_OUT_HOW}></ButtonCallToAction>
      </Container>
    );
  }
}
export default Wrapper;
