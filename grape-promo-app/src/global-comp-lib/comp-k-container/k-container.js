import React, { Component } from "react";
import {
  KContainerStyle,
  CenterEl,
  ButtonContainer,
  SpacingArea,
  FlowArea
} from "./k-container-styles";
import SectionTitle from "../comp-section-title/section-title";
import ButtonCallToAction from "../comp-cta-button/button-call-to-action-styles.js/button-call-to-action.js";
import Inform from "../comp-call-to-action/inform";
class KContainer extends Component {
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
    const { TITLE, CONTENT, BUTTON_TEXT } = this.props.content;
    return (
      <div>
        <CenterEl>
          <KContainerStyle>
            <SectionTitle text={TITLE}></SectionTitle>
            <SpacingArea>
              <Inform text={CONTENT}></Inform>
            </SpacingArea>
            <FlowArea></FlowArea>
          </KContainerStyle>
          <ButtonContainer>
            <ButtonCallToAction text={BUTTON_TEXT}></ButtonCallToAction>
          </ButtonContainer>
        </CenterEl>
      </div>
    );
  }
}
export default KContainer;
