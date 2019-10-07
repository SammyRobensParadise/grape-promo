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
    const {text} =this.props
    return (
      <div>
          <InformText>{text}</InformText>
      </div>
    );
  }
}
export default Inform;