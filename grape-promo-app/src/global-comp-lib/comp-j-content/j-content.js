import React, { Component } from "react";
import { JContentStyle, AdjustEl } from "./j-content-styles";
class JContent extends Component {
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
    const { text } = this.props;
    return (
      <div>
        <AdjustEl>
          <JContentStyle>
          <p>{text}</p></JContentStyle>
        </AdjustEl>
      </div>
    );
  }
}
export default JContent;
