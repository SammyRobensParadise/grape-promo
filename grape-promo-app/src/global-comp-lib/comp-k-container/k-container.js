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
import AboutUs from './k-comp-lib/about-us'
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
    const { TITLE, CONTENT, BUTTON_TEXT, SAMMY_DEF,ASH_DEF,ANDREW_DEF } = this.props.content;
    const DEF = {
        SAMMY_DEF,
        ASH_DEF,
        ANDREW_DEF
    }
    return (
      <div>
        <CenterEl>
          <KContainerStyle>
            <SectionTitle text={TITLE}></SectionTitle>
            <SpacingArea>
              <Inform text={CONTENT}></Inform>
            </SpacingArea>
            <FlowArea>
                <AboutUs text={DEF}></AboutUs>
            </FlowArea>
          </KContainerStyle>
        </CenterEl>
       <ButtonContainer lower>
            <ButtonCallToAction text={BUTTON_TEXT}></ButtonCallToAction>
       </ButtonContainer> 
      </div>
    );
  }
}
export default KContainer;
