import React, { Component } from "react";
import { SectionText } from "./section-title-styles";
class SectionTitle extends Component {
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
        <SectionText>{text}</SectionText>
      </div>
    );
  }
}
export default SectionTitle;
