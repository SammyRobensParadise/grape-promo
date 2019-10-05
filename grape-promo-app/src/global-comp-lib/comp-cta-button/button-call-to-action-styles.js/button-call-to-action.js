import React, { Component } from "react";
import {
  CalltoActionButton,
  CenterEl
} from "./button-call-to-action-styles.js";
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
  render() {
    const { text } = this.props;
    return (
      <div>
        <CenterEl>
          <CalltoActionButton>{text}</CalltoActionButton>
        </CenterEl>
      </div>
    );
  }
}
export default ButtonCallToAction;
