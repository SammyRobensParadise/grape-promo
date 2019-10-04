import React, { Component } from "react";
import Container from "./styles/wrapper-styles";
import TitleLarge from './styles/title-main'
import Navigation from './global-comp-lib/comp-navigation/navbar'
import Inform from './global-comp-lib/comp-call-to-action/inform'
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
      </Container>
    );
  }
}
export default Wrapper;
