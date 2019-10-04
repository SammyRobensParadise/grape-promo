import React, { Component } from "react";
import Container from "./styles/wrapper-styles";
import TitleLarge from './styles/title-main'
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
          <TitleLarge>Grape</TitleLarge>
      </Container>
    );
  }
}
export default Wrapper;
