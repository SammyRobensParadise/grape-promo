import React, { Component } from "react";
import {InformText} from './inform-styles'
class Inform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasRenderedLocal: false,
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
          <InformText>We are working to build a platform that will change the way people learn code</InformText>
      </div>
    );
  }
}
export default Inform;